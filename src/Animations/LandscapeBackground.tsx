import React, { Component } from 'react';

import Snap, { SnapElement, SnapGroup } from 'snapsvg-cjs';
import SimplexNoise from 'simplex-noise';
import { Fade } from '@material-ui/core';

const options = {
  segments: 40,
  interval: 1500,
  travelTime: 30000,
  simplexYStep: 0.1,
  simplexXScale: 6,
  valleySteepness: 1,
  perspective: 2,
  prerender: navigator.userAgent.toLowerCase().indexOf('firefox') > -1 ? 0 : 20,
};

interface ILandscapeBackgroundProps {
  className?: string;
}

export class LandscapeBackground extends Component<ILandscapeBackgroundProps> {
  private seed: number;
  private noise: SimplexNoise;
  private interval: NodeJS.Timer;
  private snap: SnapElement;
  private group: SnapGroup;

  constructor(props: ILandscapeBackgroundProps) {
    super(props);
    this.seed = Math.floor(Math.random() * 1000);
    this.noise = new SimplexNoise(this.seed.toString());
  }

  public componentDidMount() {
    this.snap = Snap('#landscape');
    this.group = this.snap.g();

    this.snap.attr({
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

    document.addEventListener('visibilitychange', this.togglePause);
  }

  public componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
    document.removeEventListener('visibilitychange', this.togglePause);
  }

  public render() {
    const { travelTime, perspective, prerender, interval } = options;
    const animationDelays = new Array(prerender).map(
      (value: undefined, index: number) => index * interval
    );

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
					${animationDelays
            .map(
              (delay: number, index: number) => `
					.early${index + 1} {
						animation-delay: -${delay}ms;
					}
					`
            )
            .join('\n')}
					`}</style>
        </svg>
      </Fade>
    );
  }

  private makeSVGPath(coordinates: number[][]) {
    return 'M' + coordinates.map(tuple => tuple.join(',')).join('L');
  }

  private togglePause = () => {
    this.group.toggleClass('paused', document.hidden);
  };

  private emitPath(simplexYOffset: number, prerenderOffset?: number) {
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

    const pathString = this.makeSVGPath(coordinates);
    const path = this.snap.path(pathString);
    this.group.add(path);
    path.addClass('perspective');
    if (prerenderOffset) {
      path.addClass(`early${prerenderOffset}`);
    }
  }
}
