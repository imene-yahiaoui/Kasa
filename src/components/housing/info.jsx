import "../../assets/sass/layout/_info.scss";

const Info = (props) => {
  return (
    <div className="info">
      <div>
        <h2 className="info_titre">{props.title}</h2>
        <p className="info_titre_localitation">{props.location}</p>
      </div>

      <div className="info_utilisateur">
      <p className="info_utilisateur_name" >{props.name}</p>
        <img className="info_utilisateur_img"src={props.picture} alt=""></img>
       
      </div>
    </div>
  );
};

export default Info;
