import Mountains from "../../assets/images/mountains.png";
import Picture from "../home/Picture";
import Collapses from "./collapses";
import Speaces from "../utile/space";




const About = () => {
  return (
    <div>
      <Picture img={Mountains} />
      <Collapses />
      <Speaces />
    </div>
  );
};

export default About;
