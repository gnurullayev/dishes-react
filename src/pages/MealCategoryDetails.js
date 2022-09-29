import React, { useEffect, useState } from 'react';
import {useParams } from 'react-router-dom';
import Loader from '../components/loader/Loader';
import MealDetailsContent from '../components/MealDetailsContent';
import {getMealDetails} from "../fetching"

function MealCategoryDetails() {
    const [meal, SetMeail] = useState([])

    const {id} = useParams()

    useEffect(() => {
        getMealDetails(id)
        .then(data => SetMeail([...data.meals]))
    }, [])


    return (
       <div className="meal-details main">
            <div className='container'>
                <div className="card py-4" style={{border:"none"}}>
                    {
                        !meal.length
                        ? <Loader/>
                        : <MealDetailsContent {...meal}/>
                    }
                </div>
            </div>
       </div>
    );
}

export default MealCategoryDetails;