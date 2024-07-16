import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/DashboardNavbar.css'
function DashboardNavbar(props) {
  return (
    <>
    
    <div className="dashboard-navbar">
        <div className="username">
            <h2>Hi {props.user.username}</h2>
        </div>
        <div className="dashboard-navbar-links">
            <ul>
                <li><NavLink to='/dashboard/performance' >performance</NavLink></li>
                <li><NavLink to='/dashboard/info' >info</NavLink></li>
            </ul>
        </div>
    </div>
    
    </>
  )
}

export default DashboardNavbar
