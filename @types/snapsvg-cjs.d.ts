// Custom typings for Snap.
// Based on the source code found at https://github.com/geelen/Snap.svg-cjs/blob/master/dist/snap.svg-cjs.js.
// Note that these type definitions are only described for the parts we use. They do not cover the codebase at all.

declare module 'snapsvg-cjs' {
  type DomNode = SVGElement | HTMLElement | Element | null;
  type Width = number | string | DomNode;
  type Height = number;

  export interface SnapChild {
    addClass: (className: string) => void;
    remove: () => void;
  }

  export interface SnapGroup {
    toggleClass: (className: string, applyClass: boolean) => void;
    addClass: (className: string) => void;
    children: () => SnapChild[];
    add: (elem: SnapChild) => void;
  }

  export interface SnapElement {
    g: () => SnapGroup;
    path: (path: string) => SnapChild;
    attr: (params: Object) => void;
    animate: (props: Object, duration: number) => void;
  }

  function Snap(w: Width, h?: Height): SnapElement;

  export default Snap;
}
