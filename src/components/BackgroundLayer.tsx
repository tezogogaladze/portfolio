"use client";

import ColorBends from "./ColorBends";
import DotField from "./DotField";

export default function BackgroundLayer() {
  return (
    <div
      className="fixed inset-0 z-0"
      aria-hidden="true"
      style={{ pointerEvents: "none" }}
    >
      <div className="absolute inset-0 z-0">
        <ColorBends
          color="#A855F7"
          speed={0.2}
          frequency={0.75}
          noise={0}
          bandWidth={5}
          rotation={90}
          fadeTop={10}
          iterations={2}
          intensity={100.0}
        />
      </div>

      <div className="absolute inset-0 z-[1]">
        <DotField
          dotRadius={1.5}
          dotSpacing={14}
          cursorRadius={500}
          cursorForce={0.10}
          bulgeOnly={true}
          bulgeStrength={67}
          glowRadius={160}
          sparkle={false}
          waveAmplitude={0}
        />
      </div>
    </div>
  );
}
