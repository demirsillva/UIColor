import React, { useState, useEffect } from "react";

interface ColorInputProps {
  onColorGenerated: (color: string) => void;
}

function ColorInput({ onColorGenerated }: ColorInputProps) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === " " || event.key === "Spacebar") {
        handleRandomColorGeneration();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const generateRandomHexCode = () => {
    const stringsCode = "0123456789abcdef";
    let color = "#";

    for (let i = 0; i < 6; i++) {
      color += stringsCode[Math.floor(Math.random() * 16)];
    }

    return color;
  };

  const [hexCode, setHexCode] = useState("");
  const [colorsGenerated, setColorsGenerated] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newHexCode = event.target.value;
    setHexCode(newHexCode);
    onColorGenerated(newHexCode);
  };

  const handleRandomColorGeneration = () => {
    const randomHexCode = generateRandomHexCode();
    setHexCode(randomHexCode);
    onColorGenerated(randomHexCode);

    const activeElement = document.activeElement as HTMLElement | null;

    if (activeElement) {
      activeElement.blur();
    }
  };

  useEffect(() => {
    if (!colorsGenerated) {
      const initialRandomHexCode = generateRandomHexCode();
      setHexCode(initialRandomHexCode);
      onColorGenerated(initialRandomHexCode);
      setColorsGenerated(true);
    }
  }, [onColorGenerated, colorsGenerated]);

  return (
      <div className="flex items-center h-14 max-sm:h-[63px] border border-gray-400 rounded-full">
        <input
          type="text"
          value={hexCode}
          onChange={handleInputChange}
          className="px-6 pl-16 w-full font-medium h-full rounded-full bg-transparent max-sm:dark:bg-indigo-950 max-sm:bg-zinc-50 text-zinc-600 dark:text-zinc-200"
        />

        <div className="absolute inline-block w-9 h-9 ml-3">
          <input
            type="color"
            value={hexCode}
            onChange={handleInputChange}
            className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
          />
          <div
            className="w-full h-full rounded-full"
            style={{ backgroundColor: hexCode }}
          ></div>
        </div>

        <div className="relative top-[16.5px] lg:hidden">
          <button
            type="button"
            onClick={handleRandomColorGeneration}
            className="absolute right-[.75rem] bottom-0 border border-gray-300 px-4 py-1 rounded-full text-zinc-700 dark:text-zinc-50 dark:bg-indigo-950"
          >
            Random
          </button>
        </div>
      </div>
  );
}

export default ColorInput;