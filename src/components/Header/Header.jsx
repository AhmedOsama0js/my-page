import "./Header.css"
import BtnFullscreen from "../BtnFullScreen/BtnFullscreen";
import DarkLight from "../DarkLight/DarkLight";

;
const Header = () => {
  return (
    <div className="header-container">
      <BtnFullscreen />
      <DarkLight/>
    </div>
  )
}

export default Header
