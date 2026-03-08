import React, { useState, useEffect, useRef } from "react";

const CursorCircle = () => {
  const [position, setPosition] = useState({ x: -500, y: -500 });
  const rafRef = useRef(null);
  const targetRef = useRef({ x: -500, y: -500 });
  const currentRef = useRef({ x: -500, y: -500 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      const dx = targetRef.current.x - currentRef.current.x;
      const dy = targetRef.current.y - currentRef.current.y;
      currentRef.current = {
        x: currentRef.current.x + dx * 0.1,
        y: currentRef.current.y + dy * 0.1,
      };
      setPosition({ ...currentRef.current });
      rafRef.current = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", handleMouseMove);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      className="fixed pointer-events-none"
      style={{
        left: position.x,
        top: position.y,
        transform: "translate(-50%, -50%)",
        width: "480px",
        height: "480px",
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(249,115,22,0.10) 0%, rgba(249,115,22,0.04) 40%, transparent 70%)",
        zIndex: 9999,
      }}
    />
  );
};

export default CursorCircle;
