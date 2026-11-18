import { useEffect, useRef, useState } from "react";

export interface MousePosition {
  x: number;
  y: number;
}

export function useMousePosition(
  onMove?: (position: MousePosition) => void,
) {
  const positionRef = useRef<MousePosition>({ x: 0, y: 0 });
  const onMoveRef = useRef(onMove);
  const [enabled, setEnabled] = useState(false);
  const [isInside, setIsInside] = useState(false);

  useEffect(() => {
    onMoveRef.current = onMove;
  }, [onMove]);

  useEffect(() => {
    const finePointer = window.matchMedia(
      "(any-hover: hover) and (any-pointer: fine)",
    );
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    const updateSupport = () => {
      const isSupported = finePointer.matches && !reducedMotion.matches;
      setEnabled(isSupported);

      if (!isSupported) {
        setIsInside(false);
      }
    };

    updateSupport();
    finePointer.addEventListener("change", updateSupport);
    reducedMotion.addEventListener("change", updateSupport);

    return () => {
      finePointer.removeEventListener("change", updateSupport);
      reducedMotion.removeEventListener("change", updateSupport);
    };
  }, []);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType === "touch") {
        setIsInside(false);
        return;
      }

      const position = { x: event.clientX, y: event.clientY };
      positionRef.current = position;
      onMoveRef.current?.(position);
      setIsInside(true);
    };

    const handlePointerEnter = () => setIsInside(true);
    const handlePointerLeave = () => setIsInside(false);
    const handleBlur = () => setIsInside(false);

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    document.documentElement.addEventListener(
      "mouseenter",
      handlePointerEnter,
    );
    document.documentElement.addEventListener(
      "mouseleave",
      handlePointerLeave,
    );
    window.addEventListener("blur", handleBlur);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.documentElement.removeEventListener(
        "mouseenter",
        handlePointerEnter,
      );
      document.documentElement.removeEventListener(
        "mouseleave",
        handlePointerLeave,
      );
      window.removeEventListener("blur", handleBlur);
    };
  }, [enabled]);

  return { positionRef, enabled, isInside };
}
