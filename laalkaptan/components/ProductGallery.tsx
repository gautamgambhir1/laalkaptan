"use client";
import * as React from "react";
import { ProductAccordion } from "./ProAccordian";

export function ProductGallery() {
  const [selectedImage, setSelectedImage] = React.useState(0);

  const images = [
    "https://api.builder.io/api/v1/image/assets/TEMP/d1f36b29f794e7ff4237b92d34ed8f79542f4fff?width=482",
    "https://api.builder.io/api/v1/image/assets/TEMP/c499ac92bacabfdd6149d96eeba033cd150329df?width=184",
    "https://api.builder.io/api/v1/image/assets/TEMP/8055fa6b954bcf7fe69ec4520537d92d3433c40f?width=184",
    "https://api.builder.io/api/v1/image/assets/TEMP/8d6a83dc3d22ecc058ce233d25ae264283a7334b?width=184",
    "https://api.builder.io/api/v1/image/assets/TEMP/0e7a8dad6d20b128a8f289aff43f98d88dfb5418?width=184",
  ];

  return (
    <section className="flex absolute flex-col gap-7 items-start h-[396px] left-[1200px] top-[172px] w-[433px] z-3 max-md:static max-md:px-5 max-md:py-0 max-md:mx-auto max-md:mt-0 max-md:mb-10 max-md:w-full max-md:max-w-[500px] max-sm:px-4 max-sm:py-0">
      <div className="flex flex-col gap-4 items-start self-stretch">
        <h3 className="text-base font-semibold tracking-wide text-neutral-700">
          GALLERY
        </h3>
      </div>
      <div className="flex gap-1 items-center self-stretch max-sm:flex-col max-sm:gap-2">
        <img
          src={images[selectedImage]}
          alt="Product main view"
          className="rounded-3xl h-[188px] w-[241px] max-sm:w-full max-sm:h-[200px] object-cover cursor-pointer"
          onClick={() => setSelectedImage(0)}
        />
        <div className="flex flex-col gap-1 items-start w-[92px] max-sm:flex-row max-sm:gap-2 max-sm:w-full">
          <button onClick={() => setSelectedImage(1)}>
            <img
              src={images[1]}
              alt="Product thumbnail"
              className="rounded-3xl h-[92px] w-[92px] max-sm:w-20 max-sm:h-20 object-cover hover:opacity-80 transition-opacity"
            />
          </button>
          <button onClick={() => setSelectedImage(2)}>
            <img
              src={images[2]}
              alt="Product thumbnail"
              className="rounded-3xl h-[92px] w-[92px] max-sm:w-20 max-sm:h-20 object-cover hover:opacity-80 transition-opacity"
            />
          </button>
        </div>
        <div className="flex flex-col gap-1 items-start w-[92px] max-sm:flex-row max-sm:gap-2 max-sm:w-full">
          <button onClick={() => setSelectedImage(3)}>
            <img
              src={images[3]}
              alt="Product thumbnail"
              className="rounded-3xl h-[92px] w-[92px] max-sm:w-20 max-sm:h-20 object-cover hover:opacity-80 transition-opacity"
            />
          </button>
          <div className="relative h-[92px] w-[92px]">
            <img
              src={images[4]}
              alt="More images"
              className="absolute top-0 left-0 rounded-3xl h-[92px] w-[92px] object-cover"
            />
            <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-3xl hover:bg-opacity-60 transition-all">
              <span className="text-xs font-semibold tracking-wide text-white">
                SEE ALL
              </span>
            </button>
          </div>
        </div>
      </div>
              <ProductAccordion />

    </section>
  );
}
