import React, { useMemo } from "react";

interface AnimatedGridBackgroundProps {
  mousePosition: { x: number; y: number };
}

export function AnimatedGridBackground({
  mousePosition,
}: AnimatedGridBackgroundProps) {
  const gridStyle = useMemo(
    () => ({
      transform: `translate(${mousePosition.x * 0.015}px, ${
        mousePosition.y * 0.015
      }px)`,
    }),
    [mousePosition.x, mousePosition.y]
  );

  return (
    <div className="absolute inset-0 opacity-10" aria-hidden="true">
      <div
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,215,0,0.08)_1px,transparent_1px),linear-gradient(rgba(255,215,0,0.08)_1px,transparent_1px)] bg-[size:80px_80px]"
        style={gridStyle}
      />
    </div>
  );
}
