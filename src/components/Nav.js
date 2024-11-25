import { PageLinks, SocialLinks } from "../data.js";
import logo from "../images/logo.svg";
import Pages from "./Pages.js";
import Social from "./Social.js";
const Nav = () => {
  return (
    <nav class="navbar">
      <div class="nav-center">
        <div class="nav-header">
          <img src={logo} class="nav-logo" alt="backroads" />
          <button type="button" class="nav-toggle" id="nav-toggle">
            <i class="fas fa-bars"></i>
          </button>
        </div>
        <Pages parentclass={"nav-links"} itemclass={"nav-link"} />
        <Social parentclass={"nav-icons"} itemclass={"nav-icon"} />
      </div>
    </nav>
  );
};

export default Nav;
