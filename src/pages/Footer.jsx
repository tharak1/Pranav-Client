import React from 'react'
import '../styles/footeer.css'
import {Link} from 'react-router-dom'
function Footer() {
  return (
    
    <>

    <div className="footer">
    <div className="social-media-links">
        <ul>
        <li><img src={require("../assets/instagram.png")} alt="" /></li>
        <li><img src={require("../assets/linkedin.png")} alt="" /></li>
        <li><img src={require("../assets/search.png")} alt="" /></li>
        <li><img src={require("../assets/twitter.png")} alt="" className='ximage'/></li>
        <li><img src={require("../assets/facebook.png")} alt="" /></li>
        </ul>
        
    </div>

    <div className="footr-links-holder">
    <div className="hello-fresh">
        <h2 className='footer-heading'>Hello Fresh</h2>
        <ul>
            <li><Link to='/'>students</Link></li>
            <li><Link to='/'>blogs</Link></li>
            <li><Link to='/'>recipies</Link></li>
            <li><Link to='/'>discount</Link></li>
            <li><Link to='/'>directory</Link></li>
            <li><Link to='/'>support</Link></li>
            <li><Link to='/'>delivery options</Link></li>
        </ul>
    </div>
    <div className="our-company">
    <h2 className='footer-heading'>Our Company</h2>

        <ul>
            <li><Link to='/'>PRAnav group</Link></li>
            <li><Link to='/'>sustainability</Link></li>
            <li><Link to='/'>careers</Link></li>
            <li><Link to='/'>press</Link></li>
        </ul>
    </div>
    <div className="work-with-us">
    <h2 className='footer-heading'>Work With Us</h2>

    <ul>
            <li><Link to='/'>partner</Link></li>
            <li><Link to='/'>influencers</Link></li>
            <li><Link to='/'>affilates</Link></li>
        </ul>
    </div>
    <div className="contact-us">
    <h2 className='footer-heading'>Contact Us</h2>

    <ul>
            <li><Link to='/'>help center</Link></li>
            <li><Link to='/'>partnership</Link></li>
            <li><Link to='/'>sales</Link></li>
        </ul>
    </div>

    </div>
    <div className="copyright">
        <p>xxxxxxxx</p>
    </div>
    </div>
    
    
    </>
  )
}

export default Footer
