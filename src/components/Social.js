import { SocialLinks } from "../data";

const Social = ({ parentclass, itemclass }) => {
  return (
    <ul className={parentclass}>
      {SocialLinks.map((props) => {
        const { id, icon, href } = props;
        return (
          <li key={id}>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className={itemclass}
            >
              <i className={icon}></i>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Social;
