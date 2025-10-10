import React from "react";

export function AnimatedGridBackground() {
  return (
    <div className="absolute inset-0 opacity-10" aria-hidden="true">
      <div
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,215,0,0.08)_1px,transparent_1px),linear-gradient(rgba(255,215,0,0.08)_1px,transparent_1px)] bg-[size:80px_80px]"
        style={{ transform: "none" }}
      />
    </div>
  );
}
