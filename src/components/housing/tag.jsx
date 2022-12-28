import "../../assets/sass/layout/_tags.scss";
import "../../assets/sass/layout/_info.scss";

const Tag = (props) => {
  return (
    <li>
      <p className="tag">{props.tags}</p>
    </li>
  );
};

export default Tag;
