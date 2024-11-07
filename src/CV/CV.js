import Navbar from "../navbar/navbar"
import Timeline from "./Timeline/Timeline"

function CV(){

    return (
    <div style={{paddingBottom:"50px"}}>
        <Navbar i={1}/>
        <div style={{marginLeft:"10%"}}>
            <Timeline/>
        </div>
    </div>)
}

export default CV