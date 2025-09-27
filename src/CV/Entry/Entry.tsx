import Line from '../Line/line.tsx';
import './Entry.css';

function Entry(props) {
  const {
    date, upper, lower, color,
  } = props;
  return (
    <div className="entryContainer">
      <Line color={color} />
      <div className="dateTime">{date}</div>
      <div className="upperText overflow-hidden">{upper}</div>
      <div className="lowerText  md:block hidden ">{lower}</div>
    </div>
  );
}

Entry.defaultProps = {
  date: 'Aug 2013 - Jul 2016',
  upper: 'Life Guard',
  lower: 'ZERO RELEVANCE FOR PROGRAMMING BABEY! LOVE IT!ZERO RELEVANCE FOR PROGRAMMING BABEY! LOVE IT!ZERO RELEVANCE FOR PROGRAMMING BABEY! LOVE IT!ZERO RELEVANCE FOR PROGRAMMING BABEY! LOVE IT!ZERO RELEVANCE FOR PROGRAMMING BABEY! LOVE IT!',
  color: '#10bb87',
};

export default Entry;
