import TitleBar from "./TitleBar";
import { useWindowHooks } from "./../../hooks/useWindowHooks";

const INITIAL_WIDTH = 500;
const INITIAL_HEIGHT = 300;

const Window = ({ id, children, title, icon, onClose }) => {
  const { position, handleDragMouseDown, size, handleResizeMouseDown } =
    useWindowHooks({
      initialPosition: { x: 100, y: 100 },
      initialSize: { width: INITIAL_WIDTH, height: INITIAL_HEIGHT },
    });

  return (
    <div
      className="absolute flex flex-col bg-white border-2 border-black rounded-xl"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${size.width}px`,
        height: `${size.height}px`,
      }}
    >
      <TitleBar
        id={id}
        icon={icon}
        title={title}
        onMouseDown={handleDragMouseDown}
        onClose={onClose}
      />
      <main
        className="relative flex-1 rounded-b-xl"
        style={{
          height: "calc(100% - 40px)",
          overflow: "hidden",
        }}
      >
        {children}
        <div
          className="absolute bottom-0 right-0 w-0 h-0 cursor-se-resize"
          onMouseDown={handleResizeMouseDown}
          style={{
            borderBottom: "10px solid #2d2d2d",
            borderLeft: "10px solid transparent",
            borderTop: "10px solid transparent",
            borderRight: "10px solid #2d2d2d",
            borderBottomRightRadius: "0.75rem",
          }}
        ></div>
      </main>
    </div>
  );
};

export default Window;
