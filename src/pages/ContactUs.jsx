import React, { useEffect, useState } from 'react'
import AfterLoginNavbar from './AfterLoginNavbar'
import axios from 'axios';
import { useGetUserID } from '../hooks/useGetUserID';
import Faq from './Faq';
import '../styles/Contactus.css'
function ContactUs() {

  const [user,setUser] = useState({});
 let config = {
  headers: {
    'Authorization': 'Bearer ' + useGetUserID()
  }
}
  

  useEffect(()=>{
    const fetchUser = async()=>{
        try{
          const responce = await axios.get("http://localhost:5000/api/user/validate",config);
          setUser(responce.data);
        }
        catch(err){
          console.log(err);
        }
    }
    fetchUser()
  },[])

  return (
    <div>
        <AfterLoginNavbar user={user}/>
        <Faq/>

        <div className="contact-us-container">
          <div className="contact-us-card callus ">
              <div className="cu-card-image">
                  <img src={require("../assets/customer-service.png")} alt="" />
              </div>
              <div className="cu-details">
                  <p>call us at :</p>
                  <p>+91 7989833031</p>
              </div>
              <div className="cu-button">
                <button className='cu-button-r'>Call Us</button>
              </div>
          </div>
          <div className="contact-us-card visit">
                <div className="cu-card-image">
                <img src={require("../assets/map.png")} alt="" />
                </div>
                <div className="cu-details">
                    <p>Make a visit ?</p>
                    <p>call us and have an appointment</p>
              </div>
              <div className="cu-button">
                <button className='cu-button-r'>Call Us</button>
              </div>
          </div>
        </div>
    </div>
  )
}

export default ContactUs
