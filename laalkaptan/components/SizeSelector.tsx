"use client";
import * as React from "react";

const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

export function SizeSelector() {
  const [selectedSize, setSelectedSize] = React.useState<string>("");

  return (
    <div className="flex flex-col gap-1 items-start w-[434px]">
      <div className="flex gap-2.5 justify-center items-center px-5 py-0">
        <label className="text-base font-semibold tracking-wide text-neutral-700">
          SIZE
        </label>
      </div>
      <div className="flex gap-3 items-center self-stretch px-5 py-0 max-sm:flex-wrap">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => setSelectedSize(size)}
            className={`flex gap-2.5 justify-center items-center px-4 py-2.5 rounded-3xl transition-colors ${
              selectedSize === size
                ? "bg-black text-white"
                : "bg-white text-black hover:bg-gray-100"
            }`}
          >
            <span className="text-lg font-medium tracking-wide text-center">
              {size}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
