const MenuBar = () => {
  return (
    <header className="flex justify-between items-center p-2 bg-[#2d2d2d] text-white ">
      <nav className="flex items-center gap-6">
        <div className="text-lg font-bold">JT OS</div>
        <div>File</div>
        <div>Edit</div>
        <div>View</div>
        <div>Window</div>
      </nav>
      <div className="flex items-center gap-6">
        <span>12:45</span>
        <span>11월 10일</span>
      </div>
    </header>
  );
};

export default MenuBar;
