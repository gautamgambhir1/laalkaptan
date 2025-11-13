"use client";
import Image from "next/image";
import * as React from "react";

export function Header() {
  return (
    <header className="flex absolute top-0 left-0 z-10 justify-between items-center px-12 py-7 rounded-none w-full max-md:p-5 max-md:w-[calc(100%-40px)] max-sm:p-4">
      <Image src="/laalkaptan.svg" alt="Logo" width={200} height={50} />
      <nav className="flex gap-8 items-center">
        <a
          href="#"
          className="text-lg font-semibold tracking-wide text-black max-md:text-base"
        >
          Shop
        </a>
        <div className="relative w-9 h-9">
          <div>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  '<svg id="2502:668" width="30" height="33" viewBox="0 0 30 33" fill="none" xmlns="http://www.w3.org/2000/svg" class="cart-icon" style="width: 27px; height: 29px; stroke-width: 3px; stroke: #000; position: absolute; left: 5px; top: 3px"> <path d="M8.25 10.5V8.25C8.25 6.45979 8.96116 4.7429 10.227 3.47703C11.4929 2.21116 13.2098 1.5 15 1.5C16.7902 1.5 18.5071 2.21116 19.773 3.47703C21.0388 4.7429 21.75 6.45979 21.75 8.25V10.5M2.625 10.5C2.32663 10.5 2.04048 10.6185 1.82951 10.8295C1.61853 11.0405 1.5 11.3266 1.5 11.625V26.8125C1.5 28.9387 3.31125 30.75 5.4375 30.75H24.5625C26.6887 30.75 28.5 29.0266 28.5 26.9004V11.625C28.5 11.3266 28.3815 11.0405 28.1705 10.8295C27.9595 10.6185 27.6734 10.5 27.375 10.5H2.625Z" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path> </svg>',
              }}
            />
          </div>
          <div className="flex absolute top-4 left-4 flex-col justify-center items-center px-1 py-0 w-5 h-5 border border-solid bg-zinc-400 border-neutral-200 rounded-[100px]">
            <span className="text-base font-semibold text-center text-black">
              0
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
}
