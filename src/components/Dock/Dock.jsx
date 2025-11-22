import { useProcessStore } from "../../store/processStore";

import { DockIcon } from "./DockIcon";

import CalculateIcon from "../../assets/processIcon/calculate.png";
import LottoIcon from "../../assets/processIcon/lotto.png";
import RacingIcon from "../../assets/processIcon/racing.png";
import TerminalIcon from "../../assets/processIcon/Terminal.png";
import NotepadIcon from "../../assets/processIcon/notepad.png";

const Dock = () => {
  const processes = useProcessStore((state) => state.processes);
  const restoreProcess = useProcessStore((state) => state.restoreProcess);

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

  const handleProcessClick = (processId) => {
    restoreProcess(processId);
  };

  return (
    <div className="fixed transform -translate-x-1/2 select-none bottom-5 left-1/2">
      <div className="flex items-end gap-2 px-2 py-2 border shadow-2xl bg-white/10 backdrop-blur-xl rounded-2xl border-white/20">
        {processes.map((process) => (
          <DockIcon
            key={process.id}
            icon={getProcessIcon(process.name)}
            label={process.name}
            isMinimized={process.isMinimized}
            isLink={false}
            onClick={() => handleProcessClick(process.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Dock;
