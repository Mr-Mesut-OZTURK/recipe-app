import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios';

export const RecipeContex = createContext()

const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];
const APP_ID = "b2107757" //"acc137f1";
const APP_KEY = "013c9340949ed0ca1b7af8e4cd502e77" //"1ae558907815a5d451220fa6fd8dbfae";



const RecipeContexProvider = ({children}) => {

    
    const [query, setQuery] = useState("apple");
    const [recipes, setRecipes] = useState();
    const [meal, setMeal] = useState(mealTypes[0].toLowerCase());

    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;

    const getData = async () => {

        if (query !== "") {

            const result = await axios.get(url);

            //   console.log("result:", result);

            if (result.status === 200) {
                // console.log(result.data.hits);
                setRecipes(result.data.hits);
            }

        } else {
            alert("Please fill the form");
        }
    };

    // useEffect(() => {
    //     getData()
    // }, [])
    
    
    return (
        <RecipeContex.Provider value={
           { query,setQuery,getData,mealTypes,setMeal,meal}
        }>
            {children}
        </RecipeContex.Provider>
    )

}

export default RecipeContexProvider
