/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./mealDetalisContent.css"

function MealDetailsContent(props) {
    const navigation = useNavigate()
    const [isShowRecipe, setShevRecip] = useState(false)

    let meal = props[0]

    let mealIngridient = Object.keys(meal).filter(el => {
        if(el.includes("strIngredient") && meal[el]) {
            return el
        }
    })

    return (
        <>
            <button 
            className='btn text-light my-4 d-inline-block' 
            onClick={() => navigation(-1)}
            style = {{width: "100px"}}
            >
                GO BACK
            </button>

            <img src= {meal.strMealThumb} className="card-img-top rounded-3" alt= {meal.strMeal} style = {{width: "60%", margin: "0 auto"}}/>

            <div className="card-body">
                <h3 className="card-title text-center">{meal.strMeal}</h3>
                <p className="card-text">{meal.strInstructions}</p>
                <button className='btn btn-secondary my-4 d-block' onClick={() => setShevRecip(true)}>SHOW RECIPE</button>

               {
                isShowRecipe 
                ?
                <table className="table table-borderless table-list ">
                    <thead className=''>
                        {
                            mealIngridient.map(el => (
                                <tr  className='text-center' key ={meal[el]}>
                                    <th className='text-warning w-50 py-2' >{meal[el]}</th>
                                    <th className='text-light w-50 py-2'>{meal["strMeasure" + el.slice(13)]}</th>
                                </tr>
                            ))
                        }
                    </thead> 
                </table>
                :
                null
               }

                <iframe src={`https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}`} title = {meal.strMeal} allowFullScreen />
 
            </div>

        </>
    );
}

export default MealDetailsContent;

