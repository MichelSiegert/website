import './Blog.css';
import { NavLink } from 'react-router';

const handleClick = () => {
  window.scrollTo(0, 0);
};

function Blog() {
  return (
    <div style={{ width: '100%' }}>
      <div
        className="blogLayout"
      >
        <div className="entriesText">Entries</div>
        <NavLink to="/blog/finance1" className="blogCard" onClick={handleClick}>
          <div className="headlineBlog">Exploring Trading Bot Logic: From Basics to Transformers Part 1 </div>
          <div className="blogCardText">Collecting data form the internet, Building the code necessary to test the effectivenes of a trading bot, and building a bot for testing it using only moving averages(ma) </div>
        </NavLink>
        <NavLink to="/blog/helloworld1" className="blogCard" onClick={handleClick}>
          <div className="headlineBlog">Work in Progress.</div>
          <div className="blogCardText">Due to time Constraints there is nothing here yet. I will write 2 Articles about a Kotlin app for a Robot that does tours in Museums and my work with CNN&apos;s in Python using Transfer Learning.</div>
        </NavLink>
      </div>
    </div>
  );
}
export default Blog;
