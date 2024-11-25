import { SocialLinks } from "../data";

const Social = ({ parentclass, itemclass }) => {
  return (
    <ul class={parentclass}>
      {SocialLinks.map((props) => {
        const { id, icon, href } = props;
        return (
          <li key={id}>
            <a href={href} target="_blank" rel="noreferrer" class={itemclass}>
              <i class={icon}></i>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Social;
