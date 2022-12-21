import Collapse from "../about/collapse";
import "../../assets/sass/layout/_collapse_housing.scss";


const Collapse_housing = () => {
  return (
    <div className="collapse_housing">
    <Collapse title={"description"} text={"ddddddd"} key={1} />
      <Collapse />
    </div>
  );
};

export default Collapse_housing;
