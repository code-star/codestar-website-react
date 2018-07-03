import React, { Component } from 'react';
import Snap from 'snapsvg-cjs';
import SimplexNoise from 'simplex-noise';

const options = {
	segments: 50,
	interval: 1000,
	travelTime: 30000,
	simplexYStep: 0.1,
	simplexXScale: 6,
	valleySteepness: 1,
	perspective: 2,
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

	emitPath(simplexYOffset) {
		const {
			simplexYStep,
			segments,
			simplexXScale,
			valleySteepness,
			travelTime,
			perspective,
		} = options;

		const simplexY = simplexYOffset * simplexYStep;
		const coordinates = [];
		for (let i = 0; i <= segments; ++i) {
			const simplexX = (simplexXScale * i) / segments;
			const height = (this.noise.noise2D(simplexX, simplexY) + 1) / 2; // Simplex height is between -1 and 1, we normalize
			const x = i / segments;
			const valleyModifier = valleySteepness * (4 * x * x - 4 * x + 1); // Parabola where y=1 at x=(0, 1) and y=0 at x=0.5
			const y = 1 - valleyModifier * height;
			coordinates.push([x, y]);
		}

		const pathString = makeSVGPath(coordinates);
		const path = this.s.path(pathString);

		path.attr({
			'vector-effect': 'non-scaling-stroke',
			fill: 'none',
			stroke: 'white',
			'stroke-width': 1,
			'transform-origin': 'center',
			transform: `translate(0, 0) scale(${perspective}, ${perspective}) `,
			'stroke-opacity': perspective, // Because paths are scaled by 'perspective' times,
			// they are blown out of view. When it scales back down and becomes visible,
			// they would be almost invisible if opacity started at 1
		});

		path.animate(
			{
				transform: `translate(0, -0.5) scale(1, 1)`,
				'stroke-opacity': 0,
			},
			travelTime,
			t => 1 + --t * t * t * t * t,
			function() {
				path.remove();
			}
		);
	}

	componentDidMount() {
		this.s = Snap('#landscape');
		this.s.attr({
			viewBox: '0 0 1 1',
			preserveAspectRatio: 'none',
		});

		let simplexYOffset = 0;
		this.interval = setInterval(() => {
			this.emitPath(simplexYOffset);
			simplexYOffset += 1;
		}, options.interval);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	render() {
		return <svg id="landscape" className={this.props.className} />;
	}
}

export default LandscapeBackground;
