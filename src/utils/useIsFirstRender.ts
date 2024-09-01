import { useEffect, useRef } from "react";

const useIsFirstRender = () => {
  const isFirstRender = useRef(true);
  console.log("should annoy the linter!!");
  console.log("should annoy the linter!!");
  console.log("should annoy the linter!!");
  console.log("should annoy the linter!!");
  console.log("should annoy the linter!!");

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    }
  }, []);

  return isFirstRender;
};

export default useIsFirstRender;
