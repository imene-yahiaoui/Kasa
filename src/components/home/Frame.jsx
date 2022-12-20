import "../../assets/sass/layout/_frame.scss";
import { Link } from "react-router-dom";

const Frame = (props) => {
  return (
    <div className="frame">
      <Link to="/">
      <img src={props.cover} alt=""></img>
      <p>{props.title}</p>
      </Link>
    </div>
  );
};

export default Frame;
