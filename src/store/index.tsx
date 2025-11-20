import { create } from "zustand";

type phoneXStore = {
  color: string;
  setColor: (color: string) => void;

  scale: number;
  setScale: (scale: number) => void;

  texture: string;
  setTexture: (texture: string) => void;

  reset: () => void;
};

// solarized palette
export const solarized = {
  base03: "#002b36",
  base02: "#073642",
  base01: "#586e75",
  base00: "#657b83",
  base0: "#839496",
  base1: "#93a1a1",
  base2: "#eee8d5",
  base3: "#fdf6e3",
  yellow: "#b58900",
  orange: "#cb4b16",
  red: "#dc322f",
  magenta: "#d33682",
  violet: "#6c71c4",
  blue: "#268bd2",
  cyan: "#2aa198",
  green: "#859900",
};

const DEFAULT_COLOR = solarized.base02; 
const DEFAULT_SCALE = 0.08;
const DEFAULT_TEXTURE = "/videos/texture-1.mp4";

const usePhoneXStore = create<phoneXStore>((set) => ({
  color: DEFAULT_COLOR,
  setColor: (color) => set({ color }),

  scale: DEFAULT_SCALE,
  setScale: (scale) => set({ scale }),

  texture: DEFAULT_TEXTURE,
  setTexture: (texture) => set({ texture }),

  reset: () =>
    set({
      color: DEFAULT_COLOR,
      scale: DEFAULT_SCALE,
      texture: DEFAULT_TEXTURE,
    }),
}));

export default usePhoneXStore;
