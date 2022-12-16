import {Link} from 'react-router-dom'
import logo from "../assets/images/logo.png"
 import '../assets/sass/components/_header.scss'
const Header =() =>{
    
    return(
 <div class="header">
<img class="logo" src ={logo} alt="logo"></img>
<ul class="nav">
    <li>
        <Link to ='/'>Accueil</Link>
    </li>
    <li> 
        <Link to ='./About'>A Propos</Link>
    </li>
</ul>

</div>
    )

}

export default Header