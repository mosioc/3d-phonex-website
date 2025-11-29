import React, { useEffect, useState } from "react";
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

  // detect if device is desktop (has mouse, not touch)
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => {
      const hasMouse = window.matchMedia("(pointer: fine)").matches;
      const hasTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
      setIsDesktop(hasMouse && !hasTouch);
    };
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

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
            <h4 className="text-lime-50">{title}</h4>
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

        {/* hints - only show on desktop */}
        {isDesktop && (
          <div className="model-view-color-picker absolute top-4 right-4 bg-black/70 text-white text-xs px-3 py-2 rounded border border-white/10 pointer-events-none z-10">
            <p>ctrl + scroll → zoom</p>
            <p>shift + drag → move anchor</p>
          </div>
        )}
      </div>

      <Canvas
        id="canvas"
        camera={{ position: [0, 2, 5], fov: 50, near: 0.1, far: 100 }}
      >
        <Lighter />
        <ModelPhonex scale={scale} position={[0, 0, 1]} color={color} />
       
        <OrbitControls enableZoom={true} enablePan={true} />
      </Canvas>
    </section>
  );
};

export default ModelView;