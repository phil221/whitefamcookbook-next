'use client';

import cn from "@/utils/cn";
import getQueryString from "@/utils/getQueryString";
import { Author } from "@prisma/client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

type Props = {
    authors: Author[];
};

export default function AuthorFilters({ authors }: Props) {
    const searchParams = useSearchParams();

    return (
        <>
            <h3 className="text-xl font-semibold mb-3">Authors</h3>
            <ul className="space-y-2">
                {authors?.map((author) => {
                    const isActive = searchParams.getAll("author")?.includes(author.name);
                    return (
                        <div key={author.id}>
                            <Link className={cn("border-b border-transparent text-md",
                                {
                                    "font-semibold": isActive,
                                    "border-gray-950": isActive
                                })} href={`?${getQueryString(searchParams, "author", author.name)}`}
                            >{author.name}
                            </Link>
                        </div>
                    )
                }
                )}
            </ul >
        </>
    );
}
