import { Link } from "react-router-dom";
import "../../assets/sass/layout/_frame.scss";

const Frame = (props) => {
  return (
    <div className="frame">
      <Link key={`${props.id}`} to={`/Housing/${props.id}`}>
        <img src={props.cover} alt={props.id}></img>
        <p>{props.title}</p>
      </Link>
    </div>
  );
};

export default Frame;
