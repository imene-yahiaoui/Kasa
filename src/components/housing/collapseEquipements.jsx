import Collapse from "../about/collapse";
import "../../assets/sass/layout/_collapse_housing.scss";




const CollapseEquipements = (props) => {
  return (
    <div className="collapse_housing">
    <Collapse title={"Équipements"} text={props.text} />
    
    </div>
  );
};

export default CollapseEquipements;
