import Pages from "./Pages";
import Social from "./Social";
const Footer = () => {
  return (
    <footer class="section footer">
      <Pages itemclass={"footer-link"} parentclass={"footer-links"} />
      <Social itemclass={"footer-icon"} parentclass={"footer-icons"} />

      <p class="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};
export default Footer;
