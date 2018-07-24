import React, { Component } from 'react';

import Snap from 'snapsvg-cjs';
import SimplexNoise from 'simplex-noise';
import { Fade } from '@material-ui/core';

const options = {
	segments: 50,
	interval: 1000,
	travelTime: 30000,
	simplexYStep: 0.1,
	simplexXScale: 6,
	valleySteepness: 1,
	perspective: 2,
	prerender: navigator.userAgent.toLowerCase().indexOf('firefox') > -1 ? 0 : 20,
};

function makeSVGPath(coordinates) {
	return 'M' + coordinates.map(tuple => tuple.join(',')).join('L');
}

class LandscapeBackground extends Component {
	constructor(props) {
		super(props);
		this.seed = Math.floor(Math.random() * 1000);
		this.noise = new SimplexNoise(this.seed);
	}

	emitPath(simplexYOffset, prerenderOffset) {
		const {
			simplexYStep,
			segments,
			simplexXScale,
			valleySteepness,
			travelTime,
			interval,
		} = options;

		if (this.group.children().length > travelTime / interval) {
			this.group.children()[0].remove();
		}

		const simplexY = simplexYOffset * simplexYStep;
		// Wrap paths with coordinates far away
		// This forces each path to have the same bounding rect
		// Because Firefox and Chrome have different positioning systems
		const coordinates = [[-2, -2]];
		for (let i = 0; i <= segments; ++i) {
			const simplexX = (simplexXScale * i) / segments;
			const height = (this.noise.noise2D(simplexX, simplexY) + 1) / 2; // Simplex height is between -1 and 1, we normalize
			const x = i / segments;
			const valleyModifier = valleySteepness * (4 * x * x - 4 * x + 1); // Parabola where y=1 at x=(0, 1) and y=0 at x=0.5
			const y = 1 - valleyModifier * height;
			coordinates.push([x, y]);
		}
		coordinates.push([2, 2]);

		const pathString = makeSVGPath(coordinates);
		const path = this.s.path(pathString);
		this.group.add(path);
		path.addClass('perspective');
		if (prerenderOffset) {
			path.addClass(`early${prerenderOffset}`);
		}
	}

	componentDidMount() {
		this.s = Snap('#landscape');
		this.group = this.s.g();

		this.s.attr({
			viewBox: '0 0 1 1',
			preserveAspectRatio: 'none',
		});

		let simplexYOffset = 0;

		// Make it look like the animation was already going on for a while
		// We put the "old" ones first so that they are deleted in the correct order
		for (let i = options.prerender - 1; i >= 0; --i) {
			this.emitPath(simplexYOffset, i + 1);
			simplexYOffset += 1;
		}

		this.interval = setInterval(() => {
			if (!document.hidden) {
				this.emitPath(simplexYOffset);
				simplexYOffset += 1;
			}
		}, options.interval);

		this.togglePause = () => this.group.toggleClass('paused', document.hidden);
		document.addEventListener('visibilitychange', this.togglePause);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
		document.removeEventListener('visibilitychange', this.togglePause);
	}

	render() {
		const { travelTime, perspective, prerender, interval } = options;

		// About setting stroke-opacity to a value higher than 1:
		// Because paths are scaled by 'perspective' times,
		// they are blown out of view. When it scales back down and becomes visible,
		// they would be almost invisible if opacity started at 1

		return (
			<Fade in timeout={5000}>
				<svg id="landscape" className={this.props.className}>
					<style>{`
					@keyframes perspectiveMove {
						from {
							transform: translateY(0px) scale(${perspective}, ${perspective});
							stroke-opacity: ${perspective};
						}
						to {
							transform: translateY(-0.5px) scale(1, 1);
							stroke-opacity: 0;
						}
					}
					.perspective {
						will-change: transform, opacity;
						transform-origin: center;
						vector-effect: non-scaling-stroke;
						fill: none;
						stroke: white;
						stroke-width: 1;
						animation: perspectiveMove ${travelTime}ms cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
					}
					.paused * {
						animation-play-state: paused;
					}
					${[...Array(prerender).keys()]
						.map(
							i => `
					.early${i + 1} {
						animation-delay: -${i * interval}ms;
					}
					`
						)
						.join('\n')}
					`}</style>
				</svg>
			</Fade>
		);
	}
}

export default LandscapeBackground;
