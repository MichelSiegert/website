import Navbar from "../navbar/navbar"
import Timeline from "./Timeline/Timeline"
import Email from "../Email/Email"
import Greeting from "./HelloCard/greetingCard"
function CV(){

    return (
    <div style={{paddingBottom:"50px"}}>
        <Greeting/>
        <Timeline/>
    </div>)
}

export default CV