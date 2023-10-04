import { useState } from "react";

import Navbar from "./components/Navbar";
import ColorInput from "./components/ColorInput";
import ContrastGrid from "./components/GenerateContrastGrid";
// import ColorList from "./components/ColorList"

import "./App.css";

export default function App() {
  const [colors, setColors] = useState<string[]>([]);

  const addColorToList = (color: string) => {
    setColors([...colors, color]);
  };

  return (
    <div className="flex flex-col">
      <div className="mb-14">
        <Navbar />
      </div>

      <div className="px-6 mx-auto md:mb-2">
        <div className="rounded-full mt-8 h-10 bg-yellow-300 text-yellow-700 flex md:flex justify-center cursor-pointer">
          <span className="m-auto">Under development!</span>
        </div>

        <div className="text-center">
          <h1 className="mt-8 text-5xl max-sm:text-6xl font-extrabold text-blue-950 dark:text-slate-50">
            Color Generator
            <br />
          </h1>
          <p className="mt-4 font-base text-lg max-sm:text-xl text-gray-500 dark:text-zinc-200">
            Press <span className="max-lg:hidden">spacebar</span><span className="lg:hidden">random</span>, enter a hexcode or change the <br className="max-sm:hidden"/>
            HSL values to create a custom color scale.
          </p>
        </div>
        
        <div className="md:mt-6 max-sm:fixed max-sm:w-[88%] max-sm:bottom-8">
          <ColorInput onColorGenerated={addColorToList}  />
        </div>
      </div>

      <div className="w-full px-6 mx-auto mt-1 md:mt-2 mb-32">
        {/* <ColorList colors={colors} /> */}
        <ContrastGrid baseColor={colors[colors.length - 1]} steps={11} />
      </div>

    </div>
  );
}
