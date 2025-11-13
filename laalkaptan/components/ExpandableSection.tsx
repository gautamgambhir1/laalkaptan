"use client";
import * as React from "react";

interface ExpandableSectionProps {
  title: string;
  children?: React.ReactNode;
}

export function ExpandableSection({ title, children }: ExpandableSectionProps) {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <div className="flex flex-col items-start self-stretch rounded-3xl border-solid border-[0.4px] border-neutral-700">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex gap-32 justify-center items-center px-5 py-3 border-solid border-t-[0.4px] border-t-neutral-700 w-[433px] hover:bg-gray-50 transition-colors"
      >
        <div className="flex justify-between items-center w-full">
          <h4 className="text-base font-semibold tracking-wide text-neutral-700 w-[234px] text-left">
            {title}
          </h4>
          <div
            className={`transform transition-transform ${isExpanded ? "rotate-180" : ""}`}
          >
            <div
              dangerouslySetInnerHTML={{
                __html:
                  '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="dropdown-arrow" style="width: 24px; height: 24px"> <path d="M11.9998 15L7.75684 10.758L9.17184 9.34399L11.9998 12.172L14.8278 9.34399L16.2428 10.758L11.9998 15Z" fill="black"></path> </svg>',
              }}
            />
          </div>
        </div>
      </button>
      {isExpanded && children && (
        <div className="px-5 py-3 w-full">{children}</div>
      )}
    </div>
  );
}
