import MenuBar from "../components/layout/MenuBar";
import Window from "../components/window/Window";

const Desktop = () => {
  return (
    <div className="fixed inset-0 flex flex-col overflow-hidden">
      <MenuBar />
      <div
        className="relative flex-1"
        style={{
          backgroundImage: `linear-gradient(to bottom,#A8E6CF,#6DD5ED)`,
        }}
      >
        <Window />
      </div>
    </div>
  );
};

export default Desktop;
