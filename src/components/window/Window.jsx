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
      onMouseDown={handleDragMouseDown}
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
    </div>
  );
};

export default Window;
