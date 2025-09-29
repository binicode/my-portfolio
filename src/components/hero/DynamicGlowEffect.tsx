import React from "react";

interface DynamicGlowEffectProps {
  mousePosition: { x: number; y: number };
}

export function DynamicGlowEffect({ mousePosition }: DynamicGlowEffectProps) {
  return (
    <div
      className="absolute w-[600px] h-[600px] bg-gradient-radial from-yellow-400/15 via-yellow-500/10 to-transparent rounded-full blur-3xl pointer-events-none"
      style={{
        left: `${mousePosition.x}%`,
        top: `${mousePosition.y}%`,
        transform: "translate(-50%, -50%)",
        transition: "all 0.4s ease-out",
      }}
    />
  );
}