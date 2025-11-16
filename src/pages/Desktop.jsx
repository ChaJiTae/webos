import MenuBar from "../components/layout/MenuBar";

import GrayBackground from "../assets/backgroundImage/Gray_Background.png";
import DarkBackground from "../assets/backgroundImage/Dark_Background.png";
import LightBackground from "../assets/backgroundImage/Light_Background.png";

const background = [GrayBackground, DarkBackground, LightBackground];

const Desktop = () => {
  const backgroundRandomIndex = Math.floor(Math.random() * background.length);

  return (
    <div className="fixed inset-0 flex flex-col overflow-hidden font-dosgothic">
      <MenuBar />
      <div
        className="relative flex-1 bg-center bg-cover"
        style={{
          backgroundImage: `url(${background[backgroundRandomIndex]})`,
        }}
      ></div>
    </div>
  );
};

export default Desktop;
