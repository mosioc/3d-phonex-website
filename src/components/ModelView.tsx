import React from "react";

type Props = {
  title: string;
};

export default function ModelView({ title }: Props) {
  return (
    <div className="p-4 bg-gray-100 rounded">
      <h1 className="text-xl font-bold">{title}</h1>
      <p>test</p>
    </div>
  );
}
