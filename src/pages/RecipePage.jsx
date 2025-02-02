import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom';
import url from '../url';
function RecipePage() {

    let { id } = useParams();
    const [recipe,setRecipe] = useState([])
    useEffect(()=>{
        const fetchRecipe = async()=>{
            try{
                const response = await axios.get(`${url}/api/recipe/${id}`);
                setRecipe(response.data.rec);
            }
            catch(err){
                console.log(err);
            }
        }
        fetchRecipe();

    },[])

  return (
    <div>
        <div className="recipe-holder">
            {recipe.name}
        </div>
    </div>
  )
}

export default RecipePage
