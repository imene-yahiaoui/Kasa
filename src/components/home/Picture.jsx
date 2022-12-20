
import "../../assets/sass/layout/_picture.scss";



const Picture =(props) =>{
    
    return(
      
 <div className="home">
   <img className="home-img" src={props.img} alt ="natur"></img>
    <p className="home-p"> {props.text}</p>
 </div>

    )

}

export default Picture 