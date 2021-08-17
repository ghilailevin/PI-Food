import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { postRecipe, addDietType } from "../../actions/index";
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import './createRecipe.css'

export default function Form (){

    /*
    Componente encargado de la creación de una receta nueva.
    Cuenta con un componente controlado y se renderiza un mensaje de confirmación
    o de error según el caso.
    */

    useEffect(() => {
        dispatch(addDietType());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    const diets = useSelector(state => state.diets)
    const posted = useSelector(state => state.postedRecipe)
    
    const dispatch = useDispatch()
    const [recipesState, SetRecipesState] = useState({
        name: '',
        summary: '',
        score: '',
        healthyFood: '',
        stepByStep: '',
        diet: []
    })
    const [spoonScoreErr, setSpoonScoreErr] = React.useState('')
    const [healthyFoodErr, setHealthyFoodErr] = React.useState('')

    function handleChange(e){
        if(e.target.name === "diet"){
            SetRecipesState({...recipesState, diet: [...recipesState.diet, e.target.value]})    
        }
        else SetRecipesState({...recipesState, [e.target.name]: e.target.value})
    }
    
    function refresh(){
    return 'done'
    }
    
    function handleSubmit (e){   
        e.preventDefault()
    dispatch(postRecipe(recipesState))
    
    SetRecipesState({
        name: '',
        summary: '',
        score: '', 
        healthyFood: '',
        stepByStep: '',
        diet: []
    })
} 

    function validateNumber(e) {
    var val = e.target.value
    if(!/[0-9]/.test(val)) {
        if([e.target.name] === 'score') setSpoonScoreErr('should be a number')          
        if([e.target.name] === 'healthyFood') setHealthyFoodErr('should be a number');
    }
     else {
        if([e.target.name] === 'score') setSpoonScoreErr('')
        if([e.target.name] === 'healthyFood') setHealthyFoodErr('')
    }
    SetRecipesState({...recipesState, [e.target.name]: e.target.value});
   
  }

    return (
        <div className="fondo">
            <form onSubmit={handleSubmit}>
                <input name="name" placeholder="Nombre de tu receta" onChange={handleChange} value={recipesState.name}></input>
                <textarea name="summary" placeholder="Descripción de tu receta" onChange={handleChange} value={recipesState.summary}></textarea>
                <input name="score" placeholder="Puntaje de tu receta" onChange={(e) => validateNumber(e)} value={recipesState.score}></input>
                {!spoonScoreErr ? null : <span>{spoonScoreErr}</span>}
                <input name="healthyFood" placeholder="Nivel de 'comida saludable'" onChange={(e) => validateNumber(e)} value={recipesState.healthyFood}></input>
                {!healthyFoodErr ? null : <span>{healthyFoodErr}</span>}
                <textarea name="stepByStep" placeholder="Instrucciones" onChange={handleChange} value={recipesState.stepByStep}></textarea>
                <div>
                {diets.map(diet =>{
                    return(
                        <div key={diet.id}>
                            <label>{diet.name}</label>
                            <input name="diet" type="checkBox" onChange={handleChange} value={diet.name}></input>
                        </div>                       
                    )
                }) }
                </div>
                <button>Submit</button> 
            </form>
            <div>{posted}</div>            
            {posted.length > 1 && <form onSubmit={refresh}>
                <button className="buttonRefresh">Ingresar otra receta</button>
            </form>}
            <Link to='/home'>
                <button>Volver</button>
            </Link>
        </div>
    )
}