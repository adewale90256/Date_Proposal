import { useState } from "react";
import Button from "./Button";

function MovingButton() {
  const messages = [
    "No",
    "Are you sure?",
    "Really? 🥹",
    "Think again 😂",
    "Try YES ❤️",
  ];

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const [text, setText] = useState(messages[0]);

  function moveButton() {
    const x = Math.random() * 220;
    const y = Math.random() * 100;

    setPosition({
      x,
      y,
    });

    setText((currentText) => {
      const currentIndex = messages.indexOf(currentText);

      return messages[Math.min(currentIndex + 1, messages.length - 1)];
    });
  }

  return (
    <div className="relative h-40 w-full">
      <div
        className="absolute transition-all duration-300"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
        onPointerEnter={moveButton}
        onPointerDown={moveButton}
      >
        <Button className="w-44 bg-gray-200 text-gray-700 hover:bg-gray-300">
          {text}
        </Button>
      </div>
    </div>
  );
}

export default MovingButton;
