import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Carrousel from "./carrousel";
import Info from "./info";
import Tag from "./tag";
import CollapseEquipements from "./collapseEquipements";
import CollapseHousing from "./CollapseHousing";
import "../../assets/sass/pages/_Housing.scss";
import Stars from "./stars";

const Housing = () => {
  const [user, setUsers] = useState([]);
  useEffect(() => {
    fetch("../../data.json")
      .then((reponse) => {
        return reponse.json();
      })
      .then((data) => {
        setUsers(data);
      });
  }, []);

  const { id } = useParams();
  console.log(id);

  const slidesLenghth = user
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
  function keyclavier(i) {
    if (i.keyCode === 37) {
      goToPrevious();
    } else if (i.keyCode === 39) {
      goToNext();
    }
  }
  document.addEventListener("keydown", keyclavier);

  ///tagLenght
  const tagLength = user
    .filter((data) => data.id === id)
    .map((data) => data.tags.length);

  const tag = [];
  for (let i = 0; i <= tagLength - 1; i++) {
    user
      .filter((data) => data.id === id)
      .map((data) => tag.push(<Tag tags={data.tags[i]} key={i} />));
      }

      user
      .filter((data) => data.id === id)
      .map((data) =>
console.log (data.rating)
      )
const Rating= user
.filter((data) => data.id === id)
.map((data) =>data.rating)
     console.log("Ratting",Rating)
const stars= Array(5).fill(0)
// const [color,setColor] = useState("red")
const colorr={
    grey:"#f6f6f6",
    red:"#ff6060"
   
   }
  return (
    <div>
      <div>
        {user
          .filter((data) => data.id === id)
          .map((data) => (
            <i
              style={{ display: data.pictures.length === 1 ? "none" : "block" }}
              key={data.id}
              className="fa-solid fa-angle-left"
              onClick={goToPrevious}
            ></i>
          ))}
        {user
          .filter((data) => data.id === id)
          .map((data) => (
            <i
              style={{ display: data.pictures.length === 1 ? "none" : "block" }}
              key={data.id}
              className="fa-solid fa-angle-right"
              onClick={goToNext}
            ></i>
          ))}

        {user
          .filter((data) => data.id === id)
          .map((data) => (
            <Carrousel slides={data.pictures[index]} key={data.id} />
          ))}

        {user
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
      {user
        .filter((data) => data.id === id)
        .map((data) => (
          <Info
            title={data.title}
            location={data.location}
            key={data.id}
            picture={data.host.picture}
            name={data.host.name}
          />
        ))}
<div className="containerTagStars">
      <ul className="tags">{tag}</ul>
<div className="star"  >{stars.map((_,rating)=>{
    return(
        <Stars
        key={rating}
        color={Rating > rating? colorr.red : colorr.grey} 
        // color={colorr.red}
        />
    )
})} </div>
      </div>
      <div className="collapseHosing">
        {user
          .filter((data) => data.id === id)
          .map((data) => (
            <CollapseHousing text={data.description} key={data.id} />
          ))}
        {user
          .filter((data) => data.id === id)
          .map((data) => (
            <CollapseEquipements text={data.equipments} key={data.id} />
          ))}

      </div>
    </div>
  );
};

export default Housing;
