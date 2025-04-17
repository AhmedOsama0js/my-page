import "./Footer.css";
import { AiFillLinkedin } from "react-icons/ai";
import {
  FaGithub,
  FaFacebookSquare,
  FaInstagramSquare,
  FaCodepen,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { SiCodewars } from "react-icons/si";

const Footer = () => {
  return (
    <div className="footer-container">
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/ahmed-osama-bb2812192/"
            target="_blanck"
          >
            <AiFillLinkedin />
          </a>
        </li>
        <li>
          <a href="https://github.com/AhmedOsama0js" target="_blanck">
            <FaGithub />
          </a>
        </li>
        <li>
          <a
            href="https://web.facebook.com/anahmada.osama?_rdc=1&_rdr"
            target="_blanck"
          >
            <FaFacebookSquare />
          </a>
        </li>
        <li>
          <a
            href="https://youtube.com/@ahmedosama9459?si=-5o3ijvgdAEtJ0Fj"
            target="_blanck"
          >
            <FaYoutube />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/ahmed_osama_611/?fbclid"
            target="_blanck"
          >
            <FaInstagramSquare />
          </a>
        </li>
        <li>
          <a
            href="https://codepen.io/Ahmed-Osama-the-flexboxer"
            target="_blanck"
          >
            <FaCodepen />
          </a>
        </li>
        <li>
          <a href="https://www.codewars.com/users/Ahmed-Osama" target="_blanck">
            <SiCodewars />
          </a>
        </li>
        <li>
          <a
            href="https://api.whatsapp.com/send?phone=201013265916"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
