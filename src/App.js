import './App.css';
import Cards from './components/Cards/Cards';
import Introduction from './components/introduction/intro';
import Navbar from './components/navbar/navbar';
import Quote from './components/quote/quote';

function App() {
  return (
    <h1 className="text-3xl">
      <Navbar/>
      <Introduction/>
      <Cards/>
      <Quote/>
    </h1> 
  );
}

export default App;
