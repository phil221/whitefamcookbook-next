"use client";

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const SearchInput = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [searchValue, setSearchValue] = useState("");

    const search = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
        const params = new URLSearchParams(searchParams.toString());
        searchValue.length > 0 ? params.set("q", e.target.value) : params.delete("q");
        router.push(`/recipes?${params.toString()}`);
    }

    return (
        <div className='flex gap-3'>
            <input
                onChange={search}
                className="border-[0.25px] border-gray-950 rounded-md p-1 w-6/12"
                value={searchValue}
                type="text"
            />
        </div>
    );
}

export default SearchInput;