import { PageLinks, SocialLinks } from "../data.js";
import logo from "../images/logo.svg";
import Pages from "./Pages.js";
import Social from "./Social.js";
const Nav = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <Pages parentclass={"nav-links"} itemclass={"nav-link"} />
        <Social parentclass={"nav-icons"} itemclass={"nav-icon"} />
      </div>
    </nav>
  );
};

export default Nav;
