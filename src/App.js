import './App.css';
import Cards from './mainPage/Cards/Cards';
import Email from './mainPage/Email/Email';
import Introduction from './mainPage/introduction/intro';
import Lang from './mainPage/language/lang';
import Navbar from './mainPage/navbar/navbar';
import Quote from './mainPage/quote/quote';

function App() {
  return (
    <div className="text-3xl">
      <Navbar/>
      <Introduction/>
      <Cards/>
      <Quote/>
      <Lang/>
      <Email/>
    </div> 
  );
}

export default App;
