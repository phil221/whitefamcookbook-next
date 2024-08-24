"use client";

import BaseLink from "@/components/shared/BaseLink";
import { useSearchParams } from "next/navigation";
import React from "react";

const ClearFilterText = () => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());

  const searchValue = params.get("q");
  const filtersAmount =
    searchValue && searchValue.length > 0
      ? searchParams.size - 1
      : searchParams.size;

  if (filtersAmount === 0) return null;

  return (
    <div className="flex gap-5">
      <p>
        {filtersAmount === 1 ? "1 Filter" : `${filtersAmount} Filters`} applied.
      </p>
      <BaseLink
        href="/recipes"
        text={`Clear Filter${filtersAmount > 1 ? "s" : ""}`}
      />
    </div>
  );
};

export default ClearFilterText;
