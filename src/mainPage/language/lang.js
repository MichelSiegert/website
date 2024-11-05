import { useState } from "react";
import ts from "./assets/ts.png"
import js from "./assets/js.png"
import java from "./assets/java.png"
import kotlin from "./assets/kotlin.png"
import python from "./assets/python.png"
import dart from "./assets/dart.png"
import go from "./assets/go.png"
import "./lang.css"
function Lang(){

    let [index, setIndex] = useState(0)

    return (
        <div className="languagesSection">
            <div className="Iconbar">
                <img className={index ==0?"icon":"unselectedIcon"} onClick={()=>setIndex(0)} src={ts}></img>
                <img className={index ==1?"icon":"unselectedIcon"} onClick={()=>setIndex(1)} src={js}></img>
                <img className={index ==2?"icon":"unselectedIcon"} onClick={()=>setIndex(2)} src={java}></img>
                <img className={index ==3?"icon":"unselectedIcon"} onClick={()=>setIndex(3)} src={kotlin}></img>
                <img className={index ==4?"icon":"unselectedIcon"} onClick={()=>setIndex(4)} src={python}></img>
                <img className={index ==5?"icon":"unselectedIcon"} onClick={()=>setIndex(5)} src={dart}></img>
                <img className={index ==6?"icon":"unselectedIcon"} onClick={()=>setIndex(6)} src={go}></img>
            </div>
            <div className="mainBody">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </div>
            <div className="continueButton"> </div>
        </div>
    )
}

export default Lang;