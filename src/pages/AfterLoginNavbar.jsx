
import { NavLink } from "react-router-dom"
import '../styles/AfterLoginNavbar.css'

function AfterLoginNavbar(props) {
  return (
    <div className='navbar-after-login'>
        <div className="logo">
            PRAnav
        </div>
        <div className="links">
            <ul>
                <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
                <li><NavLink to='/contactus' >ContactUs</NavLink></li>
            </ul>
        </div>
        <div className="user-info">
            <div className="validated-user-image">
                <img src={props.user.imageUrl ? props.user.imageUrl: require("../assets/user.png")} alt="" />
            </div>
            <div className="validated-user-name">
                <h2>{props.user.username}</h2>
            </div>
        </div>
        
    </div>
  )
}

export default AfterLoginNavbar
