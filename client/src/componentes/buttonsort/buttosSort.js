import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSorted, addFiltered } from "../../actions/index";
import './buttonSort.css'


export default function ButtonSort (){
const state = useSelector(state => state.recipes)

/*
Entre los requerimientos provistos, estaba la de crear un modelo Recipe que debía contener 
una propiedad "nombre", mientras que de la API el nombre de la receta llega como "title".
En este componente se ordena el listado a renderizar, tanto de manera ascendente 
como descendente.
*/

const dispatch = useDispatch()

function ascendent (){
    var recipeSorted = state.sort(function(a,b){
        if(a.title && b.title && a.title > b.title) return 1
        if(a.title && b.title && a.title < b.title) return -1
        if(a.title && b.title && a.title === b.title) return 0
        if(a.name && b.name && a.name > b.name) return 1
        if(a.name && b.name && a.name < b.name) return -1
        if(a.name && b.name && a.name === b.name) return 0
        if(a.title && b.name && a.title > b.name) return 1
        if(a.title && b.name && a.title < b.name) return -1
        if(a.title && b.name && a.title === b.name) return 0
        if(a.name && b.title && a.name > b.title) return 1
        if(a.name && b.title && a.name < b.title) return -1
        if(a.name && b.title && a.name === b.title) return 0
    })    
    dispatch(addSorted(recipeSorted))  
    
    var lastIndex = (state.length - 1)
    var firstIndex = lastIndex - 9
    var newfilter = state.slice(firstIndex, lastIndex)        
    dispatch(addFiltered(newfilter))   
}

function descendent (){
    var recipeSorted = state.sort(function(a,b){
        if(a.title && b.title && a.title < b.title) return 1
        if(a.title && b.title && a.title > b.title) return -1
        if(a.title && b.title && a.title === b.title) return 0
        if(a.name && b.name && a.name < b.name) return 1
        if(a.name && b.name && a.name > b.name) return -1
        if(a.name && b.name && a.name === b.name) return 0
        if(a.title && b.name && a.title < b.name) return 1
        if(a.title && b.name && a.title > b.name) return -1
        if(a.title && b.name && a.title === b.name) return 0
        if(a.name && b.title && a.name < b.title) return 1
        if(a.name && b.title && a.name > b.title) return -1
        if(a.name && b.title && a.name === b.title) return 0
    })
    dispatch(addSorted(recipeSorted))
    
    var lastIndex = (state.length - 1)
    var firstIndex = lastIndex - 9
    var newfilter = state.slice(firstIndex, lastIndex)        
    dispatch(addFiltered(newfilter))   
}
   
    return (
        <div className="sortStyle">
            <button className="sort" onClick={descendent}>sort a/z </button>
            <button className="sort" onClick={ascendent}>sort z/a</button>
        </div>
    )

}