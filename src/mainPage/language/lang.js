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
                <img className="icon" src={ts}></img>
                <img className="unselectedIcon" src={js}></img>
                <img className="unselectedIcon" src={java}></img>
                <img className="unselectedIcon" src={kotlin}></img>
                <img className="unselectedIcon" src={python}></img>
                <img className="unselectedIcon" src={dart}></img>
                <img className="unselectedIcon" src={go}></img>
            </div>
            <div className="mainBody">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </div>
            <div className="continueButton"> </div>
        </div>
    )
}

export default Lang;