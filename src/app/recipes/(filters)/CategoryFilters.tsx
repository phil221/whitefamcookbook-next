"use client";

import cn from "@/utils/cn";
import useGetQueryString from "@/utils/useGetQueryString";
import { Category } from "@prisma/client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

type Props = {
  categories: Category[];
};

export default function CategoryFilters({ categories }: Props) {
  const searchParams = useSearchParams();
  const createQueryString = (name: string, value: string) => useGetQueryString(searchParams, name, value)();

  return (
    <>
      <h3 className="text-xl font-semibold mb-3">Categories</h3>
      <ul className="space-y-2">
        {categories?.map((category) => {
          const isActive = searchParams.getAll("category")?.includes(category.name);
          return (
            <div key={category.id}>
              <Link className={cn("border-b border-transparent text-md",
                {
                  "font-semibold": isActive,
                  "border-gray-950": isActive
                })} href={`?${createQueryString("category", category.name)}`}
              >{category.name}
              </Link>
            </div>
          );
        })}
      </ul>
    </>
  );
}