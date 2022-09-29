import React from 'react';
import { Link } from 'react-router-dom';

function CategoryFilterListItem({idMeal, strMeal, strMealThumb}) {
    return (
        <>
            <li className = "col-md-6 col-lg-4 col-xl-3 mb-4">
                <div className="card d-flex flex-column justify-content-between" style={{minHeight: "430px"}}>
                    <img src={strMealThumb} className="card-img-top" alt= {strMeal}/>

                    <div className="card-body">
                        <h5 className="card-title">{strMeal}</h5>
                    </div>

                    <Link to= {`/meal/${idMeal}`} className="btn btn-success">Meal details</Link>
                </div> 
            </li>
        </>
    );
}

export default CategoryFilterListItem;