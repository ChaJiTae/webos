export const DockIcon = ({ icon, label }) => {
  return (
    <div className="relative flex flex-col items-center">
      <div className="absolute px-2 py-2 text-xs text-white rounded-lg -top-12 bg-gray-800/90 whitespace-nowrap backdrop-blur-sm">
        {label}
      </div>
      <div className="relative transition-all duration-200 cursor-pointer w-14 h-14 hover:scale-110">
        <img src={icon} alt={label} className="object-contain w-full h-full" />
      </div>
    </div>
  );
};
