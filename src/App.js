import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import RoutesPath from "./components/RoutesPath/RoutesPath";
import { useEffect, useState } from "react";
const App = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const requete = await fetch("../../data.json", {
          method: "GET",
        });
        if (requete.ok) {
          const response = await requete.json();
          setPosts(response);
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <RoutesPath posts={posts} />
      <Footer />
    </div>
  );
};
export default App;
