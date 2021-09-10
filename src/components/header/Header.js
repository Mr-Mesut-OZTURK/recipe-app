import React, {useContext, useState} from 'react'
import { Button, FoodInput, FormContainer, HeaderContainer, MainHeader, Select } from './HeaderStyle'
import  {RecipeContex}  from '../../context/RecipeContex'



const Header = () => {

    const gelen = useContext(RecipeContex)
    
    console.log(gelen)

    const handleSubmit = (e) => {
        e.preventDefault()
        gelen.getData()
    }


    return (
        <HeaderContainer>

            <MainHeader>Recipe App</MainHeader>

            <FormContainer onSubmit={(e)=>handleSubmit(e)}>
                <FoodInput 
                    value={gelen.query} 
                    onChange={(e)=>gelen.setQuery(e.target.value)}
                />
                <Button>Search</Button>
                <Select>
                    {
                       gelen.mealTypes.map((meal,index)=>(
                           <option key={index} value={meal.toLowerCase()}>{meal}</option>
                       )) 
                    }
                </Select>
                
            </FormContainer>

        </HeaderContainer>
    )
}

export default Header
