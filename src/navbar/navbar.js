import './navbar.css'

import React from 'react';
import { Link } from 'react-router-dom';


function Navbar({i}){
    return(
        <div id="navbar">
            <Link  to="/" className='navOptions' id={i == 0? "hometext": ""}>
                Home
            </Link>

            <Link to="/CV" className='navOptions'id={i == 1? "hometext": ""}>
                CV
            </Link>            
            <Link to="/Blog"className='navOptions'id={i == 2? "hometext": ""}>
                Blog
            </Link>
        </div>
    )
}

export default Navbar   