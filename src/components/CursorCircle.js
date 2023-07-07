import React, { useState, useEffect } from "react";

const CursorCircle = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="fixed w-96 h-96 rounded-full  pointer-events-none opacity-5 blur"
      style={{
        left: position.x, // Subtract half of the width to center the cursor
        top: position.y, // Subtract half of the height to center the cursor
        transform: "translate(-50%, -50%)", // Center the circle
        background:
          "radial-gradient(circle, #9bbdeb 20%, #224573 20%, #39577d 20%, #2d4563 40%)",
      }}
    />
  );
};

export default CursorCircle;
