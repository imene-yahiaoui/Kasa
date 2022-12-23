import "../../assets/sass/layout/_carrousel.scss";

const Carrousel = (props) => {
  return (
    <div className="carousel">
      <div
        className="carousel-img"
        style={{ backgroundImage: `url(${props.slides})` }}
      ></div>
    </div>
  );
};

export default Carrousel;
