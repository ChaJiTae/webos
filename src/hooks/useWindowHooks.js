import { useState, useEffect, useRef } from "react";

export const useWindowHooks = ({ initialPosition }) => {
  const [position, setPosition] = useState(initialPosition);

  const dragStartRef = useRef(null);

  const handleDragMouseMove = (e) => {
    if (!dragStartRef.current) return;
    const deltaX = e.clientX - dragStartRef.current.startX;
    const deltaY = e.clientY - dragStartRef.current.startY;
    setPosition({
      x: dragStartRef.current.initialX + deltaX,
      y: dragStartRef.current.initialY + deltaY,
    });
  };

  const handleDragMouseUp = () => {
    dragStartRef.current = null;
    document.removeEventListener("mousemove", handleDragMouseMove);
    document.removeEventListener("mouseup", handleDragMouseUp);
  };

  const handleDragMouseDown = (e) => {
    dragStartRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      initialX: position.x,
      initialY: position.y,
    };
    document.addEventListener("mousemove", handleDragMouseMove);
    document.addEventListener("mouseup", handleDragMouseUp);
  };

  useEffect(() => {
    return () => {
      document.removeEventListener("mousemove", handleDragMouseMove);
      document.removeEventListener("mouseup", handleDragMouseUp);
    };
  }, []);

  return {
    position,
    handleDragMouseDown,
  };
};
