import React, { useState, useEffect } from "react";

interface ColorInputProps{
  onColorGenerated: (color: string) => void;
}

function ColorInput({ onColorGenerated }: ColorInputProps){
    function generateRandomHexCode() {
        const stringsCode = '0123456789abcdef';
        let color = '#';
    
        for (let i = 0; i < 6; i++) {
          color += stringsCode[Math.floor(Math.random() * 16)];
        }
    
        return color;
      }
    
      const [hexCode, setHexCode] = useState(generateRandomHexCode());
    
      const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newHexCode = event.target.value;
        setHexCode(newHexCode);
      };
    
      const handleKeyPress = (event: KeyboardEvent) => {
        if (event.key === ' ' || event.key === 'Spacebar') {
          const randomHexCode = generateRandomHexCode();
          setHexCode(randomHexCode);
          onColorGenerated(randomHexCode);
        }
      };
          
      useEffect(() => {
        const onKeyDown = (event: KeyboardEvent) => {
            handleKeyPress(event);
        };
        
        window.addEventListener('keydown', onKeyDown);
            
        return () => {
          window.removeEventListener('keydown', onKeyDown);
        };
      });

    return (
        <div className="mt-10 max-w-md mx-auto">
            <div className="flex items-center h-12 border border-gray-300 rounded-full">           
                <input
                    type="text" 
                    value={hexCode}
                    onChange={handleInputChange}
                    className="px-6 pl-16 w-full font-medium h-full rounded-full bg-transparent"
                /> 
                <div className="absolute inline-block w-8 h-8 ml-3">
                    <input 
                        type="color" 
                        value={hexCode} 
                        onChange={handleInputChange}
                        className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
                        />      
                    <div className="w-full h-full rounded-full" style={{ backgroundColor: hexCode }}></div>
                </div>
                
            </div>
        </div>
    )
}

export default ColorInput;