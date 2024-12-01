import './navbar.css'

import React from 'react';
import { Link } from 'react-router-dom';

const handleClick = () => {
    window.scrollTo(0, 0);
};

function Navbar({i}){
    return(
        <div id="navbar">
            <Link  
            to="/" 
            className='navOptions' 
            id={i === 0? "hometext": ""}
            onClick={handleClick}
>
                Home
            </Link>

            <Link to="/CV" className='navOptions'id={i === 1? "hometext": "" } onClick={handleClick}>
                CV
            </Link>            
            <Link to="/Blog"className='navOptions'id={i === 2? "hometext": "" }onClick={handleClick}>
                Blog
            </Link>
        </div>
    )
}

export default Navbar   