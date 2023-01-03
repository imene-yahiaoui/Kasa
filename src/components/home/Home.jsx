import Picture from "./Picture";
import Image from "../../assets/images/IMG.png";
import ImageMobile from "../../assets/images/IMGMobile.png";
import Frame from "./Frame";
import "../../assets/sass/layout/_container.scss";
import useMediaQuery from "../utile/MediaQuery";

const Home = ({ posts }) => {
  const matches = useMediaQuery("(max-width:767px)");
  return (
    <div>
      {matches ? (
        <Picture
          img={ImageMobile}
          text="Chez vous,"
          paragraphe="partout et ailleurs"
        />
      ) : (
        <Picture
          img={Image}
          text="Chez vous,"
          paragraphe="partout et ailleurs"
        />
      )}
      <div className="container">
        {posts.map((post) => (
          <Frame
            cover={post.cover}
            title={post.title}
            key={post.id}
            id={post.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
