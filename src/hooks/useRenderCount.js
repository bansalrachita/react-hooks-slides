import { useRef, useEffect } from "react";

export const useRenderCount = () => {
  const ref = useRef(1);

  useEffect(() => {
    ref.current++;
  });

  return ref.current;
};
