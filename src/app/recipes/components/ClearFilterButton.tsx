"use client";

import BaseLink from "@/components/shared/BaseLink";
import { useSearchParams } from "next/navigation";
import React from "react";

const ClearFilterButton = ({ filtersAmount }: { filtersAmount: number }) => (
  <div className="flex items-center gap-5">
    <p>
      {filtersAmount === 1 ? "1 Filter" : `${filtersAmount} Filters`} applied.
    </p>
    <BaseLink
      href="/recipes"
      text={`Clear Filter${filtersAmount > 1 ? "s" : ""}`}
    />
  </div>
);

export default ClearFilterButton;
