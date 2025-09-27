import './line.css';

function Line(props: any) {
  const { color } = props;
  return (
    <div className="container">
      <div className="lineContainer">
        <div className="line" />
        <div className="vertical" />
        <div className="circle" style={{ background: color }} />
      </div>
    </div>
  );
}

Line.defaultProps = {
  color: '#ffc0cb',
};

export default Line;
