import { ADD_RECIPES, ADD_DIETTYPE, ADD_POSTED, ADD_FILTERED, ADD_RECIPE, ADD_MESSAGE, RESET_MESSAGE } from "./actions";



export function findRecipe (name){
    return (dispatch) => {
        fetch(`http://localhost:3001/recipes?name=${name}`)
        .then(response => response.json())
        .then(json => {
            dispatch({
                type: ADD_RECIPES,
                payload: json
            })
        })
        .catch(e => {
            dispatch({
                type: ADD_MESSAGE,
                payload: `No se encontró una receta con ese nombre`
            })
        });
    }
}

export function reset () {
    return{
        type: RESET_MESSAGE,
       
    }
}

export function addDietType () {
    return(dispatch) => {
        fetch(`http://localhost:3001/types`)
        .then(response => response.json())
        .then(json => {
            dispatch({
                    type: ADD_DIETTYPE,
                    payload: json
                })
            })
    }
}


export function findDietType (diet){
    return (dispatch) => {
        fetch(`http://localhost:3001/recipes?diet=${diet}`)
        .then(response => response.json())
        .then(json => {
            dispatch({
                type: ADD_RECIPES,
                payload: json
            })
        })
    }
}

export function postRecipe (form){
    return (dispatch) => {
        fetch(`http://localhost:3001/recipes`, form)
        .then((result) => {    
                    
            dispatch({
                type: ADD_POSTED,
                payload: `La receta "${form.name}" fue publicada con exito`
            })
        }).catch(e => {
            dispatch({
                type: ADD_POSTED,
                payload: `No fue posible publicar la receta "${form.name}"`
            })
        });
    }
}


export function getAll (){
    return (dispatch) => {
        fetch(`http://localhost:3001/recipes`)
        .then(response => response.json())
        .then(json => {
            dispatch({
                type: ADD_RECIPES,
                payload: json
            })
        })
    }
}

export function addFiltered(filtered){    
    return {        
        type: ADD_FILTERED,
        payload: filtered
    }
}

export function addSorted(sorted){
    return {
        type: ADD_RECIPES,
        payload: sorted
    }
}

export function addRecipe(id){
    return (dispatch) => {
        fetch(`http://localhost:3001/recipes/${id}`)
        .then(response => response.json())
        .then(json => {
            dispatch({
                    type: ADD_RECIPE,
                    payload: json
                })
            })
    }
}