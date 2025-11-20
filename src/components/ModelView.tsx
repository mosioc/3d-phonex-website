import React from "react";
import usePhonex, { solarized } from "../store";
import { clsx } from "clsx";
import { Canvas } from "@react-three/fiber";
import ModelPhonex from "./models/Samsung_galaxy_s22_ultra";
import { OrbitControls } from "@react-three/drei";
import Lighter from "./Lighter";

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
              onClick={() => setScale(0.2)}
              className={clsx(
                "px-3 py-1 rounded cursor-pointer border",
                scale === 0.2
                  ? "bg-white text-black"
                  : "bg-transparent text-white"
              )}
            >
              <p>S</p>
            </div>
            <div
              onClick={() => setScale(0.3)}
              className={clsx(
                "px-3 py-1 rounded cursor-pointer border",
                scale === 0.3
                  ? "bg-white text-black"
                  : "bg-transparent text-white"
              )}
            >
              <p>M </p>
            </div>
          </div>
        </div>
      </div>

      <Canvas
        id="canvas"
        camera={{ position: [0, 2, 5], fov: 50, near: 0.1, far: 100 }}
      >
        <Lighter /> 

        <ModelPhonex scale={scale} position={[0, 0, 1]} />

        <OrbitControls enableZoom={true} enablePan={true} />
      </Canvas>
    </section>
  );
};

export default ModelView;
