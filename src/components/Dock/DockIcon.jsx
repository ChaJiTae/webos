export const DockIcon = ({ icon, label, isMinimized, onClick }) => {
  return (
    <div className="relative flex flex-col items-center">
      <div
        className="relative transition-all duration-200 cursor-pointer w-14 h-14 hover:scale-110"
        onClick={onClick}
      >
        <img src={icon} alt={label} className="object-contain w-full h-full" />
        {!isMinimized && (
          <div className="absolute w-2 h-2 transform -translate-x-1/2 rounded-full bg-black/50 -bottom-6 left-1/2"></div>
        )}
      </div>
    </div>
  );
};
