import "../styles/sidebar.css";
import { FaPhone, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Sidebar() {
  return (
    <div className="sidebar">

      <div className="sidebar-header">
        <h2>Disha Agarwal</h2>
      </div>

      <ul className="sidebar-menu">
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#achievements">Achievements</a></li>
        <li><a href="#certifications">Certifications</a></li>
      </ul>

      <div className="sidebar-footer">
        <a href="tel:+91-6387099971"><FaPhone/></a>
        <a href="https://www.linkedin.com/in/disha31"><FaLinkedin/></a>
        <a href="https://github.com/dishaagarwal534"><FaGithub/></a>
        <a href="mailto:dishaagarwallko@gmail.com"><FaEnvelope/></a>
      </div>

    </div>
  );
}

export default Sidebar;