import { useState } from "react";

import Navbar from "./components/Navbar";
import ColorInput from "./components/ColorInput";
import ContrastGrid from "./components/ContrastGrid";
// import ColorList from "./components/ColorList"
// import ColorPicker from "./components/ColorPicker"

import "./App.css";

export default function App() {
  const [colors, setColors] = useState<string[]>([]);

  const addColorToList = (color: string) => {
    setColors([...colors, color]);
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="mb-14">
        <Navbar />
      </div>

      <div className="max-w-2xl px-6 mx-auto mt-1 md:mt-2 md:mb-2 mb-2">
        <div className="rounded-full mt-8 h-10 bg-yellow-300 text-yellow-700 flex md:flex justify-center cursor-pointer">
          <span className="m-auto">Under development!</span>
        </div>

        <div className="text-center">
          <h1 className="mt-8 text-5xl font-bold text-blue-950 dark:text-slate-50">
            Color Generator
            <br />
          </h1>
          <p className="mt-4 font-base text-lg sm:text-xl text-gray-500 dark:text-zinc-200">
            Press spacebar, enter a hexcode or change the
            <br />
            HSL values to create a custom color scale.
          </p>
        </div>

        <ColorInput onColorGenerated={addColorToList} />
      </div>

      <div className="w-[92%] px-6 mx-auto mt-1 md:mt-2 md:mb-2 mb-2">
        {/* <ColorList colors={colors} /> */}
        <ContrastGrid baseColor={colors[colors.length - 1]} steps={11} />
      </div>
    </div>
  );
}
