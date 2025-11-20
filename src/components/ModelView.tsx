import React from "react";
import usePhonex, { solarized } from "../store";
import { clsx } from "clsx";
import { Canvas } from "@react-three/fiber";
import { Box } from "@react-three/drei/core/shapes";

type Props = {
  title: string;
};
const ModelView: React.FC<Props> = ({ title }: Props) => {
  const { color, scale, setColor, setScale } = usePhonex();

  return (
    <section className="p-4 rounded">
      <div className="model-view">
        <div className="flex-center gap-5 mt-5">
          {/* color picker */}
          <div className="model-view-color-picker flex gap-2">
            <div
              onClick={() => setColor(solarized.base1)}
              className={clsx(
                "w-6 h-6 rounded cursor-pointer border-2",
                color === solarized.base1 && "border-white"
              )}
              style={{ backgroundColor: solarized.base1 }}
            />
            <div
              onClick={() => setColor(solarized.base02)}
              className={clsx(
                "w-6 h-6 rounded cursor-pointer border-2",
                color === solarized.base02 && "border-white"
              )}
              style={{ backgroundColor: solarized.base02 }}
            />
            {title}
          </div>

          {/* scale picker */}
          <div className="model-view-scale-picker flex gap-2">
            <div
              onClick={() => setScale(0.06)}
              className={clsx(
                "px-3 py-1 rounded cursor-pointer border",
                scale === 0.06
                  ? "bg-white text-black"
                  : "bg-transparent text-white"
              )}
            >
              <p>small </p>
            </div>
            <div
              onClick={() => setScale(0.08)}
              className={clsx(
                "px-3 py-1 rounded cursor-pointer border",
                scale === 0.08
                  ? "bg-white text-black"
                  : "bg-transparent text-white"
              )}
            >
              <p>big </p>
            </div>
          </div>
        </div>
      </div>

      <Canvas
        id="canvas"
        camera={{ position: [0, 2, 5], fov: 50, near: 0.1, far: 100 }}
      >
        <Box />

      </Canvas>
    </section>
  );
};

export default ModelView;
