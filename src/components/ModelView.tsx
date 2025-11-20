import React from "react";
// import usePhonex from "../store";
// import { clsx } from "clsx";

type Props = {
  title: string;
};
const ModelView: React.FC<Props> = ({ title }: Props) => {
  // const { color, scale, setColor, setScale } = usePhonex();

  return (
    <section className="p-4 rounded">
      <div className="">
        <div className="flex-center gap-5 mt-5">
          {/* color picker */}
          <div className="flex gap-2">
            <div />
            <div />
            {title}
          </div>

          {/* scale picker */}
          <div className="flex gap-2">
            <div>
              <p>small </p>
            </div>
            <div>
              <p>big </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default ModelView;