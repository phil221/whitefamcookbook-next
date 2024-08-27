'use client';

import cn from "@/utils/cn";
import useGetQueryString from "@/utils/useGetQueryString";
import { Author } from "@prisma/client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

type Props = {
    authors: Author[];
};

export default function AuthorFilters({ authors }: Props) {
    const searchParams = useSearchParams();

    const createQueryString = (name: string, value: string) => useGetQueryString(searchParams, name, value)();

    return (
        <>
            <h3 className="text-xl font-semibold mb-3">Authors</h3>
            <ul className="space-y-2">
                {authors?.map((author) => {
                    const isActive = searchParams.getAll("author")?.includes(author.name);
                    return (
                        <div key={author.id}>
                            <label className="flex gap-2">
                                <Link href={`?${createQueryString("author", author.name)}`}>
                                    <p className={cn("text-md",
                                        {
                                            "font-semibold": isActive,
                                            "underline": isActive
                                        })}
                                    >{author.name}</p>
                                </Link>
                            </label>
                        </div>
                    )
                }
                )}
            </ul >
        </>
    );
}
