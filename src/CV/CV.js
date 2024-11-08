import Navbar from "../navbar/navbar"
import Timeline from "./Timeline/Timeline"
import Email from "../mainPage/Email/Email"
import Greeting from "./HelloCard/greetingCard"
function CV(){

    return (
    <div style={{paddingBottom:"50px"}}>
        <Navbar i={1}/>
        <Greeting/>
        <Timeline/>
        <Email/>
    </div>)
}

export default CV