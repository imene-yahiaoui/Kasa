import Collapse from "../about/collapse";
import "../../assets/sass/layout/_collapse_housing.scss";


const Collapse_housing = (props) => {
  return (
    <div className="collapse_housing">
    <Collapse title={"description"} text={props.text} />
   
    </div>
  );
};

export default Collapse_housing;
