import { useEffect, useState } from "react";

interface ContrastGridProps{
    baseColor: string;
    steps: number;
}

interface ContrastGridState {
    [key: string]: number;
}

function ContrastGrid({ baseColor, steps }: ContrastGridProps) {
  const [contrastGrid, setContrastGrid] = useState<ContrastGridState>({});
  const [copiedColor, setCopiedColor] = useState<string | null>(null);


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
    if(baseColor && typeof baseColor === "string"){
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

      const newColor = `#${newR.toString(16).padStart(2, "0")}${newG
        .toString(16)
        .padStart(2, "0")}${newB.toString(16).padStart(2, "0")}`;
      const contrast = calculateContrast(baseColor, newColor);

      newContrastGrid[newColor] = contrast;
    }

    setContrastGrid(newContrastGrid);
  }

  function copyToClipboard(color: string) {
    navigator.clipboard.writeText(color);
    setCopiedColor(color);

    setTimeout(() => {
      setCopiedColor(null);
    }, 6000);
  }

  return (
      <div className="grid lg:grid-cols-11 md:grid-cols-4 sm:grid-cols-2 gap-4 h-24 mt-5">
        {Object.entries(contrastGrid).map(([color, contrast], index) => (
          <div
            key={index}
            style={{
              backgroundColor: color,
              color: contrast < 3.3 ? "black" : "white",
            }}
            className="flex content-end rounded-md cursor-pointer"
            onClick={() => copyToClipboard(color)}
          >
            {color}
            <br />
            {contrast.toFixed(2)}
          </div>
        ))}
        {copiedColor && (
          <div className="absolute bottom-10 bg-green-500 text-green-50 w-80 h-16 flex justify-center items-center rounded-md">
            Copied: {copiedColor}
          </div>
      )}
      </div>
  );
}

export default ContrastGrid;
