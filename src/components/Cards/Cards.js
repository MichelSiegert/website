import Counter from "../Counter/counter";
import "./Cards.css"

function Cards(){
    return (
        <div className="cards">
            <div className="card">
                <Counter duration="800" target="5"/>
                <div className="bottomText">Years of Work Experience</div>
                
            </div>
            <div className="card">
                <Counter duration="1100" target="7"/>
                <div className="bottomText">Proficiency in Programming Languages</div>
            </div>

            <div className="card">
                <Counter duration="300" target="1"/>
                <div className="bottomText">Scholarship</div>
            </div>
        </div>
    )
}

export default Cards;