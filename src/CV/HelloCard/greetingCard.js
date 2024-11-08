import "./greetingCard.css"
import asdf from "./greeting.png"
function Greeting(){
    return (
    <div className="greetingContainer">
        <img className="imageGreeting" src ={asdf} alt="portrait of me leaning against a wall."/>
      <div style={{marginLeft:"10px"}}>
      <div >
        Hello,
        </div>  
        <div className="bottomTextGreeting">
            Or as we say in Northern Germany: Moin.
                I am Michel, a Full Stack Developer with a passion for creating innovative applications and deploying them in cloud-native environments. I hold a Bachelor's degree in Computer Science and have several years of experience developing with Java, Kotlin, JavaScript, and TypeScript.</div>
        </div>  
    </div>)
}

export default Greeting