import "../../assets/sass/layout/_tags.scss";
import "../../assets/sass/layout/_info.scss";

const Tag = (props) => {
  return (
    <div className="info">
      <div>
        <p className="tag">{props.tag}</p>
      </div>
    </div>
  );
};

export default Tag;
