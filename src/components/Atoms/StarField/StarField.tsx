import React, {FC, useEffect, useRef} from "react";
import * as THREE from 'three';

// const HOOK_SVG =  'm129.03125 63.3125c0-34.914062-28.941406-63.3125-64.519531-63.3125-35.574219 0-64.511719 28.398438-64.511719 63.3125 0 29.488281 20.671875 54.246094 48.511719 61.261719v162.898437c0 53.222656 44.222656 96.527344 98.585937 96.527344h10.316406c54.363282 0 98.585938-43.304688 98.585938-96.527344v-95.640625c0-7.070312-4.640625-13.304687-11.414062-15.328125-6.769532-2.015625-14.082032.625-17.960938 6.535156l-42.328125 64.425782c-4.847656 7.390625-2.800781 17.3125 4.582031 22.167968 7.386719 4.832032 17.304688 2.792969 22.160156-4.585937l12.960938-19.71875v42.144531c0 35.582032-29.863281 64.527344-66.585938 64.527344h-10.316406c-36.714844 0-66.585937-28.945312-66.585937-64.527344v-162.898437c27.847656-7.015625 48.519531-31.773438 48.519531-61.261719zm-97.03125 0c0-17.265625 14.585938-31.3125 32.511719-31.3125 17.929687 0 32.511719 14.046875 32.511719 31.3125 0 17.261719-14.582032 31.3125-32.511719 31.3125-17.925781 0-32.511719-14.050781-32.511719-31.3125zm0 0';
// const HOOK_PATH = new Path2D(HOOK_SVG);
// const SCALE = 0.3;
// const OFFSET = 80;
//
// function draw(ctx: CanvasRenderingContext2D, location: { x:number, y: number}) {
//   ctx.fillStyle = 'deepskyblue';
//   ctx.shadowColor = 'dodgerblue';
//   ctx.shadowBlur = 20;
//   ctx.save();
//   ctx.scale(SCALE, SCALE);
//   ctx.translate(location.x / SCALE - OFFSET, location.y / SCALE - OFFSET);
//   ctx.fill(HOOK_PATH);
//   ctx.restore()
// }

// const drawNew = () => {
//   var scene = new THREE.Scene();
//   var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
//
//   var renderer = new THREE.WebGLRenderer();
//   renderer.setSize( window.innerWidth, window.innerHeight );
//   document.body.appendChild( renderer.domElement );
// };

const StarField: FC = () => {
  const mount = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mountCurrent = mount && mount.current;
    if(mountCurrent) {
      let width = mountCurrent.clientWidth;
      let height = mountCurrent.clientHeight;
      let frameId: any;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      const geometry = new THREE.BoxGeometry(1, 1, 1);
      const material = new THREE.MeshBasicMaterial({ color: 0xff00ff });
      const cube = new THREE.Mesh(geometry, material);

      camera.position.z = 4;
      scene.add(cube);
      // renderer.setClearColor('#000000');
      renderer.setSize(width, height);

      const renderScene = () => {
        renderer.render(scene, camera)
      };

      const handleResize = () => {
        width = mountCurrent.clientWidth;
        height = mountCurrent.clientHeight;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderScene()
      };

      const animate = () => {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        renderScene();
        frameId = window.requestAnimationFrame(animate)
      };

      const start = () => {
        if (!frameId) {
          frameId = requestAnimationFrame(animate)
        }
      };

      const stop = () => {
        cancelAnimationFrame(frameId);
        frameId = null
      };

      mountCurrent.appendChild(renderer.domElement);
      window.addEventListener('resize', handleResize);
      start();

      // controls.current = { start, stop }

      return () => {
        stop();
        window.removeEventListener('resize', handleResize);
        mountCurrent.removeChild(renderer.domElement);

        scene.remove(cube);
        geometry.dispose();
        material.dispose()
      }
    }
    return () => {};

  }, []);

  // return <div className="vis" ref={mount} onClick={() => setAnimating(!isAnimating)} />;
  return <div style={{ width: "100%", height: "400px"}} ref={mount} />;

  // const [foo] = useState(false);
  // return <div>{foo}</div>
  // const canvasRef = useRef<HTMLCanvasElement>(null);
  // return (<div style={{ width: "300px", height: "400px", backgroundColor: "blue"}}>starfield<canvas
  //   ref={canvasRef}
  //   width={window.innerWidth}
  //   height={window.innerHeight}
  //   onClick={e => {
  //     const canvas = canvasRef.current;
  //     const ctx = canvas ? canvas.getContext('2d') : false;
  //     if(ctx) {
  //       draw(ctx, { x: e.clientX, y: e.clientY });
  //     }
  //   }}
  // /></div>);
};

export default StarField;
