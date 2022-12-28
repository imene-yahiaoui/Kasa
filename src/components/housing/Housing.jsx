import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Carrousel from "./Carrousel";
import Info from "./Info";
import Tag from "./Tag";
import "../../assets/sass/pages/_Housing.scss";
import Stars from "./Stars";
import Collapse from "../utile/Collapse";
import Host from "./Host";

const Housing = ({ posts }) => {
  const { id } = useParams();

  ///If id is incorrect
  const Navigate = useNavigate();

  //  useEffect(() => {
  const list = posts.map((data) => data.id);
  let foundID = 0;
  for (let item = 0; item <= list.length - 1; item++) {
    if (id === list[item]) {
      foundID = 1;
    }
  }
  foundID === 1 ? console.log("existe") : Navigate("/Notfound");
  // });

  const slidesLenghth = posts
    .filter((data) => data.id === id)
    .map((data) => data.pictures.length);
  const [index, setCurrentindex] = useState(0);

  /// function presedent
  const goToPrevious = () => {
    const firstSlide = index === 0;

    const newIndex = firstSlide ? slidesLenghth - 1 : index - 1;

    setCurrentindex(newIndex);
  };
  ///function suivant
  const goToNext = () => {
    const lastSlide = index === slidesLenghth - 1;

    const newIndex = lastSlide ? 0 : index + 1;
    setCurrentindex(newIndex);
  };

  ////keyboard
  function keyclavier(e) {
    if (e.keyCode === 37) {
      goToPrevious();
    } else if (e.keyCode === 39) {
      goToNext();
    }
  }
  document.addEventListener("keydown", keyclavier);

  ///tagLenght
  const tagLength = posts
    .filter((data) => data.id === id)
    .map((data) => data.tags.length);

  const tag = [];
  for (let i = 0; i <= tagLength - 1; i++) {
    posts
      .filter((data) => data.id === id)
      .map((data) => tag.push(<Tag tags={data.tags[i]} key={i} />));
  }

  const Rating = posts
    .filter((data) => data.id === id)
    .map((data) => data.rating);
  const stars = Array(5).fill(0);

  const colorr = {
    grey: "#f6f6f6",
    red: "#ff6060",
  };

  return (
    <div>
      <div className="carrousel_imgs">
        {posts
          .filter((data) => data.id === id)
          .map((data) => (
            <Carrousel slides={data.pictures[index]} key={data.id} />
          ))}

        {posts
          .filter((data) => data.id === id)
          .map((data) => (
            <i
              style={{ display: data.pictures.length === 1 ? "none" : "block" }}
              key={data.id}
              className="fa-solid fa-angle-left"
              onClick={goToPrevious}
            ></i>
          ))}
        {posts
          .filter((data) => data.id === id)
          .map((data) => (
            <i
              style={{ display: data.pictures.length === 1 ? "none" : "block" }}
              key={data.id}
              className="fa-solid fa-angle-right"
              onClick={goToNext}
            ></i>
          ))}

        {posts
          .filter((data) => data.id === id)
          .map((data) => (
            <p
              style={{ display: data.pictures.length === 1 ? "none" : "flex" }}
              key={data.id}
              className="carousel-notes"
            >
              {[index + 1]}/{data.pictures.length}
            </p>
          ))}
      </div>
      <div className="containerInfo">
        <div className="containerTagInfo">
          {posts
            .filter((data) => data.id === id)
            .map((data) => (
              <Info title={data.title} location={data.location} key={data.id} />
            ))}

          <ul className="tags">{tag}</ul>
        </div>

        <div className="containerHostStars">
          <div className="host">
            {posts
              .filter((data) => data.id === id)
              .map((data) => (
                <Host
                  key={data.id}
                  picture={data.host.picture}
                  name={data.host.name}
                />
              ))}
          </div>
          <div className="star">
            {stars.map((_, rating) => {
              return (
                <Stars
                  key={rating}
                  color={Rating > rating ? colorr.red : colorr.grey}
                />
              );
            })}
          </div>
        </div>
      </div>

      <div className="collapseHosing">
        {posts
          .filter((data) => data.id === id)
          .map((data) => (
            <Collapse
              title={"description"}
              text={data.description}
              key={data.id}
            />
          ))}
        {posts
          .filter((data) => data.id === id)
          .map((data) => (
            <Collapse
              title={"Équipements"}
              ArryText={data.equipments.map((l) => (
                <li key={l}>{l}</li>
              ))}
              key={data.id}
            />
          ))}
      </div>
    </div>
  );
};

export default Housing;
