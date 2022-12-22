import "../../assets/sass/layout/_carrousel.scss"

const Carrousel =(props) =>{
    
    return(
<div className="carousel">
    <img className="carousel-img" src={props.image} alt=""></img>
<p className="carousel-notes">1/4</p>
</div>
    )

}

export default Carrousel