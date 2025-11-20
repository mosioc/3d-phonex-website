import React from "react";
import usePhonex, { solarized } from "../store";

type Props = {
  title: string;
};

export const ModelView: React.FC<Props> = ({ title }: Props) => {
  const { color, scale, setColor, setScale } = usePhonex();

  return (
    <div className="p-4 bg-gray-100 rounded">
      <h1 className="text-xl font-bold">{title}</h1>
      <p>test</p>
    </div>
  );
};
