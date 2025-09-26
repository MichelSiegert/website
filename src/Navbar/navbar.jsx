import './navbar.css'

import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Navbar(){
    let [index, setIndex] = useState(0);

    const handleClick = (i) => {
        setIndex(i)
        window.scrollTo(0, 0);
    };

    return(
        <div id="navbar">
            <Link  
            to="/" 
            className='navOptions' 
            id={index === 0? "hometext": ""}
            onClick={() => handleClick(0)}
            
>
                Home
            </Link>

            <Link to="/CV" className='navOptions'id={index === 1? "hometext": "" } onClick={() => handleClick(1)}>
                CV
            </Link>            
            <Link to="/Blog"className='navOptions'id={index === 2? "hometext": "" }onClick={() => handleClick(2)}>
                Blog
            </Link>
        </div>
    )
}

export default Navbar   