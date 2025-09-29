import './App.css';
import Cards from './Cards/Cards.tsx';
import Introduction from './introduction/intro.tsx';
import Lang from './language/lang.tsx';
import Quote from './quote/quote.tsx';

function IndexPage() {
  return (
    <div>
      <Introduction />
      <Cards />
      <Quote />
      <Lang />
    </div>
  );
}

export default IndexPage;
