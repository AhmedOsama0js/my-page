import "./Header.css";
import BtnFullscreen from "../BtnFullScreen/BtnFullscreen";
import DarkLight from "../DarkLight/DarkLight";
import LangBtn from "../LangBtn/LangBtn";

const Header = () => {
  return (
    <div className="header-container">
      <BtnFullscreen />
      <DarkLight />
      <LangBtn />
    </div>
  );
};

export default Header;
