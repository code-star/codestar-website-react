import React, {CSSProperties, FC} from "react";

// Make sure the component takes up 100vh while loading/rendering
const FullHeight: FC<{}> = props => {
  const styles: CSSProperties = {
    minHeight: '100vh',
  };
  return <div style={styles}>{props.children}</div>;
};

export default FullHeight;
