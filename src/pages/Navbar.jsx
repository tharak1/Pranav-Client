import { NavLink , Link} from "react-router-dom"
import '../styles/Navbar.css'
import { useState } from "react";
export const Navbar = ()=>{

    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 20) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);

    return (
        <div className={colorChange ? 'navbar colorChange' : 'navbar'}>
        <div className="logo">
            PRAnav
        </div>
        <div className="links">
            <ul>
                <li><NavLink to='/'>home</NavLink></li>
                <li><NavLink to='/about' >about</NavLink></li>
                <li><NavLink to='/hww' >how we work</NavLink></li>
            </ul>
            <div className="login-signup">
            <Link to='/login'><button className="buton-login button">Login/Sign Up</button></Link>
        </div>
        </div>
        </div>
    );
}
