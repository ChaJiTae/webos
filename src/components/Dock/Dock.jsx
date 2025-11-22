import { DockIcon } from "./DockIcon";

const Dock = () => {
  return (
    <div className="fixed transform -translate-x-1/2 bottom-5 left-1/2">
      <div className="flex items-end gap-2 px-2 py-2 border shadow-2xl bg-white/10 backdrop-blur-xl rounded-2xl border-white/20">
        <DockIcon />
      </div>
    </div>
  );
};

export default Dock;
