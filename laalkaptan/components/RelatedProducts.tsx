import * as React from "react";

export function RelatedProducts() {
  const products = [
    {
      id: 1,
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/4d8944dbb6b7855f4e2d888769725d67768775af?width=294",
      alt: "Related product 1",
    },
    {
      id: 2,
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/cda63bdd044ef3ca81447d2dc389a8f0d1f2d7f9?width=264",
      alt: "Related product 2",
    },
    {
      id: 3,
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f?width=262",
      alt: "Related product 3",
    },
  ];

  return (
    <section className="flex absolute flex-col gap-4 items-start h-[197px] left-[1200px] top-[729px] w-[821px] z-3 max-md:static max-md:px-5 max-md:py-0 max-md:mx-auto max-md:mt-0 max-md:mb-10 max-md:w-full max-md:max-w-[500px] max-sm:px-4 max-sm:py-0">
      <h3 className="text-xl font-extrabold tracking-wide text-black">
        YOU MAY ALSO LIKE
      </h3>
      <div className="flex gap-3 items-center self-stretch max-sm:flex-col max-sm:gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative h-[157px] w-[212px] max-sm:mx-auto max-sm:my-0 max-sm:w-full max-sm:max-w-[300px]"
          >
            <div className="absolute top-0 left-0 rounded-3xl bg-zinc-300 h-[157px] w-[212px]" />
            <img
              src={product.image}
              alt={product.alt}
              className="absolute top-4 left-2/4 -translate-x-2/4 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
