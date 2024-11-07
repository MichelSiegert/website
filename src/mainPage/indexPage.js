import Navbar from '../navbar/navbar';
import './App.css';
import Cards from './Cards/Cards';
import Email from './Email/Email';
import Introduction from './introduction/intro';
import Lang from './language/lang';
import Quote from './quote/quote';

function IndexPage() {
  return (
    <div className="">
      <Navbar i={0}></Navbar>
      <Introduction/>
      <Cards/>
      <Quote/>
      <Lang/>
      <Email/>
    </div> 
  );
}

export default IndexPage;
