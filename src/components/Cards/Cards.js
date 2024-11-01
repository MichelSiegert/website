import Counter from "../Counter/counter";
import "./Cards.css"

function Cards(){
    return (
        <div className="cards">
            <div className="card">
                <Counter duration="800" target="5"/>
                <div>Years of Work Experience</div>
                
            </div>
            <div className="card">
                <Counter duration="800" target="10"/>
                <div>Proficiency in Programming Languages</div>
            </div>

            <div className="card">
                <Counter duration="800" target="1"/>
                <div>Scholarship</div>
            </div>
        </div>
    )
}

export default Cards;