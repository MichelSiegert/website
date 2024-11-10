import Navbar from "../navbar/navbar";

import React from 'react';
import { Link } from 'react-router-dom';
import "./Blog.css";
function Blog(){
    return (
    <div style={{width:"100%"}}>
        <Navbar i={2}/>
        <div
        className="blogLayout"
        >
            <div className="entriesText">Entries</div>
            <Link to="/blog/todo" className="blogCard">
                <div className="headlineBlog">Work in Progress.</div>
                <div className="blogCardText">Due to time Constraints there is nothing here yet. I will write 2 Articles about a Kotlin app for a Robot that does tours in Museums and my work with CNN's in Python using Transfer Learning.</div>
            </Link>
            </div>
    </div>
    )
}
export default Blog