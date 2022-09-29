import React, { useState} from 'react';
import { useLocation } from 'react-router-dom';
import CtaegoriesListItem from './CtaegoriesListItem';

function CategoriesList({categories, searchCtegories}) {
  const {search} = useLocation()
  const [value, setValue] = useState(search.split("=")[1])


    function searchHandle(e) {
      if(e.code === "Enter") {
        searchCtegories(value)
      }
    }

    function handleValue (e) {
      searchCtegories(value)
    }

    return (
      <>
        <div className='d-flex justify-content-center'>
          <input 
          className='form-control w-50  text-light' 
          value={value}
          onChange ={(e) => setValue(e.target.value)}
          onKeyDown ={searchHandle}
          style={{backgroundColor: "transparent", border: "none", borderBottom: "1px solid rgb(54, 40, 27)"}}
          /> 

          <button 
          className='btn' 
          style={{borderBottom: "1px solid rgb(54, 40, 27)",color: "#fff"}}
          onClick = {handleValue}
          >
            Search
          </button>
        </div>
        <ul className='row gy-4 my-0'>
           {
            categories.map(el => (
                <CtaegoriesListItem key = {el.idCategory} {...el}/>
            ))
           }
        </ul>
      </>
    );
}

export default CategoriesList;