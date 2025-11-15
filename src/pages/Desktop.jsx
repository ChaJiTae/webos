import MenuBar from "../components/layout/MenuBar";
import Window from "../components/window/Window";

import GrayBackground from "../assets/backgroundImage/Gray_Background.png";
import DarkBackground from "../assets/backgroundImage/Dark_Background.png";
import LightBackground from "../assets/backgroundImage/Light_Background.png";

const Desktop = () => {
  return (
    <div className="fixed inset-0 flex flex-col overflow-hidden">
      <MenuBar />
      <div
        className="relative flex-1 bg-center bg-cover"
        style={{
          backgroundImage: `url(${GrayBackground})`,
        }}
      >
        <Window />
      </div>
    </div>
  );
};

export default Desktop;
