import "../../assets/sass/layout/_container.scss"
import Frame from "./Frame"
import Data from "../../data.json"




const Container =() =>{
  
    return(
 <div className ="container">
  {Data.map((post)=><Frame cover={post.cover} title={post.title} key= {post.id}/> ) }

 </div>


 
 
    )

}

export default Container