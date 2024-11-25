const Pagelink = ({ item, itemclass }) => {
  const { id, href, link } = item;
  return (
    <li key={id}>
      <a href={href} rel="nonreferrer" className={itemclass}>
        {" "}
        {link}{" "}
      </a>
    </li>
  );
};

export default Pagelink;
