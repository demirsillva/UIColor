import { useEffect, useState } from 'react';

interface ContrastGridProps{
    baseColor: string;
    steps: number;
}

interface ContrastGridState {
    [key: string]: number;
}

function ContrastGrid({ baseColor, steps }: ContrastGridProps) {
  const [contrastGrid, setContrastGrid] = useState<ContrastGridState>({});

  function calculateLuminance(r: number, g: number, b: number) {
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  }

  function calculateContrast(color1: string, color2: string) {
    const [r1, g1, b1] = color1.match(/\w\w/g)?.map((c) => parseInt(c, 16)) || [];
    const [r2, g2, b2] = color2.match(/\w\w/g)?.map((c) => parseInt(c, 16)) || [];

    const luminance1 = calculateLuminance(r1, g1, b1);
    const luminance2 = calculateLuminance(r2, g2, b2);

    const contrast = (Math.max(luminance1, luminance2) + 0.05) / (Math.min(luminance1, luminance2) + 0.05);

    return contrast;
}

useEffect(() => {
    if(baseColor && typeof baseColor === 'string'){
        generateContrastGrid(baseColor, steps);
    }
},[baseColor, steps]);

function generateContrastGrid(baseColor: string, steps: number) {

    const newContrastGrid: ContrastGridState = {};

    for (let i = 0; i < steps; i++) {
      const luminanceDiff = (i - steps / 2) * 0.05;
      const r = parseInt(baseColor.slice(1, 3), 16);
      const g = parseInt(baseColor.slice(3, 5), 16);
      const b = parseInt(baseColor.slice(5, 7), 16);

      const newR = Math.min(255, Math.max(0, r + Math.round(luminanceDiff * 255)));
      const newG = Math.min(255, Math.max(0, g + Math.round(luminanceDiff * 255)));
      const newB = Math.min(255, Math.max(0, b + Math.round(luminanceDiff * 255)));

      const newColor = `#${newR.toString(16).padStart(2, '0')}${newG
        .toString(16)
        .padStart(2, '0')}${newB.toString(16).padStart(2, '0')}`;
      const contrast = calculateContrast(baseColor, newColor);

      newContrastGrid[newColor] = contrast;
    }

    setContrastGrid(newContrastGrid);
  }

  return (
    <div>
      <div className="grid grid-cols-11 gap-4">
        {Object.entries(contrastGrid).map(([color, contrast], index) => (
          <div
            key={index}
            style={{
              backgroundColor: color,
              color: contrast < 4.5 ? 'white' : 'black',
              padding: '1rem',
              textAlign: 'center',
            }}
          >
            {color}
            <br />
            {contrast.toFixed(2)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContrastGrid;
