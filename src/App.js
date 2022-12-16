
import {Routes,Route} from 'react-router-dom';
import Header from './componenent/Header';
import Footer from './componenent/Footer';
import Home from "./componenent/Home";
import Housing from './componenent/Housing';
import About from './componenent/About';
import NotFound from './componenent/NotFound';


//import {Link} from "react-router-dom"
const App =()=>{

    return(
<div>
<Header/>
        <Routes>
   
<Route path='/' exact element={<Home/>}/>
<Route path='/Housing' element={<Housing/>}/>
<Route path='/About' element={<About/>}/>
<Route path="*" element={<NotFound />} /> 
 


        </Routes>
      <Footer/>
      </div>
    )
}
export default App