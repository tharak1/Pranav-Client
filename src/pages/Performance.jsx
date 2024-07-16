import React, { useEffect, useState } from 'react'
import '../styles/Performance.css'
import { useGetUserID } from '../hooks/useGetUserID';
import axios from 'axios';



function Performance() {

  const [data1,setData] = useState({});

  let config = {
    headers: {
      'Authorization': 'Bearer ' + useGetUserID()
    }
  }

  useEffect(()=>{
    const fetchUserdata = async()=>{
      try{
        const dataresponse = await axios.get("http://localhost:5000/api/userdata/",config);
        setData(dataresponse.data[0])
        console.log(dataresponse.data[0]);
      }
      catch(err){
          console.log(err);
      }
    }
    fetchUserdata()
  },[])  
  return (
    <>
      <div className="performacne-holder">
        <div className="performance-grid-card">
          <div className="performance-card tests-analysed" style={{backgroundColor:""}}>
              <div className="title">
                <div className="performance-card-image">
                    <img src={require("../assets/report.png")} alt="" />
                </div>
                <div className="title-name">
                    <h2>Tests Analysed</h2>
                </div>
              </div>
              <div className="server-responce">
                <h2>{data1.testsAnalysed ? data1.testsAnalysed : 'No data' }</h2>
              </div> 
              <div className="desc">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, ipsum?</p>
              </div>
          </div>
          <div className="performance-card improvement" style={{backgroundColor:""}}>

          <div className="title">
                <div className="performance-card-image">
                    <img src={require("../assets/improve.png")} alt="" />
                </div>
                <div className="title-name">
                  <h2>Improvement</h2>
                </div>
              </div>
              <div className="server-responce">
                <h2>{data1.improvement ? data1.improvement : 'No data' }</h2>
              </div>
              <div className="desc">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, voluptate!</p>
              </div>

          </div>
          <div className="performance-card badges" style={{backgroundColor:""}}>

          <div className="title">
                <div className="performance-card-image">
                    <img src={require("../assets/verified.png")} alt="" />
                </div>
                <div className="title-name">
                    <h2>Badges</h2>
                </div>
              </div>
              <div className="server-responce">
                <h2>{data1.badges ? data1.badges : 'No data' }</h2>
              </div>
              <div className="desc">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, quaerat.</p>
              </div>

          </div>
          <div className="performance-card days" style={{backgroundColor:""}}>

          <div className="title">
                <div className="performance-card-image">
                    <img src={require("../assets/calendar.png")} alt="" />
                </div>
                <div className="title-name">
                  <h2>Days</h2>
                </div>
              </div>
              <div className="server-responce">
                <h2>{data1.days ? data1.days : 'No data' }</h2>
              </div>
              <div className="desc">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, voluptas!</p>
              </div>

          </div>
          <div className="performance-card score" style={{backgroundColor:""}}>

          <div className="title">
                <div className="performance-card-image">
                    <img src={require("../assets/speedometer.png")} alt="" />
                </div>
                <div className="title-name">
                    <h2>Score</h2>
                </div>
              </div>
              <div className="server-responce">
                <h2>{data1.score ? data1.score : 'No data' }</h2>
              </div>
              <div className="desc">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, sed?</p>
              </div>

          </div>
          <div className="performance-card analysis" style={{backgroundColor:""}}>

          <div className="title">
                <div className="performance-card-image">
                    <img src={require("../assets/data-analysis.png")} alt="" />
                </div>
                <div className="title-name">
                    <h2>analysis-data</h2>
                </div>
              </div>
              <div className="server-responce">
                <h2>{data1.analysed ? data1.analysed : 'No data' }</h2>
              </div>
              <div className="desc">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>

          </div>
        </div>
      </div>

      <div className="test-anlysis">
        
        <div className="test-analysis-heading">
          <h2>Test Analysis</h2>
        </div>
        <div className="analysis-container">
          <div className="first-graph">

          </div>

          <div className="second-graph">

          </div>
        </div>
        
        
      </div>

      <div className="new">

      </div>

    </>
  )
}

export default Performance
