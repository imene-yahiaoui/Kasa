import Picture from "./Picture";
import Image from "../../assets/images/IMG.png";
import Frame from "./Frame";
import "../../assets/sass/layout/_container.scss";
const Home = ({ posts }) => {
  return (
    <div>
      <Picture img={Image} text="Chez vous,partout et ailleurs" />
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
