import { useSearchParams } from "next/navigation";
import { useCallback } from "react";

const useGetQueryString = (searchParams: URLSearchParams, name: string, value: string) => useCallback(
    () => {
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

export default useGetQueryString;