import "./line.css"
function Line(props){
    const color = props.color;
    return (
    <div className="container">
        <div className="lineContainer">
            <div className="line"></div>
            <div className="vertical"></div>
            <div className="circle" style={{background:color}}></div>
        </div>
    </div>)
};

Line.defaultProps = {
    color:"#ffc0cb"
}



export default Line;