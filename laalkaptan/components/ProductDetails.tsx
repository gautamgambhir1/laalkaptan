import * as React from "react";
import { SizeSelector } from "./SizeSelector";
import { QuantitySelector } from "./QuantitySelector";
import { ColorSelector } from "./ColorSelector";

export function ProductDetails() {
  return (
    <section className="inline-flex absolute left-12 flex-col gap-7 items-start h-[676px] top-[172px] w-[434px] z-3 max-md:static max-md:px-5 max-md:py-0 max-md:mx-auto max-md:mb-10 max-md:w-full max-md:max-w-[500px] max-md:mt-[620px] max-sm:px-4 max-sm:py-0 max-sm:mx-auto max-sm:mb-8 max-sm:mt-[480px]">
      <div className="flex flex-col items-start">
        <p className="text-5xl tracking-wider text-zinc-500 w-[350px] max-sm:text-4xl">
          2025
        </p>
        <h2 className="text-4xl font-bold tracking-wider text-black w-[386px] max-sm:text-3xl">
          New collection
        </h2>
      </div>

      <ColorSelector />

      <article className="flex flex-col gap-7 items-start px-0 py-5 rounded-3xl border-white border-[0.5px] w-[434px] max-sm:px-0 max-sm:py-4">
        <div className="flex gap-12 items-start self-stretch px-5 py-0">
          <div className="flex justify-between items-start w-full">
            <div className="flex flex-col gap-1 items-start w-[249px]">
              <h3 className="text-2xl font-semibold tracking-wide text-black">
                Bleed Flex
              </h3>
              <p className="text-base font-medium tracking-wide text-neutral-700">
                Unisex 260 GSM Cotton Lycra
              </p>
            </div>
            <p className="text-2xl font-bold tracking-widest text-right text-black w-[99px]">
              ₹ 1500
            </p>
          </div>
        </div>

        <SizeSelector />
        <QuantitySelector />
      </article>

      <div className="flex gap-2 items-center max-sm:flex-col max-sm:w-full">
        <button className="flex gap-2.5 justify-center items-center px-12 py-4 bg-white rounded-3xl max-sm:p-4 max-sm:w-full hover:bg-gray-100 transition-colors">
          <span className="text-xl font-semibold text-black">
            ADD TO CART
          </span>
        </button>
        <button className="flex gap-2.5 justify-center items-center px-12 py-4 bg-black rounded-3xl max-sm:p-4 max-sm:w-full hover:bg-gray-800 transition-colors">
          <span className="text-xl font-semibold text-white">
            BUY NOW
          </span>
        </button>
      </div>
    </section>
  );
}
