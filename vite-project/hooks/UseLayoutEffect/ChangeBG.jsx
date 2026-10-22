import React, { useEffect, useState } from 'react';

const ChangeBG = () => {
  const [color, setColor] = useState('black');

  useEffect(() => {
    document.body.style.backgroundColor = color;

    return () => {
      document.body.style.backgroundColor = '';
    };
  }, [color]);

  return (
    <div style={{ color: color === 'black' ? 'white' : 'black' }}>
      <h1>Current Background Color = {color}</h1>

      <button onClick={() => setColor('red')}>Red</button>
      <button onClick={() => setColor('blue')}>Blue</button>
      <button onClick={() => setColor('yellow')}>Yellow</button>
    </div>
  );
};

export default ChangeBG;