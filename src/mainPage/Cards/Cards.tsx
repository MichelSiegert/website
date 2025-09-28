import Counter from '../Counter/counter.tsx';
import './Cards.css';

function Cards() {
  return (
    <div className="cards">
      <div className="card">
        <Counter duration="800" target="4" />
        <div className="bottomText">Years of Work Experience</div>

      </div>
      <div className="card">
        <Counter duration="1100" target="7" />
        <div className="bottomText">Proficiency in Programming Languages</div>
      </div>

      <div className="card">
        <Counter duration="2000" target="8" />
        <div className="bottomText">Successful Projects</div>
      </div>
    </div>
  );
}

export default Cards;
