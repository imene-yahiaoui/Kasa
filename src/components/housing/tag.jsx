import "../../assets/sass/layout/_tags.scss";
import "../../assets/sass/layout/_info.scss";

const Tag = (props) => {
  return (
    <div>
      <p className="tag">{props.tags}</p>
    </div>
  );
};

export default Tag;
