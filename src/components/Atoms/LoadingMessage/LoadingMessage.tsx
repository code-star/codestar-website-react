import React from 'react';

const LoadingMessage = () => (
  <div
    style={{
      display: 'flex',
      flex: 1,
      // Needed if the parent has a minHeight, e.f FullHeight component
      minHeight: 'inherit',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <span
      style={{
        color: 'white',
        fontSize: '20px',
      }}
    >
      Loading...
    </span>
  </div>
);

export default LoadingMessage;
