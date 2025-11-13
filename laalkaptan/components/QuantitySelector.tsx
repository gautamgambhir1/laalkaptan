"use client";
import * as React from "react";

export function QuantitySelector() {
  const [quantity, setQuantity] = React.useState(1);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="flex flex-col gap-1 items-start w-[434px]">
      <div className="flex gap-2.5 justify-center items-center px-5 py-0">
        <label className="text-base font-semibold tracking-wide text-neutral-700">
          QUANTITY
        </label>
      </div>
      <div className="flex gap-3 items-center px-5 py-0">
        <div className="flex gap-3.5 items-center px-2.5 py-0 bg-white rounded-3xl">
          <button onClick={decreaseQuantity} aria-label="Decrease quantity">
            <div
              dangerouslySetInnerHTML={{
                __html:
                  '<svg id="2502:604" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="minus-icon" style="width: 24px; height: 24px"> <path d="M5 12H19" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </svg>',
              }}
            />
          </button>
          <div className="flex gap-2.5 justify-center items-center p-2.5 rounded-lg">
            <span className="text-lg font-medium tracking-wide text-center text-black">
              {quantity}
            </span>
          </div>
          <button onClick={increaseQuantity} aria-label="Increase quantity">
            <div
              dangerouslySetInnerHTML={{
                __html:
                  '<svg id="2502:608" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="plus-icon" style="width: 24px; height: 24px"> <path d="M13 6C13 5.73478 12.8946 5.48043 12.7071 5.29289C12.5196 5.10536 12.2652 5 12 5C11.7348 5 11.4804 5.10536 11.2929 5.29289C11.1054 5.48043 11 5.73478 11 6V11H6C5.73478 11 5.48043 11.1054 5.29289 11.2929C5.10536 11.4804 5 11.7348 5 12C5 12.2652 5.10536 12.5196 5.29289 12.7071C5.48043 12.8946 5.73478 13 6 13H11V18C11 18.2652 11.1054 18.5196 11.2929 18.7071C11.4804 18.8946 11.7348 19 12 19C12.2652 19 12.5196 18.8946 12.7071 18.7071C12.8946 18.5196 13 18.2652 13 18V13H18C18.2652 13 18.5196 12.8946 18.7071 12.7071C18.8946 12.5196 19 12.2652 19 12C19 11.7348 18.8946 11.4804 18.7071 11.2929C18.5196 11.1054 18.2652 11 18 11H13V6Z" fill="black"></path> </svg>',
              }}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
