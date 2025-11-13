"use client";
import * as React from "react";

export function ColorSelector() {
  const [selectedColor, setSelectedColor] = React.useState(0);

  const colors = [
    {
      id: 2,
      bg: "",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/4c0a873cd6b640f80ce3b7ab82d06d83678bb7eb?width=134",
    },
    {
      id: 3,
      bg: "",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/11cf390620c2a87520206a1a040a02a978c6a108?width=134",
    },
    {
      id: 4,
      bg: "",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/9be86bd95ea663db0c867f4dfab901df34a6e745?width=134",
    },
  ];

  return (
    <div className="flex flex-col gap-3 items-start w-[434px]">
      <div className="inline-flex relative gap-2 items-center h-[62px] w-[434px]">
        {colors.map((color) => (
          <button
            key={color.id}
            onClick={() => setSelectedColor(color.id)}
            className={`rounded-3xl h-[62px] w-[${color.id === 0 ? "138px" : "67px"}] ${
              color.id === 0 ? color.bg : ""
            } ${selectedColor === color.id ? "ring-2 ring-[#000000]" : ""}`}
          >
            {color.image && (
              <img
                src={color.image}
                alt=""
                className="rounded-3xl h-[62px] w-[67px] object-cover"
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
