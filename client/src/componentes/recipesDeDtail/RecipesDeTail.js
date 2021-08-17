import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { addRecipe } from '../../actions/index';
import {Link} from "react-router-dom"
import './recipeDetail.css'

export default function RecipeDetail(props) {

    const [idState, setIdState] = useState("")
    const dispatch = useDispatch()

    useEffect(() => {
        const idParams = props.match.params.id;
        setIdState(idParams)
        dispatch(addRecipe(idParams))        
    }, [])
    
    const state = useSelector(state => state.recipe)
    function summary(){
        return {__html: state.summary};
     }
    
    return (
        <div> 
            <img src={state.image} alt= 'img recipe'/>           
            <h1>{state.name}</h1>
            <h4 className="summaryStyle" dangerouslySetInnerHTML={summary()} ></h4>
            Instructions:
            <div>{state.name?
             <p className="ulContainer">
                {state.stepByStep}
            </p>
            : <p>{state.analyzedInstructions}</p>}
            <div className="box5">
            <h4>HealthScore:{state.healthScore}</h4>
            <h4 className="scoreRecipe">Score:{state.score}</h4>
            <div>{state.healthyFood?.map(diet => {
                if(diet.name){
                    return <label key={diet.name}>{diet.name}</label>
                }
                else return <h4>{diet}</h4>
            })}</div>
            </div>
            </div>
            <Link to="/home">
                <button>Volver</button>    
            </Link>
        </div>
    )
}