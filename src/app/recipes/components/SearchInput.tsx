"use client";

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React, { useState } from 'react'

type Props = {

}

const SearchInput = ({ }: Props) => {
    const searchParams = useSearchParams();
    const [searchValue, setSearchValue] = useState("");

    const search = () => {
        const params = new URLSearchParams(searchParams.toString());
        if (searchValue.length > 0) params.set("q", searchValue);
        return params.toString();
    }

    return (
        <div className='flex gap-3'>
            <input
                onChange={(e) => setSearchValue(e.target.value)}
                className="border-[0.25px] border-gray-950 rounded-md p-1 w-6/12"
                value={searchValue}
                type="text"
            />
            <Link href={`/recipes?${search()}`}>
                <button className='border-[0.25px] border-gray-950 rounded-md p-1'>
                    Search
                </button>
            </Link>
        </div>
    );
}

export default SearchInput;