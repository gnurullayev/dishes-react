import React,{useEffect,useState} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CategoriesList from '../components/CategoriesList';
import Loader from '../components/loader/Loader';
import {getAllCategories} from "../fetching"


function Home() {
    const [categories,setCategories] = useState([])
    const [filterCategories, setFilterCategories] = useState([])

    const {pathname, search} = useLocation()
    const navigate = useNavigate()

    useEffect (() => {
        getAllCategories()
        .then(data => {
            setCategories(data.categories)
            setFilterCategories(search ? data.categories.filter(el => el.strCategory.toLowerCase().includes(search.split("=")[1].toLocaleLowerCase())) : data.categories)
        })
    }, [search])

    const searchCategories = (value) => {
        setFilterCategories([...categories].filter(categoriy => categoriy.strCategory.toLowerCase().includes(value.toLowerCase())))
        navigate(`${pathname}?s=${value}`)
        console.log(search);
    } 

    return (
        <div className='main'>
           <div className="container">
                <div className="inner py-4">
                    {
                        !categories.length 
                        ?
                        <Loader/>
                        :
                        <CategoriesList categories = {filterCategories} searchCtegories = {searchCategories}/>
                    }
                    
                </div>
           </div>
        </div>
    );
}

export default Home;