import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Accord from './Accord';

function Faq() {
  return (
   <>

   <div className="faq-holder" style={{width:'100%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
    <div className="faq-heading" style={{margin:"30px"}}>
    <h2>FAQ</h2>
   </div>
   <div style={{width:'80%',display:'flex',flexDirection:'column',justifyContent:'center'}}>
   <Accord/>

   </div>
   </div>
   
   </>
  )
}

export default Faq
