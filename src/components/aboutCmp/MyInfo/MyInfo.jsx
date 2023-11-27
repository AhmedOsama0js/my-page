import MainBtn from "../../mainBtn/MainBtn"
import "./MyInfo.css"
import { FaDownload } from "react-icons/fa";
import CV from "../../../dist/data/Ahmed-Osama-CV.pdf"

const MyInfo = () => {

  return (
    <div className="my-info-container">
      <h2>Personal Info</h2>
      <div className="ul-info">
        <ul>
        <li><span className="head">First Name:</span> Ahmed</li>
        <li><span className="head">Age:</span> 26Years</li>
        <li><span className="head">Freelance:</span> Available</li>
        <li><span className="head">Phone:</span> +201013265916 </li>
        </ul>
        <ul>
        <li> <span className="head">Last Name:</span> Osama </li>
        <li> <span className="head">Nationality:</span> Egyptian </li>
        <li> <span className="head">Address:</span> Egypt </li>
        <li> <span className="head">Email:</span> ahmedosama.aw@gmail </li>
        </ul>
      </div>
      <a href={CV} download="Ahmed-Osama-CV.pdf">
        <MainBtn Icon={ <FaDownload />}  name= "Download CV"/>
      </a>
    </div>
  )
}

export default MyInfo
