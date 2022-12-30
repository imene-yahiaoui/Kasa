import { Routes, Route } from "react-router-dom";
import Home from "../home/Home";
import Housing from "../housing/Housing";
import About from "../about/About";
import NotFound from "../notFound/NotFound";
// import Test from "../housing/test"

const RoutesPath = ({ posts }) => {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Home posts={posts} />} />
        <Route path="/Housing/:id" element={<Housing posts={posts} />} />
        <Route path="/About" element={<About />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
export default RoutesPath;
