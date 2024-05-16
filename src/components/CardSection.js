import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Card';
import { baseURL } from '../baseURL';

const CardSection = () => {

    let [recipe,setRecipe]=useState([]);
    

    useEffect(() => {
        (async () => {
          let res = await axios.get(`${baseURL}/recipe`);
          
          setRecipe(res.data.recipe);
        })();
    
      }, [setRecipe]);
      console.log("recipe from card section",recipe);
  return (
    <div>
        {
            recipe.map((val)=>{
                return <Card id={val._id}/>
            })
        }
    </div>
  )
}

export default CardSection