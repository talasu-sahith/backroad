import Pages from "./Pages";
import Social from "./Social";
const Footer = () => {
  return (
    <footer className="section footer">
      <Pages itemclass={"footer-link"} parentclass={"footer-links"} />
      <Social itemclass={"footer-icon"} parentclass={"footer-icons"} />

      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};
export default Footer;
