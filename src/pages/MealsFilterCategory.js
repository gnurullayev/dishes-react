import React,{useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CategoryFiterList from '../components/CategoryFiterList';
import Loader from '../components/loader/Loader';
import{getAllMeals} from "../fetching"


function MealsFilterCategory() {
    const [meals,setMeals] = useState([]);
    const {name} = useParams()

    const navigation = useNavigate()

    useEffect(() => {
        getAllMeals(name)
        .then(data => setMeals(data.meals))
    }, [name])
    return (
        <div className='categorie main'>
            <div className="container">
                <div className="row">
                <button 
                    className='btn text-light my-4 d-inline-block' 
                    onClick={() => navigation(-1)}
                    style = {{width: "100px"}}
                    >
                        GO BACK
                    </button>
                    {
                        !meals.length 
                        ?
                        <Loader/>
                        :
                        <CategoryFiterList meals={meals}/>
                    }
                </div>
            </div>
        </div>
    );
}

export default MealsFilterCategory;