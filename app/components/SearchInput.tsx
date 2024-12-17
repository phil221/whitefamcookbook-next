"use client";

import useIsFirstRender from "@/utils/useIsFirstRender";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

const SearchInput = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const params = useMemo(
    () => new URLSearchParams(searchParams.toString()),
    [searchParams]
  );

  const [searchValue, setSearchValue] = useState(params.get("q") ?? "");
  const isFirstRender = useIsFirstRender().current;

  useEffect(() => {
    if (searchValue.length === 0 && !isFirstRender) {
      params.delete("q");
      router.push(`?${params.toString()}`);
    }
  }, [isFirstRender, params, router, searchValue]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchValue) {
        params.set("q", searchValue);
        router.push(`?${params.toString()}`);
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [params, router, searchValue]);

  return (
    <div className="flex gap-3">
      <input
        onChange={(e) => setSearchValue(e.target.value)}
        className="text-bold bg-beige-200 border-solid border-[0.25px] border-gray-900 p-2 w-6/12 placeholder:italic placeholder:text-[#2E4B32]"
        value={searchValue}
        type="text"
        placeholder="Search recipes..."
      />
    </div>
  );
};

export default SearchInput;
