import { Link } from "react-router-dom";
import "../../assets/sass/layout/_frame.scss";

const Frame = (props) => {
  return (
    <Link key={`${props.id}`} to={`/Housing/${props.id}`}>
      <div className="frame">
        <div className="contiener ">
          <img src={props.cover} alt={props.title}></img>
          <p>{props.title}</p>
        </div>
        <div className="middle"> </div>
      </div>
    </Link>
  );
};

export default Frame;
