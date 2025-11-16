import TitleBar from "./TitleBar";
import ProcessIcon from "/src/assets/processicon.jpg";
import { useWindowHooks } from "./../../hooks/useWindowHooks";

const INITIAL_WIDTH = 500;
const INITIAL_HEIGHT = 300;

const Window = ({ id, children, title }) => {
  const { position, handleDragMouseDown } = useWindowHooks({
    initialPosition: { x: 100, y: 100 },
  });

  return (
    <div
      className="absolute bg-white rounded-xl"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${INITIAL_WIDTH}px`,
        height: `${INITIAL_HEIGHT}px`,
      }}
    >
      <TitleBar
        id={id}
        icon={ProcessIcon}
        title={title}
        onMouseDown={handleDragMouseDown}
      />
      <main>{children}</main>
      <div
        className="absolute bottom-0 right-0 w-0 h-0 cursor-se-resize"
        style={{
          borderBottom: "10px solid #2d2d2d",
          borderLeft: "10px solid transparent",
          borderTop: "10px solid transparent",
          borderRight: "10px solid #2d2d2d",
          borderBottomRightRadius: "0.75rem",
        }}
      ></div>
    </div>
  );
};

export default Window;
