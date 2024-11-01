import './App.css';
import Cards from './components/Cards/Cards';
import Counter from './components/Counter/counter';
import Introduction from './components/introduction/intro';
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <h1 className="text-3xl font-bold underline">
      <Navbar/>
      <Introduction/>
      <Cards/>
    </h1>
  );
}

export default App;
