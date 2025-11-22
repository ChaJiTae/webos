import MenuBar from "../components/layout/MenuBar";
import DesktopIcon from "../components/Desktop/DesktopIcon";
import ProcessLauncher from "../components/ProcessLauncher/ProcessLauncher";
import Dock from "../components/Dock/Dock";

import GrayBackground from "../assets/backgroundImage/Gray_Background.png";
import LightBackground from "../assets/backgroundImage/Light_Background.png";
import AppleBackground from "../assets/backgroundImage/Apple_Background.jpg";
import BlueGradientBackground from "../assets/backgroundImage/BlueGradient_Background.jpg";

import CalculateIcon from "../assets/processIcon/calculate.png";
import LottoIcon from "../assets/processIcon/lotto.png";
import RacingIcon from "../assets/processIcon/racing.png";
import TerminalIcon from "../assets/processIcon/Terminal.png";
import NotepadIcon from "../assets/processIcon/notepad.png";

const background = [
  GrayBackground,
  LightBackground,
  AppleBackground,
  BlueGradientBackground,
];

const Desktop = () => {
  const backgroundRandomIndex = Math.floor(Math.random() * background.length);

  const desktopIcons = [
    { icon: CalculateIcon, label: "Calculate", processName: "Calculate" },
    { icon: LottoIcon, label: "Lotto", processName: "Lotto" },
    { icon: RacingIcon, label: "Racing", processName: "Racing" },
    { icon: TerminalIcon, label: "Terminal", processName: "Terminal" },
    { icon: NotepadIcon, label: "Notepad", processName: "Notepad" },
  ];

  return (
    <div className="fixed inset-0 flex flex-col overflow-hidden select-none font-dosgothic">
      <MenuBar />
      <div
        className="relative flex-1 bg-center bg-cover"
        style={{
          backgroundImage: `url(${background[backgroundRandomIndex]})`,
        }}
      >
        <div className="absolute top-0 left-0 flex flex-col gap-4 p-4 ">
          {desktopIcons.map((application, index) => (
            <DesktopIcon
              key={index}
              icon={application.icon}
              label={application.label}
              processName={application.processName}
            />
          ))}
        </div>
        <ProcessLauncher />
        <Dock />
      </div>
    </div>
  );
};

export default Desktop;
