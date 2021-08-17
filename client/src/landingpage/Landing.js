import React from 'react';
import { Link } from 'react-router-dom';
import firstLoad from '../componentes/firtsload/firstLoad';
import './landingPage.css'
import { useState } from 'react';
import fetch from 'fetch';


export default function LandingPage() {
      
    
    return (
        <div className="container">           
            <div className="button-container"> 
              <h1>Bienvenidos</h1>             
                <Link to="/home">
                    <button className="button">Ingresar</button>
                </Link>
            </div>
        </div>
        )
}
