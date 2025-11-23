import TitleBar from "./TitleBar";

import { useWindowHooks } from "./../../hooks/useWindowHooks";
import { useProcessStore } from "../../store/processStore";

const INITIAL_WIDTH = 500;
const INITIAL_HEIGHT = 300;

const Window = ({ id, children, title, icon, onClose }) => {
  const { position, handleDragMouseDown, size, handleResizeMouseDown } =
    useWindowHooks({
      initialPosition: { x: 100, y: 100 },
      initialSize: { width: INITIAL_WIDTH, height: INITIAL_HEIGHT },
    });

  const processes = useProcessStore((state) =>
    state.processes.find((process) => process.id === id)
  );

  const maximizeProcess = useProcessStore((state) => state.maximizeProcess);
  const unmaximizeProcess = useProcessStore((state) => state.unmaximizeProcess);
  const minimizeProcess = useProcessStore((state) => state.minimizeProcess);
  const focusProcess = useProcessStore((state) => state.focusProcess);

  const handleMaximize = () => {
    if (processes?.isMaximized) unmaximizeProcess(id);
    else maximizeProcess(id);
  };

  const handleMinimize = () => {
    minimizeProcess(id);
  };

  const handleWindowFocus = () => {
    focusProcess(id);
  };

  const windowStyle = processes?.isMaximized
    ? {
        left: 0,
        width: "100vw",
        height: `calc(100vh)`,
        zIndex: processes?.zIndex,
      }
    : {
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${size.width}px`,
        height: `${size.height}px`,
        zIndex: processes?.zIndex,
      };

  return (
    <div
      className="absolute flex flex-col bg-white border-2 border-black rounded-xl"
      style={{
        ...windowStyle,
      }}
      onMouseDown={handleWindowFocus}
    >
      <TitleBar
        id={id}
        icon={icon}
        title={title}
        onMouseDown={processes?.isMaximized ? undefined : handleDragMouseDown}
        onClose={onClose}
        onMaximize={handleMaximize}
        isMaximized={processes?.isMaximized}
        onMinimize={handleMinimize}
      />
      <main
        className="relative flex-1 rounded-b-xl"
        style={{
          height: `calc(100%)`,
          overflow: "hidden",
        }}
      >
        {children}
        {!processes?.isMaximized && (
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
        )}
      </main>
    </div>
  );
};

export default Window;
