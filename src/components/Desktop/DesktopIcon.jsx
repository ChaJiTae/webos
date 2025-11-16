import { useProcessStore } from "../../store/processStore";

const DesktopIcon = ({ icon, label, processName }) => {
  const openProcess = useProcessStore((state) => state.openProcess);
  const handleClick = () => {
    openProcess(processName);
  };

  return (
    <div
      className="flex flex-col items-center justify-center rounded-md cursor-pointer w-25 h-25 hover:bg-white/40"
      onClick={handleClick}
    >
      <div className="flex items-center justify-center w-20 h-20 rounded ">
        <img src={icon} alt={label} className="w-12 h-12" />
      </div>
      <span className="px-2 font-bold text-center text-white rounded text-s drop-shadow-lg bg-black/40">
        {label}
      </span>
    </div>
  );
};

export default DesktopIcon;
