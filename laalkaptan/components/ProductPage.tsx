import * as React from "react";
import { Header } from "./Header";
import { ProductDetails } from "./ProductDetails";
import { ServiceFeatures } from "./ServiceFeatures";
import { ProductGallery } from "./ProductGallery";
import { ProductInfo } from "./ProductInfo";
import { RelatedProducts } from "./RelatedProducts";

export function ProductPage() {
  return (
    <main className="overflow-x-hidden relative w-screen h-screen bg-white max-md:h-auto max-md:min-h-screen">
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/24634a9e1c857dd82495edcb374b56036885e10f?width=3024"
        alt=""
        className="object-cover absolute top-0 left-0 size-full z-1"
      />
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/540c6fd77c99d1e60cc872f71815acbe4fca2f81?width=1100"
        alt="Product showcase"
        className="object-contain absolute h-[688px] left-[481px] top-[42px] w-[550px] z-2 max-md:left-2/4 max-md:-translate-x-2/4 max-md:h-[500px] max-md:top-[120px] max-md:w-[400px] max-sm:h-[375px] max-sm:top-[100px] max-sm:w-[300px]"
      />

      <Header />
      <ProductDetails />
      <ServiceFeatures />
      <ProductGallery />
      <ProductInfo />
      <RelatedProducts />
    </main>
  );
}

export default ProductPage;
