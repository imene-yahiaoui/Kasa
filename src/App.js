import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Housing from "./components/housing/Housing";
import About from "./components/about/About";
import NotFound from "./components/notFound/NotFound";
 

//  import {useEffect,useState} from "react";


const App = () => {
  
//   const [user ,setUsers]= useState([])
// useEffect(()=>{
 
// fetch("../../data.json")
// .then (reponse=> {
// return reponse.json()
// })
//  .then(data =>{
//   setUsers(data)
//  })
 
// },[])



  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        {/* {user.map((post) => (
         <Route path={`/Housing/:${post.id}`} key={post.id} element={<Housing />} />  ))}   */}
          <Route path="/Housing/:id" element={<Housing />} />
        <Route path="/About" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};
export default App;
 // <Route path={`/Housing/:${post.id}`} key={post.id} element={<Housing />} />    