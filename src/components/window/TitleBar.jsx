import WindowMaxIcon from "/src/assets/windowIcon/window-max.svg";
import WindowMaxCancelIcon from "/src/assets/windowIcon/window-max-cancel.svg";
import WindowMinIcon from "/src/assets/windowIcon/window-min.svg";
import WindowCloseIcon from "/src/assets/windowIcon/window-close.svg";

const TitleBar = ({
  icon,
  title,
  onMouseDown,
  onClose,
  onMaximize,
  isMaximized,
}) => {
  const handleButtonClick = (e) => {
    e.stopPropagation();
  };

  const handleClose = (e) => {
    e.stopPropagation();
    if (onClose) onClose();
  };

  const handleMaximize = (e) => {
    e.stopPropagation();
    if (onMaximize) onMaximize();
  };

  return (
    <header
      className="border-b-2 border-black relative w-full flex justify-between items-center p-2 rounded-t-xl bg-[#9b9b9b] cursor-move"
      onMouseDown={onMouseDown}
      style={{
        borderTopLeftRadius: isMaximized ? "0" : "0.75rem",
        borderTopRightRadius: isMaximized ? "0" : "0.75rem",
        cursor: isMaximized ? "default" : "move",
      }}
    >
      <div className="flex items-center gap-2" onMouseDown={handleButtonClick}>
        <div
          className="cursor-pointer w-4 h-4 rounded-2xl bg-[#ff5a51] flex justify-center items-center"
          onClick={handleClose}
        >
          <img src={WindowCloseIcon} alt="Close" className="w-2 h-2" />
        </div>
        <div className="cursor-pointer w-4 h-4 rounded-2xl bg-[#ffbd2e] flex justify-center items-center">
          <img src={WindowMinIcon} alt="Minimize" className="w-3 h-3" />
        </div>
        <div
          className="cursor-pointer w-4 h-4 rounded-2xl bg-[#27c93f] flex justify-center items-center"
          onClick={handleMaximize}
        >
          {!isMaximized ? (
            <img src={WindowMaxIcon} alt="Maximize" className="w-3 h-3" />
          ) : (
            <img
              src={WindowMaxCancelIcon}
              alt="Maximize Cancel"
              className="w-3 h-3"
            />
          )}
        </div>
      </div>
      <div className="absolute flex items-center gap-2 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
        <img src={icon} alt={title} className="w-6 h-6 " />
        <h2 className="font-bold text-white">{title}</h2>
      </div>
    </header>
  );
};

export default TitleBar;
