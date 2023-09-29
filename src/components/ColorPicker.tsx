import React, { useState, useEffect } from 'react';

// Função para gerar cores aleatórias no formato HSL
function generateRandomColor(minLuminosity: number, maxLuminosity: number): string {
  const randomLuminosity = Math.floor(Math.random() * (maxLuminosity - minLuminosity + 1) + minLuminosity);
  return `hsl(0, 100%, ${randomLuminosity}%)`;
}

const ColorPicker: React.FC = () => {
  const [colors, setColors] = useState<string[]>([]);
  const minLuminosity = 50;
  const maxLuminosity = 950;

  // Função para adicionar uma nova cor à lista de cores
  const addRandomColor = () => {
    const newColor = generateRandomColor(minLuminosity, maxLuminosity);
    setColors((prevColors) => [...prevColors, newColor]);
  };

  // Ao pressionar a tecla "espaço", adiciona uma nova cor
  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === ' ') {
      addRandomColor();
    }
  };

  useEffect(() => {
    // Adicione um ouvinte de evento global para a tecla "espaço"
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      // Remova o ouvinte de evento ao desmontar o componente
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div>
      <button onClick={addRandomColor}>Adicionar Cor Aleatória</button>
      <div className="flex flex-wrap">
        {colors.slice().reverse().map((color, index) => (
          <div
            key={index}
            className="w-16 h-16 rounded-full m-2"
            style={{ backgroundColor: color }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;
