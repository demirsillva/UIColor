// import React from 'react';

interface ColorListProps {
  colors: string[]; // Array de códigos HEX de cores
}

function ColorList({ colors }: ColorListProps) {
  return (
    <div>
      {colors.map((color, index) => (
        <div key={index}>
          {color}
        </div>
      ))}
    </div>
  );
}

export default ColorList;
