import Mycard from './Mycard'
import '../styles/carousel.css'
import axios from 'axios';

import React, { useEffect, useState } from 'react'
import url from '../url';

function Recipecarousel() {
    

    const btnPressPrev = () => {
        let box = document.querySelector('.product-container');
      console.log(box);
          let width = box.clientWidth;
          box.scrollLeft = box.scrollLeft - width;
          console.log(width)
      }
  
      const btnPressNext = () => {
        let box = document.querySelector('.product-container');
      console.log(box);
          let width = box.clientWidth;
          box.scrollLeft = box.scrollLeft + width;
          console.log(width)
      }


     const [recipes,setRecipe] = useState([]);

     useEffect(()=>{
        const fetchRecipe = async()=>{
            try{
                const response = await axios.get(`${url}/api/recipe`);
                setRecipe(response.data.rec);     
                console.log(response.data.rec)
            }
            catch(err){
                console.log(err);
            }
        }
        fetchRecipe();
        console.log(recipes); 
     },[]);
  return (
    <>
            <div className='product-carousel'>
        <button className="pre-btn" onClick={btnPressPrev}><p>&lt;</p></button>
        <button className="next-btn" onClick={btnPressNext}><p>&gt;</p></button>
        <div className="product-container">

            {
                
                recipes.map((recipe,i)=>
                
                    (<Mycard recipe={recipe}/>)
                )
            }
            {/* <Mycard cardno='1'/>
            <Mycard cardno='2'/>
            <Mycard cardno='3'/>
            <Mycard cardno='4'/>
            <Mycard cardno='5'/>
            <Mycard cardno='6'/>
            <Mycard cardno='7'/>
            <Mycard cardno='8'/>
            <Mycard cardno='9'/>
            <Mycard cardno='10'/>
            <Mycard cardno='11'/>
            <Mycard cardno='12'/>
            <Mycard cardno='13'/> */}
        </div>
        
    </div>
    </>
  )
}

export default Recipecarousel
