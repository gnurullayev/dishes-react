import {API_URL} from "./config"

const getAllCategories = async () => {
    const response = await fetch(`${API_URL}categories.php`)
    return await response.json()
}

const getAllMeals =async (name) => {
    const response = await fetch (`${API_URL}filter.php?c=${name}`)
    return await response.json()
}

const getMealDetails =async (id) => {
    const response = await fetch (`${API_URL}lookup.php?i=${id}`)
    return await response.json()
}


export {getAllCategories, getAllMeals, getMealDetails}