import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  useMousePosition,
  type MousePosition,
} from "../hooks/useMousePosition";

interface NeonCursorProps {
  showTrail?: boolean;
  trailLength?: number;
}

const interactiveSelector =
  "a, button, input, select, textarea, [role='button'], .project-card";

function isInteractiveTarget(target: EventTarget | null): boolean {
  return target instanceof Element && target.closest(interactiveSelector) !== null;
}

function setPosition(element: HTMLElement | null, position: MousePosition) {
  if (element) {
    element.style.transform = `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`;
  }
}

export function NeonCursor({
  showTrail = true,
  trailLength = 8,
}: NeonCursorProps) {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const ringPositionRef = useRef<MousePosition>({ x: 0, y: 0 });
  const trailPositionsRef = useRef<MousePosition[]>([]);
  const hasPointerPositionRef = useRef(false);
  const [isInteractive, setIsInteractive] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const pointCount = showTrail
    ? Math.max(0, Math.min(12, Math.floor(trailLength)))
    : 0;
  const trailPoints = useMemo(
    () => Array.from({ length: pointCount }, (_, index) => index),
    [pointCount],
  );

  const updateDot = useCallback((position: MousePosition) => {
    setPosition(dotRef.current, position);

    if (!hasPointerPositionRef.current) {
      ringPositionRef.current = position;
      trailPositionsRef.current = trailPositionsRef.current.map(() => ({
        ...position,
      }));
      setPosition(ringRef.current, position);
      trailRefs.current.forEach((point) => setPosition(point, position));
      hasPointerPositionRef.current = true;
    }
  }, []);

  const { positionRef, enabled, isInside } = useMousePosition(updateDot);

  useEffect(() => {
    if (enabled) {
      document.documentElement.dataset.customCursor = "true";
    } else {
      delete document.documentElement.dataset.customCursor;
    }

    return () => {
      delete document.documentElement.dataset.customCursor;
    };
  }, [enabled]);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    const trailPositions = trailPoints.map(() => ({
      ...ringPositionRef.current,
    }));
    trailPositionsRef.current = trailPositions;

    let animationFrame = 0;

    const animate = () => {
      const target = positionRef.current;
      const ringPosition = ringPositionRef.current;
      ringPosition.x += (target.x - ringPosition.x) * 0.15;
      ringPosition.y += (target.y - ringPosition.y) * 0.15;
      setPosition(ringRef.current, ringPosition);

      trailPositions.forEach((position, index) => {
        const previous =
          index === 0 ? ringPosition : trailPositions[index - 1];
        position.x += (previous.x - position.x) * 0.3;
        position.y += (previous.y - position.y) * 0.3;
        setPosition(trailRefs.current[index] ?? null, position);
      });

      animationFrame = window.requestAnimationFrame(animate);
    };

    animationFrame = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(animationFrame);
  }, [enabled, positionRef, trailPoints]);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    const handlePointerOver = (event: PointerEvent) => {
      setIsInteractive(isInteractiveTarget(event.target));
    };

    const handlePointerOut = (event: PointerEvent) => {
      setIsInteractive(isInteractiveTarget(event.relatedTarget));
    };

    const handlePointerDown = () => setIsPressed(true);
    const handlePointerUp = () => setIsPressed(false);

    document.addEventListener("pointerover", handlePointerOver);
    document.addEventListener("pointerout", handlePointerOut);
    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointerup", handlePointerUp);
    window.addEventListener("pointercancel", handlePointerUp);

    return () => {
      document.removeEventListener("pointerover", handlePointerOver);
      document.removeEventListener("pointerout", handlePointerOut);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("pointercancel", handlePointerUp);
    };
  }, [enabled]);

  if (!enabled) {
    return null;
  }

  return (
    <div
      className={`neon-cursor${isInside ? " is-visible" : ""}`}
      aria-hidden="true"
    >
      {trailPoints.map((index) => (
        <span
          className="neon-cursor-trail-point"
          key={index}
          ref={(element) => {
            trailRefs.current[index] = element;
          }}
          style={{
            width: `${Math.max(3, 8 - index * 0.5)}px`,
            height: `${Math.max(3, 8 - index * 0.5)}px`,
            opacity: 0.45 * (1 - index / (pointCount + 1)),
          }}
        />
      ))}
      <div
        className="neon-cursor-layer neon-cursor-ring"
        ref={ringRef}
        data-interactive={isInteractive}
        data-pressed={isPressed}
      >
        <span className="neon-cursor-ring-visual" />
      </div>
      <div className="neon-cursor-layer neon-cursor-dot" ref={dotRef}>
        <span className="neon-cursor-dot-visual" />
      </div>
    </div>
  );
}
