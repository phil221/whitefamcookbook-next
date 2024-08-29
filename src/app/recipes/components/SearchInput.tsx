"use client";

import useIsFirstRender from '@/utils/useIsFirstRender';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const SearchInput = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const params = new URLSearchParams(searchParams.toString());

    const [searchValue, setSearchValue] = useState(params.get("q") ?? "");
    const isFirstRender = useIsFirstRender().current;

    useEffect(() => {
        console.log({ searchValue, isFirstRender });
        if (searchValue.length === 0 && !isFirstRender) {
            params.delete("q");
            router.push(`/recipes?${params.toString()}`);
        }
    }, [searchValue])

    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchValue.length > 0) params.set("q", searchValue);
            router.push(`/recipes?${params.toString()}`);
        }, 200);

        return () => clearTimeout(timer);
    }, [searchValue])

    return (
        <div className='flex gap-3'>
            <input
                onChange={e => setSearchValue(e.target.value)}
                className="border-[0.25px] border-gray-950 rounded-md p-1 w-6/12"
                value={searchValue}
                type="text"
            />
        </div>
    );
}

export default SearchInput;