import "../../assets/sass/layout/_container.scss";
import Frame from "./Frame";
 

 import {useEffect,useState} from "react";
  

const Container = () => {
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






  return (
    <div className="container">
   
      {user.map((post) => (
        <Frame cover={post.cover} title={post.title} key={post.id} id ={post.id}  />
      ))}
    </div>
  );
};

export default Container;
