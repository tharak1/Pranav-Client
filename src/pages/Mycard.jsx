import React from 'react'
import '../styles/Mycard.css'
import {Link} from 'react-router-dom';

function Mycard(props) {


  return (

    <>
      <Link to={`/recipePage/${props.recipe._id}`}>
      <div className='mycard'>
        <div className="recipe-card-container" >
          <img src={props.recipe.imageUrl} alt="" />
        </div>
        <div className="recipe-name">
          <h2>{props.recipe.name}</h2>
        </div>
      </div>
      </Link>
      

    </>
    
  )
}

export default Mycard
