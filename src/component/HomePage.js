import React from 'react';
import './homepage.css'
import RotatingSquare from './Square.js';
import InfoBlock from './InfoBlock';
import { useRef, useEffect, useState } from 'react';
import { preLoaderAnim } from '../animations'
import PreLoader from './PreLoader';

function HomePage()
{

  
    
    return (
        <>
        
            <div className = "homepage-container">
            
            <div className="rotating-square-container">
                <RotatingSquare />
            </div>
            
            <div className="headline-text">
                <h1>Aspiring Software Engineer</h1>
            </div>

            <div className="main-text">
                <h1>Welcome To My Portfolio</h1>
            </div>

        </div>        
        </>      
    )
}

export default HomePage;