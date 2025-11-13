import * as React from "react";
import { ExpandableSection } from "./ExpandableSection";

export function ProductInfo() {
  return (
    <div className="flex flex-col gap-0 items-start">
      <ExpandableSection title="DESCRIPTION">
        <p className="text-sm text-neutral-600">
          Premium quality cotton lycra blend fabric with superior comfort and
          durability. Perfect for everyday wear with a modern fit.
        </p>
      </ExpandableSection>
      <ExpandableSection title="DETAILS">
        <ul className="text-sm text-neutral-600 space-y-1">
          <li>• 260 GSM Cotton Lycra</li>
          <li>• Unisex sizing</li>
          <li>• Pre-shrunk fabric</li>
          <li>• Reinforced seams</li>
        </ul>
      </ExpandableSection>
      <ExpandableSection title="CARE INSTRUCTIONS">
        <ul className="text-sm text-neutral-600 space-y-1">
          <li>• Machine wash cold</li>
          <li>• Do not bleach</li>
          <li>• Tumble dry low</li>
          <li>• Iron on low heat</li>
        </ul>
      </ExpandableSection>
    </div>
  );
}
