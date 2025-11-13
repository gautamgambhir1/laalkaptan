"use client";
import * as React from "react";

interface AccordionItemProps {
  title: string;
  isLast?: boolean;
  content?: string;
}

function AccordionItem({ title, isLast = false, content }: AccordionItemProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div
      className={`w-full ${
        isLast ? "" : "border-b border-[#434343]"
      } transition-all duration-300`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between px-5 py-3 text-left"
      >
        <span className="text-base font-semibold tracking-wide text-neutral-800 max-sm:text-sm">
          {title}
        </span>
        <svg
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 15L7.757 10.758L9.172 9.344L12 12.172L14.828 9.344L16.243 10.758L12 15Z"
            fill="black"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="px-5 pb-3 text-sm text-neutral-600 max-sm:px-4">
          {content || "Accordion content goes here."}
        </div>
      )}
    </div>
  );
}

export function ProductAccordion() {
  return (
    <div className="flex flex-col w-full rounded-xl border border-[#434343] max-w-[433px] max-sm:w-full">
      <AccordionItem
        title="DESCRIPTION"
        content="This product is crafted from high-quality materials for lasting comfort and durability."
      />
      <AccordionItem
        title="DETAILS"
        content="Material: 100% Cotton. Fit: Regular. Available in multiple colors."
      />
      <AccordionItem
        title="CARE INSTRUCTIONS"
        content="Machine wash cold with like colors. Do not bleach. Tumble dry low."
        isLast
      />
    </div>
  );
}
