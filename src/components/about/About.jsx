import Mountains from "../../assets/images/mountains.png";
import Picture from "../home/Picture";
import Collapses from "./collapses";
import Imagphon from "../../assets/images/imgMobil.png";
import useMediaQuery from "../utile/MediaQuery";
import "../../assets/sass/pages/_about.scss";

const About = ({ dataAbout }) => {
  const matches = useMediaQuery("(max-width:767px)");
  return (
    <div className="aboutCollapses">
      {matches ? <Picture img={Imagphon} /> : <Picture img={Mountains} />}
      <Collapses dataAbout={dataAbout} />
    </div>
  );
};

export default About;
