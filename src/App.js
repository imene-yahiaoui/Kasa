import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Housing from "./components/housing/Housing";
import About from "./components/about/About";
import NotFound from "./components/notFound/NotFound";
import { useEffect, useState } from "react";

const App = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("../../data.json")
      .then((reponse) => reponse.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home posts={posts} />} />
        <Route path="/Housing/:id" element={<Housing posts={posts} />} />
        <Route path="/About" element={<About />} />
        <Route path="*" element={<NotFound />} />
      
      </Routes>
      <Footer />
    </div>
  );
};
export default App;
