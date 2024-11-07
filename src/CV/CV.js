import Navbar from "../navbar/navbar"
import Entry from "./Entry/Entry"
import Line from "./Line/line"

function CV(){

    return (
    <div style={{paddingBottom:"50px"}}>
        <Navbar i={1}/>
        <div style={{marginLeft:"10%"}}>
        <Entry/>
        <Entry/>
        <Entry/>
        <Entry/>
        <Entry/>
        </div>
    </div>)
}

export default CV