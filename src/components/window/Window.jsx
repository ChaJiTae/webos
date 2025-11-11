import TitleBar from "./TitleBar";
import ProcessIcon from "/src/assets/processicon.jpg";

const Window = () => {
  return (
    <div className="bg-white w-[400px] h-[300px] rounded-xl">
      <TitleBar icon={ProcessIcon} title="process" />
    </div>
  );
};

export default Window;
