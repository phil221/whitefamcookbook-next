'use client';

import { Author } from "@prisma/client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useCallback } from "react";

type Props = {
    authors: Author[];
};

export default function AuthorFilters({ authors }: Props) {
    const searchParams = useSearchParams();

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString());

            if (params.has(name, value)) {
                params.delete(name, value);
                return params.toString();
            }

            params.getAll(name).length > 0 ? params.append(name, value) : params.set(name, value);
            return params.toString()
        },
        [searchParams]
    )

    return (
        <>
            <h3 className="text-xl font-semibold mb-3">Authors</h3>
            <ul className="space-y-2">
                {authors?.map((author) => {
                    return (
                        <div key={author.id}>
                            <label className="flex gap-2">
                                <Link href={`?${createQueryString("author", author.name)}`}>
                                    <input
                                        type="checkbox"
                                        name={author.name}
                                        value={author.name}
                                        className="cursor-pointer"
                                        onChange={() => null}
                                        checked={searchParams.getAll("author").includes(author.name)}
                                    />
                                </Link>
                                {author.name}
                            </label>
                        </div>
                    )
                }
                )}
            </ul>
        </>
    );
}
