import { PageLinks } from "../data";
import Pagelink from "./Pagelink";
const Pages = ({ parentclass, itemclass }) => {
  return (
    <ul class={parentclass} id="nav-links">
      {PageLinks.map((item) => {
        const { id, link, href } = item;
        return (
          <Pagelink item={item} itemclass={itemclass} />
          //   <li key={id}>
          //     <a href={href} rel="nonreferrer" class={itemclass}>
          //       {" "}
          //       {link}{" "}
          //     </a>
          //   </li>
        );
      })}
    </ul>
  );
};

export default Pages;
