import { useEffect, useState } from "react";

const MenuBar = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const timeString = currentTime.toLocaleTimeString("ko-KR", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  const dateString = currentTime.toLocaleDateString("ko-KR", {
    month: "long",
    day: "numeric",
  });

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
        <span>{timeString}</span>
        <span>{dateString}</span>
      </div>
    </header>
  );
};

export default MenuBar;
