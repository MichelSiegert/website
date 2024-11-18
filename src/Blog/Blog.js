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
            <Link to="/blog/finance1" className="blogCard">
                <div className="headlineBlog">Getting back into finance via python ML. Part 1 </div>
                <div className="blogCardText">I’m planning to dive into building the logic for a trading bot using TensorFlow, trying it out as a mixed model. I’ll start with some simple trading logic, move on to using an LSTM, and then see if I can implement a Transformer. The idea is to learn more about these models and how they work in practice.</div>
            </Link>
            <Link to="/blog/helloworld1" className="blogCard">
                <div className="headlineBlog">Work in Progress.</div>
                <div className="blogCardText">Due to time Constraints there is nothing here yet. I will write 2 Articles about a Kotlin app for a Robot that does tours in Museums and my work with CNN's in Python using Transfer Learning.</div>
            </Link>
            </div>
    </div>
    )
}
export default Blog