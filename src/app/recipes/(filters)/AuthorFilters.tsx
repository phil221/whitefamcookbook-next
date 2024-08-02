import { Author } from "@prisma/client";
import Link from "next/link";

type Props = {
    authors: Author[];
    searchParams?: { [key: string]: string | string[] | undefined };
};

export default async function AuthorFilters({ authors, searchParams }: Props) {
    console.log({ searchParams });
    return (
        <>
            <h3 className="text-xl font-semibold mb-3">Authors</h3>
            <ul className="space-y-2">
                {authors?.map((author) => (
                    <div key={author.id}>
                        <label className="flex gap-2">
                            <Link href={`/recipes?author=${author.name}`}>
                                <input
                                    type="checkbox"
                                    value={author.name}
                                />
                            </Link>
                            {author.name}
                        </label>
                    </div>
                ))}
            </ul>
        </>
    );
}
