import Mountains from "../../assets/images/mountains.png";
import Picture from "../home/Picture";
import Collapses from "./collapses";
import Speaces from "../utile/space";
import Imagphon from "../../assets/images/imgMobil.png";
import useMediaQuery from "../utile/MediaQuery";

const About = () => {
  const matches = useMediaQuery("(max-width:767px)");
  return (
    <div>
      {matches ? <Picture img={Imagphon} /> : <Picture img={Mountains} />}
      <Collapses />
      <Speaces />
    </div>
  );
};

export default About;
