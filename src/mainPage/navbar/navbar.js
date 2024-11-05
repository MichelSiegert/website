import './navbar.css'
function Navbar(){


    const scrollToTop = () => {
        window.scrollTo({
          top: 0, // Scroll to the top of the page
          behavior: 'smooth', // Smooth scroll
        });
      };

    return(
        <div id="navbar">
            <button onClick={scrollToTop} className='navOptions' id="hometext">
                Home
            </button>

            <button onClick={scrollToTop} className='navOptions'>
                CV
            </button>            
            <button onClick={scrollToTop} className='navOptions'>
                Blog
            </button>
        </div>
    )
}

export default Navbar   