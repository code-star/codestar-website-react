import React, {FC, useRef} from "react";

const StarField: FC = () => {
  // const [foo] = useState(false);
  // return <div>{foo}</div>
  const canvasRef = useRef<HTMLCanvasElement>(null);
  return (<div style={{ width: "300px", height: "400px", backgroundColor: "blue"}}>starfield<canvas
    ref={canvasRef}
    width={window.innerWidth}
    height={window.innerHeight}
    onClick={e => {
      const canvas = canvasRef.current;
      const ctx = canvas ? canvas.getContext('2d') : null;
      console.log(ctx);
      // implement draw on ctx here
    }}
  /></div>);
};

export default StarField;
