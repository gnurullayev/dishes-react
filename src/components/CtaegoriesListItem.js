import React from 'react';
import { Link } from 'react-router-dom';

import "./categoriesListItem.css"

function CtaegoriesListItem({strCategory, strCategoryThumb, strCategoryDescription}) {

    return (
        <li className = "col-md-6 col-lg-4 col-xl-3 ">
             <div className="card" >
                <img src={strCategoryThumb} className="card-img-top" alt= {strCategory}/>
                <div className="card-body">
                    <h5 className="card-title">{strCategory}</h5>
                    <p className="card-text">{strCategoryDescription.slice(0,50)} ...</p>
                    <Link to={`categorie/${strCategory}`} className="btn btn-success">Go meals</Link>
                </div>
            </div>
        </li>
    );
}

export default CtaegoriesListItem;