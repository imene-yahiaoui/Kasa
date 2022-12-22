import { useParams } from "react-router-dom";
import {useEffect,useState} from "react";
import  Carrousel from "./carrousel";
import Info from "./info";
import CollapseEquipements  from "./collapseEquipements";
import CollapseHousing from "./CollapseHousing"
import "../../assets/sass/layout/_collapseEquipements.scss";

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
  
    user.filter((data)=>data.id === id).map((data)=>( console.log(data.equipments)
        ))

    return(   
      
        <div>
            {user.filter((data)=>data.id === id).map((data)=>(
  <Carrousel image={data.cover} key={data.id}  />))}

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