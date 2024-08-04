"use client";

import { Category } from "@prisma/client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useCallback } from "react";

type Props = {
  categories: Category[];
};

export default function CategoryFilters({ categories }: Props) {
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());

      if (params.has(name, value)) {
        params.delete(name, value);
        return params.toString();
      }

      params.getAll(name).length > 0
        ? params.append(name, value)
        : params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  return (
    <>
      <h3 className="text-xl font-semibold mb-3">Categories</h3>
      <ul className="space-y-2">
        {categories?.map((category) => {
          return (
            <div key={category.id}>
              <label className="flex gap-2">
                <Link href={`?${createQueryString("category", category.name)}`}>
                  <input
                    type="checkbox"
                    name={category.name}
                    value={category.name}
                    className="cursor-pointer"
                    onChange={() => null}
                    checked={searchParams
                      .getAll("category")
                      .includes(category.name)}
                  />
                </Link>
                {category.name}
              </label>
            </div>
          );
        })}
      </ul>
    </>
  );
}
