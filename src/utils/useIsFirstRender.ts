import { useEffect, useRef } from "react";

const useIsFirstRender = () => {
    const isFirstRender = useRef(true);

    useEffect(() => console.log("isFirstRender.current: ", isFirstRender.current), [isFirstRender.current]);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
        }
    }, []);

    return isFirstRender;
}

export default useIsFirstRender;