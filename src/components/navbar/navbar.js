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
            <button onClick={scrollToTop} id='hometext'>
                Home
            </button>
        </div>
    )
}

export default Navbar   