import React from 'react';
import Iridescence from './Iridescence';

export default function App() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '600px' }}>
      <Iridescence
        color={[1, 1, 1]}
        mouseReact={false}
        amplitude={0.1}
        speed={1.0}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          fontSize: '48px',
          fontWeight: 'bold',
          pointerEvents: 'none', // so it doesn’t block mouse events
        }}
      >
        Hello World
      </div>
    </div>
  );
}

