import React, { useEffect, useState } from 'react'
import '../styles/Info.css'
import { useGetUserID } from '../hooks/useGetUserID';
import axios from 'axios';
import url from '../url';

function Info() {

  const [info,setInfo] = useState({});

  let config = {
    headers: {
      'Authorization': 'Bearer ' + useGetUserID()
    }
  }

  useEffect(()=>{
    const fetchUserinfo = async()=>{
      try{
        const dataresponse = await axios.get(`${url}/api/userinfo/`,config);
        setInfo(dataresponse.data[0])
        console.log(dataresponse.data[0]);
      }
      catch(err){
          console.log(err);
      }
    }
    fetchUserinfo()
  },[])


  return (
    <>
    <div className="info-holder">
        <div className="info-grid-card">
          <div className="info-card membership-status" style={{backgroundColor:""}}>
              <div className="title">
                <div className="info-card-image">
                    <img src={require("../assets/membership-card.png")} alt="" />   
                </div>
                <div className="title-name">
                    <h2>Membership Status</h2>
                </div>
              </div>
              <div className="server-responce">
                <h2>{info.membershipStatus ? info.membershipStatus : 'No data'}</h2>
              </div>
              <div className="desc">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, ipsum?</p>
              </div>
          </div>
          <div className="info-card todays-recipe" style={{backgroundColor:""}}>

          <div className="title">
                <div className="info-card-image">
                    <img src={require("../assets/recipe.png")} alt="" />
                </div>
                <div className="title-name">
                  <h2>Today's recipe</h2>
                </div>
              </div>
              <div className="server-responce">
                {(info.todaysRecipe) ? 
                (info.todaysRecipe).map((result, i) => ( <p key={i}> {`${result}`}</p>  )): 'No data'}
              </div>
              <div className="desc">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, voluptate!</p>
              </div>

          </div>
          <div className="info-card recomended-recipe" style={{backgroundColor:""}}>

          <div className="title">
                <div className="info-card-image">
                    <img src={require("../assets/social-media.png")} alt="" />
                </div>
                <div className="title-name">
                    <h2>Recomended recipe</h2>
                </div>
              </div>
              <div className="server-responce">
                <h2>{info.recomendedRecipe ? info.recomendedRecipe : 'No data'}</h2>
              </div>
              <div className="desc">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, quaerat.</p>
              </div>

          </div>
          <div className="info-card wallet-balance" style={{backgroundColor:""}}>

          <div className="title">
                <div className="info-card-image">
                    <img src={require("../assets/wallet.png")} alt="" />
                </div>
                <div className="title-name">
                  <h2>Wallet balance</h2>
                </div>
              </div>
              <div className="server-responce">
                <h2>{info.walletBalance ? info.walletBalance : 'No data'}</h2>
              </div>
              <div className="desc">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, voluptas!</p>
              </div>

          </div>
          <div className="info-card delivery-status" style={{backgroundColor:""}}>

          <div className="title">
                <div className="info-card-image">
                    <img src={require("../assets/delivery-status (1).png")} alt="" />
                </div>
                <div className="title-name">
                    <h2>Delivery status</h2>
                </div>
              </div>
              <div className=" delivery-res">
                <div className="d-status-image">
                  <img src={require("../assets/fruit.png")} alt="" />
                </div>
                <div className="progressbar">
                      <div className="back">
                        <div className="progress" style={{width:`${info.deliveryStatus}%`}}>

                        </div>
                      </div>
                </div>
                <div className="d-status-image">
                  <img src={require("../assets/house.png")} alt="" />
                </div>
              </div>
              <div className="desc">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, sed?</p>
              </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Info
