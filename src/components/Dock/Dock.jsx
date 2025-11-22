import { DockIcon } from "./DockIcon";

import CalculateIcon from "../../assets/processIcon/calculate.png";
import LottoIcon from "../../assets/processIcon/lotto.png";
import RacingIcon from "../../assets/processIcon/racing.png";
import TerminalIcon from "../../assets/processIcon/Terminal.png";
import NotepadIcon from "../../assets/processIcon/notepad.png";

const Dock = () => {
  const defaultApplications = [
    { icon: CalculateIcon, label: "Calculate", processName: "Calculate" },
    { icon: LottoIcon, label: "Lotto", processName: "Lotto" },
    { icon: RacingIcon, label: "Racing", processName: "Racing" },
    { icon: TerminalIcon, label: "Terminal", processName: "Terminal" },
    { icon: NotepadIcon, label: "Notepad", processName: "Notepad" },
  ];

  return (
    <div className="fixed transform -translate-x-1/2 bottom-5 left-1/2">
      <div className="flex items-end gap-2 px-2 py-2 border shadow-2xl bg-white/10 backdrop-blur-xl rounded-2xl border-white/20">
        {defaultApplications.map((application, index) => (
          <DockIcon
            key={index}
            icon={application.icon}
            label={application.label}
          />
        ))}
      </div>
    </div>
  );
};

export default Dock;
