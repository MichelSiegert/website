import { useState } from "react";
import React, {useEffect, useRef} from "react"
import {motion, useInView, useAnimation} from "framer-motion"

import ts from "./assets/ts.png"
import js from "./assets/js.png"
import java from "./assets/java.png"
import kotlin from "./assets/kotlin.png"
import python from "./assets/python.png"
import dart from "./assets/dart.png"
import go from "./assets/go.png"
import "./lang.css"
import Ts from "./subcomponents/ts";
import Js from "./subcomponents/js";
import Kotlin from "./subcomponents/kotlin";
import Java from "./subcomponents/java";
import Python from "./subcomponents/python";
import Dart from "./subcomponents/dart";
import Go from "./subcomponents/go";
function Lang(){

    let [index, setIndex] = useState(0)
    const context = [<Ts/>, <Js/>,<Java/>, <Kotlin/>, <Python/>, <Dart/>, <Go/>];
    const [animation, setAnimation] = useState('');
    const ctl = useAnimation()


    
    const variants = {
        left: { x: -100, opacity: 0 },
        middle: { x: 0, opacity: 1 },
        right: {x: 100, opacity: 0}
      };


    const handleOptionClick = (newIndex) => {

        if (newIndex === index) return;
        if(newIndex > index) {
            ctl.start("left")

            setTimeout(() => {
                setIndex(newIndex);
                ctl.start("right");
              }, 250);
        
        setTimeout(() => {
          setIndex(newIndex);
          ctl.start("middle");
        }, 500);
        return 
        } 

            ctl.start("right")

            setTimeout(() => {
                setIndex(newIndex);
                ctl.start("left");
              }, 250);
        
        setTimeout(() => {
          setIndex(newIndex);
          ctl.start("middle");
        }, 500);
    };

    

    return (
        <div className="languagesSection">
            <div className="Iconbar animated-text-container">
                <img className={(index === 0?"icon":"unselectedIcon")} onClick={()=>handleOptionClick(0)} src={ts} alt="ts"></img>
                <img className={(index === 1?"icon":"unselectedIcon")} onClick={()=>handleOptionClick(1)} src={js} alt="js"></img>
                <img className={(index === 2?"icon":"unselectedIcon")} onClick={()=>handleOptionClick(2)} src={java} alt="java"></img>
                <img className={(index === 3?"icon":"unselectedIcon")} onClick={()=>handleOptionClick(3)} src={kotlin} alt="kotlin"></img>
                <img className={(index === 4?"icon":"unselectedIcon")} onClick={()=>handleOptionClick(4)} src={python} alt="python"></img>
                <img className={(index === 5?"icon":"unselectedIcon")} onClick={()=>handleOptionClick(5)} src={dart} alt="dart"></img>
                <img className={(index === 6?"icon":"unselectedIcon")} onClick={()=>handleOptionClick(6)} src={go} alt="go"></img>
            </div>
            <motion.div className={`mainBody`}
            animate= {ctl}
            transition ={{duration : 0.25, delay: 0.0}}
            variants={variants}
            initial="middle"
            >
                {context[index]}
            </motion.div>
            <div className="continueButton"> </div>
        </div>
    )
}

export default Lang;