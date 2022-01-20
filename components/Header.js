import React, { useState, useEffect } from "react";
import Link from "next/link";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behaviour: "smooth",
    });
  };

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 240) {
      setVisible(true);
    } else if (scrolled <= 240) {
      setVisible(false);
    }
  };

  return (
    <header id="header">
      <div className={`l-header ${visible ? "scroll-header" : ""}`}>
        <nav className="nav bd-container ">
          <Link href="#home">
            <a>
              <img src="assets/img/logo.svg" className="nav__logo"></img>
            </a>
          </Link>

          <div
            className={`nav__menu ${toggleMenu ? "show-menu" : ""}`}
            id="nav-menu"
          >
            <ul className="nav__list">
              <li className="nav__item">
                <Link href="#home">
                  <a className="nav__link active-link" onClick={handleToggle}>
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav__item">
                <Link href="#about">
                  <a className="nav__link" onClick={handleToggle}>
                    About us
                  </a>
                </Link>
              </li>
              <li className="nav__item">
                <Link href="#services">
                  <a className="nav__link" onClick={handleToggle}>
                    Offering
                  </a>
                </Link>
              </li>
              <li className="nav__item">
                <Link href="#menu">
                  <a className="nav__link" onClick={handleToggle}>
                    Menu
                  </a>
                </Link>
              </li>
              <li className="nav__item" onClick={handleToggle}>
                <Link href="#contact">
                  <a className="nav__link" onClick={handleToggle}>
                    Contact us
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <div className="nav__toggle" id="nav-toggle" onClick={handleToggle}>
            <i className="bx bx-menu"></i>
          </div>
        </nav>
      </div>

      <div className="home" id="home">
        <div className="home__container bd-container bd-grid">
          <div className="home__data">
            <h1 className="home__title">Tasty food</h1>
            <h2 className="home__subtitle">
              Try the best food of <br /> the week.
            </h2>
            <a href="#" className="button">
              View Menu
            </a>
          </div>

          <img src="assets/img/home.png" alt="" className="home__img"></img>
        </div>
      </div>

      <a
        className={`scroll__top ${visible ? "showBtn" : ""}`}
        id="scroll__top"
        onClick={() => scrollToTop()}
      >
        ☝️
      </a>
    </header>
  );
};

export default Header;
