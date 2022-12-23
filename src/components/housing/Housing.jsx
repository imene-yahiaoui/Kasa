import { useParams } from "react-router-dom";
import {useEffect,useState} from "react";
import  Carrousel from "./carrousel";
import Info from "./info";
import CollapseEquipements  from "./collapseEquipements";
import CollapseHousing from "./CollapseHousing"
import "../../assets/sass/pages/_Housing.scss";

    
const Housing =() =>{
  
  
 
    const [user ,setUsers]= useState([])
    useEffect(()=>{
     
    fetch("../../data.json")
    .then (reponse=> {
    return reponse.json()
    })
     .then(data =>{
      setUsers(data)
     })
     
    },[])

    const {id}= useParams();
    console.log(id)
  
    const slidesLenghth = user.filter((data)=>data.id === id).map((data)=>( 
      
        (data.pictures.length)
        
        ))
        const [index, setCurrentindex] = useState(0);


      const goToPrevious=()=>{
       
        const firstSlide = index === 0 ;
        
        const newIndex = firstSlide? slidesLenghth - 1 : index - 1;
       
setCurrentindex(newIndex)
       };
      const goToNext=()=>{
    const lastSlide =  index === slidesLenghth - 1;
 
const newIndex = lastSlide ? 0 : index + 1;
setCurrentindex(newIndex)
 
      };

      ////keybord
      function keyclavier(i) {
        if (i.keyCode === 37) {
            goToPrevious();
        } else if (i.keyCode === 39) {
            goToNext();
        }
      }
      document.addEventListener("keydown", keyclavier);
        
      
    return(   

        <div>
            <div>
          
             
            {user.filter((data)=>data.id === id).map((data)=>(
             <i  style={{display:(data.pictures.length) === 1 ? "none" : "block" }} key={data.id} className="fa-solid fa-angle-left" onClick={goToPrevious}></i> ))}
               {user.filter((data)=>data.id === id).map((data)=>(
                <i style={{display:(data.pictures.length) === 1 ? "none" : "block" }} key={data.id} className="fa-solid fa-angle-right" onClick={goToNext}></i>))}
               
            
            {user.filter((data)=>data.id === id).map((data)=>(
  <Carrousel slides={data.pictures[index]} key={data.id}  />))}


{user
          .filter((data) => data.id === id)
          .map((data) => (
            <p style={{display:(data.pictures.length) === 1 ? "none" : "flex" }} key={data.id} className="carousel-notes">
              {[index+1]}/{(data.pictures.length)}  
            </p>
          ))}


</div>
{user.filter((data)=>data.id === id).map((data)=>(
             <Info title={data.title} location={data.location} key={data.id}  
                picture={data.host.picture} name={data.host.name}
              />        ))}

{/* {user.filter((data)=>data.id === id).map((data)=>(
             <Tag tag={data.tags} key={data.id}/> ))} */}
          


<div className="collapseHosing">
{user.filter((data)=>data.id === id).map((data)=>( 
    <CollapseHousing text= {data.description} key={data.id} />))}
    {user.filter((data)=>data.id === id).map((data)=>(
    <CollapseEquipements text={data.equipments}  key={data.id} />))}

</div>




        </div> 
       
    )
    
}

export default Housing