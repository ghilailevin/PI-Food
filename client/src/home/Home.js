import React from 'react';
import SearchBar from '../componentes/searchbar/SearchBar.js';
import List from '../componentes/list/List';
import {Link} from 'react-router-dom';
import FilterButton from '../componentes/filterbutton/filterButton';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {addDietType, getAll } from '../actions/index.js';
import  buttonPage  from '../componentes/buttonpage/buttonPage';
import firstLoad from '../componentes/firtsload/firstLoad';
import buttonSort from '../componentes/buttonsort/buttosSort';
import { addFiltered } from "../../src/actions/index";
import Nav from '../nav/Nav';
import './home.css';



export default function Home (){
    

    const dispatch = useDispatch()
    useEffect(() => {        
       dispatch(addDietType());
       // eslint-disable-next-line react-hooks/exhaustive-deps   
    },[])
    useEffect(() => {              
        dispatch(getAll())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
    
    firstLoad();
    buttonPage();
    buttonSort();
    FilterButton(); 
        
    return(
        <div>
            <div>                
                <Nav/>               
                <Link to="/create">
                <div className="box4">
                <button className="buttonCreate">crea una receta</button>
                </div>
               </Link>                
                <List/>                
            </div>
        </div>
    )
    
}

