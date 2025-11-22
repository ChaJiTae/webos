import { useProcessStore } from "../../store/processStore";

import Window from "../window/Window";

import Calculate from "../Process/Calculate";
import Lotto from "../Process/Lotto";
import Racing from "../Process/Racing";
import Terminal from "../Process/Terminal";
import Notepad from "../Process/NotePad";

import CalculateIcon from "../../assets/processIcon/calculate.png";
import LottoIcon from "../../assets/processIcon/lotto.png";
import RacingIcon from "../../assets/processIcon/racing.png";
import TerminalIcon from "../../assets/processIcon/Terminal.png";
import NotepadIcon from "../../assets/processIcon/notepad.png";

const ProcessLauncher = () => {
  const processes = useProcessStore((state) => state.processes);
  const closeProcess = useProcessStore((state) => state.closeProcess);

  const getProcessIcon = (processName) => {
    switch (processName) {
      case "Calculate":
        return CalculateIcon;
      case "Lotto":
        return LottoIcon;
      case "Racing":
        return RacingIcon;
      case "Terminal":
        return TerminalIcon;
      case "Notepad":
        return NotepadIcon;
      default:
        return null;
    }
  };

  const getProcessComponent = (processName) => {
    switch (processName) {
      case "Calculate":
        return <Calculate />;
      case "Lotto":
        return <Lotto />;
      case "Racing":
        return <Racing />;
      case "Terminal":
        return <Terminal />;
      case "Notepad":
        return <Notepad />;
      default:
        return <div>Unknown Process</div>;
    }
  };

  return (
    <>
      {processes
        .filter((process) => !process.isMinimized)
        .map((process) => (
          <Window
            key={process.id}
            id={process.id}
            title={process.name}
            icon={getProcessIcon(process.name)}
            onClose={() => closeProcess(process.id)}
          >
            {getProcessComponent(process.name)}
          </Window>
        ))}
    </>
  );
};

export default ProcessLauncher;
