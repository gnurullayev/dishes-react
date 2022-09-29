import React from 'react';
import CategoryFilterListItem from './CategoryFilterListItem';

function CategoryFiterList({meals}) {
    return (
        <ul className='row '>
            {
                meals.map(meal => (
                    <CategoryFilterListItem key={meal.idMeal} {...meal}/>
                ))
            }
        </ul>
    );
}

export default CategoryFiterList;