import React from 'react';
import SearchBar from '../componentes/searchbar/SearchBar';
import FilterButton from '../componentes/filterbutton/filterButton';
import ButtonPage  from '../componentes/buttonpage/buttonPage';
import ButtonSort from '../componentes/buttonsort/buttosSort';
import './Nav.css'

export default function Nav (){
    return (
        <div className="nav-container">
            <div className="headerContainer">
            <SearchBar/>
            <FilterButton/>
            <div className="box1">
            <ButtonPage/>
            <ButtonSort/>
            </div>
            </div>
        </div>
    )
}

