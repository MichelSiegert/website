import './App.css';
import Introduction from './components/introduction/intro';
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <h1 className="text-3xl font-bold underline">
      <Navbar/>
      <Introduction/>

    </h1>
  );
}

export default App;
