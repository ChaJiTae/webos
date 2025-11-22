export const DockIcon = ({ icon, label }) => {
  return (
    <div className="relative flex flex-col items-center">
      <div className="relative transition-all duration-200 cursor-pointer w-14 h-14 hover:scale-110">
        <img src={icon} alt={label} className="object-contain w-full h-full" />
      </div>
    </div>
  );
};
