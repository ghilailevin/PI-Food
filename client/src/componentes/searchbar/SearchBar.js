import React, {useState} from 'react';
import { connect } from "react-redux";
import {findRecipe, reset} from "../../actions/index";
import "./SearchBar.css"


function SearchBar ({error, reset, findRecipe}) {
 
    const [inputState, setInput] = useState("")

    function handleChange(e){
        setInput(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        reset()
        findRecipe(inputState)
        setInput('')
    }

    return (
        <div className="box2">
            {error}            
            <form onSubmit={handleSubmit}>
            <input name="name" placeholder="ingrese el nombre de la receta" onChange={handleChange} value={inputState}/>
            <button type="submit">buscar</button>
            </form>
        </div>
    )
}

function mapStateToProps(state){
    return{
        error: state.searchError,
        recipe: state.recipe
    }
}

function mapDispatchToProps(dispatch){
    return {
        findRecipe: name => dispatch(findRecipe(name)),
        reset: () => dispatch(reset())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)