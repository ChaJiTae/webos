import MenuBar from "../components/layout/MenuBar.jsx";

const Desktop = () => {
  return (
    <div className="fixed inset-0 flex flex-col overflow-hidden">
      <MenuBar />
      <div
        className="relative flex-1"
        style={{
          backgroundImage: `linear-gradient(to bottom,#A8E6CF,#6DD5ED)`,
        }}
      ></div>
    </div>
  );
};

export default Desktop;
