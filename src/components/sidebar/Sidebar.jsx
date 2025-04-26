import { Link, useLocation } from "react-router-dom";
import { AiOutlineHome, AiOutlineProject } from "react-icons/ai";
import { BiMessage, BiSolidVideos } from "react-icons/bi";
import { IoPerson } from "react-icons/io5";
// import { RiBloggerFill } from "react-icons/ri";
import "./Sidebar.css";

const Sidebar = () => {
  const location = useLocation();
  return (
    <div className="sidebar-container">
      <ul>
        <li>
          <Link
            to="/"
            title="Hero"
            className={location.pathname === "/" ? "active " : "linkPage"}
          >
            <AiOutlineHome />
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            title="About"
            className={location.pathname === "/about" ? "active " : "linkPage"}
          >
            <IoPerson />
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            title="projects"
            className={
              location.pathname === "/projects" ? "active " : "linkPage"
            }
          >
            <AiOutlineProject />
          </Link>
        </li>
        <li>
          <Link
            to="/blog"
            title="contact"
            className={location.pathname === "/blog" ? "active " : "linkPage"}
          >
            <BiSolidVideos />
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            title="contact"
            className={
              location.pathname === "/contact" ? "active " : "linkPage"
            }
          >
            <BiMessage />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
