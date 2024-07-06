import React, { useState, useEffect, useRef } from 'react';
import './navbar.css';
import 'boxicons/css/boxicons.min.css';

function Nav({ aboutRef }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState({
    htmlCss: false,
    js: false,
    more: false
  });

  const navbarRef = useRef(null);
  const searchBoxRef = useRef(null);
  const navLinksRef = useRef(null);
  const menuOpenBtnRef = useRef(null);
  const menuCloseBtnRef = useRef(null);
  const htmlcssArrowRef = useRef(null);
  const moreArrowRef = useRef(null);
  const jsArrowRef = useRef(null);

  useEffect(() => {
    const searchBoxClickHandler = () => {
      navbarRef.current.classList.toggle('showInput');
      if (navbarRef.current.classList.contains('showInput')) {
        searchBoxRef.current.classList.replace('bx-search', 'bx-x');
      } else {
        searchBoxRef.current.classList.replace('bx-x', 'bx-search');
      }
    };

    const menuOpenHandler = () => {
      navLinksRef.current.style.left = '0';
    };

    const menuCloseHandler = () => {
      navLinksRef.current.style.left = '-100%';
    };

    const htmlcssArrowClickHandler = () => {
      navLinksRef.current.classList.toggle('show1');
    };

    const moreArrowClickHandler = () => {
      navLinksRef.current.classList.toggle('show2');
    };

    const jsArrowClickHandler = () => {
      navLinksRef.current.classList.toggle('show3');
    };

     searchBoxRef.current.addEventListener('click', searchBoxClickHandler);
     menuOpenBtnRef.current.addEventListener('click', menuOpenHandler);
    menuCloseBtnRef.current.addEventListener('click', menuCloseHandler);
  //  htmlcssArrowRef.current.addEventListener('click', htmlcssArrowClickHandler);
  //   moreArrowRef.current.addEventListener('click', moreArrowClickHandler);
  //   jsArrowRef.current.addEventListener('click', jsArrowClickHandler);

    return () => {
       searchBoxRef.current.removeEventListener('click', searchBoxClickHandler);
       menuOpenBtnRef.current.removeEventListener('click', menuOpenHandler);
       menuCloseBtnRef.current.removeEventListener('click', menuCloseHandler);
      // htmlcssArrowRef.current.removeEventListener('click', htmlcssArrowClickHandler);
      // moreArrowRef.current.removeEventListener('click', moreArrowClickHandler);
      // jsArrowRef.current.removeEventListener('click', jsArrowClickHandler);
    };
  }, []);

  const scrollToAbout = () => {
    if (aboutRef && aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    if (aboutRef && aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav>
      <div className="navbar" ref={navbarRef}>
        <i className='bx bx-menu' ref={menuOpenBtnRef}></i>
        <div className="logo"><a href="#">PortFolio</a></div>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`} ref={navLinksRef}>
          <div className="sidebar-logo">
            <span className="logo-name">PortFolio</span>
            <i className='bx bx-x' ref={menuCloseBtnRef}></i>
          </div>
          <ul className="links">
            <li><a href="/">HOME</a></li>
            {/* <li>
               <a href="#">HTML & CSS</a> 
              <i className='bx bxs-chevron-down htmlcss-arrow arrow' ref={htmlcssArrowRef}></i>
              <ul className={`htmlCss-sub-menu sub-menu ${subMenuOpen.htmlCss ? 'open' : ''}`}>
                <li><a href="#">Web Design</a></li>
                <li><a href="#">Login Forms</a></li>
                <li><a href="#">Card Design</a></li>
                <li className="more">
                  <span>
                    <a href="#">More</a>
                    <i className='bx bxs-chevron-right arrow more-arrow' ref={moreArrowRef}></i>
                  </span>
                  <ul className={`more-sub-menu sub-menu ${subMenuOpen.more ? 'open' : ''}`}>
                    <li><a href="#">Neumorphism</a></li>
                    <li><a href="#">Pre-loader</a></li>
                    <li><a href="#">Glassmorphism</a></li>
                  </ul>
                </li>
              </ul>
            </li> */}
            {/* <li>
              <a href="#">JAVASCRIPT</a>
              <i className='bx bxs-chevron-down js-arrow arrow' ref={jsArrowRef}></i>
              <ul className={`js-sub-menu sub-menu ${subMenuOpen.js ? 'open' : ''}`}>
                <li><a href="#">Dynamic Clock</a></li>
                <li><a href="#">Form Validation</a></li>
                <li><a href="#">Card Slider</a></li>
                <li><a href="#">Complete Website</a></li>
              </ul>
            </li> */}
            <li><a href="#about" onClick={scrollToAbout}>ABOUT ME</a></li>
            <li><a href="#contact" onClick={scrollToContact}>CONTACT ME</a></li>
          </ul>
        </div>
        <div className="search-box">
          <i className='bx bx-search' ref={searchBoxRef}></i>
          <div className="input-box">
            <input type="text" placeholder="Search..." />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
