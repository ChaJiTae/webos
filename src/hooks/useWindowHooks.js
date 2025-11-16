import { useState, useEffect, useRef } from "react";

export const useWindowHooks = ({ initialPosition, initialSize }) => {
  const [position, setPosition] = useState(initialPosition);
  const [size, setSize] = useState(initialSize);

  const dragStartRef = useRef(null);
  const resizeStartRef = useRef(null);

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

  const handleResizeMouseMove = (e) => {
    if (!resizeStartRef.current) return;
    const deltaX = e.clientX - resizeStartRef.current.startX;
    const deltaY = e.clientY - resizeStartRef.current.startY;

    const newWidth = Math.max(
      500,
      resizeStartRef.current.initialWidth + deltaX
    );
    const newHeight = Math.max(
      300,
      resizeStartRef.current.initialHeight + deltaY
    );
    setSize({
      width: newWidth,
      height: newHeight,
    });
  };

  const handleResizeMouseUp = () => {
    resizeStartRef.current = null;
    document.removeEventListener("mousemove", handleResizeMouseMove);
    document.removeEventListener("mouseup", handleResizeMouseUp);
  };

  const handleResizeMouseDown = (e) => {
    e.stopPropagation();
    resizeStartRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      initialWidth: size.width,
      initialHeight: size.height,
    };
    document.addEventListener("mousemove", handleResizeMouseMove);
    document.addEventListener("mouseup", handleResizeMouseUp);
  };

  useEffect(() => {
    return () => {
      document.removeEventListener("mousemove", handleDragMouseMove);
      document.removeEventListener("mouseup", handleDragMouseUp);
      document.removeEventListener("mousemove", handleResizeMouseMove);
      document.removeEventListener("mouseup", handleResizeMouseUp);
    };
  }, []);

  return {
    position,
    size,
    handleDragMouseDown,
    handleResizeMouseDown,
  };
};
