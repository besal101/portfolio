import React from "react";
import { RxCross2 } from "react-icons/rx";
import { HiOutlineSearch } from "react-icons/hi";
import { Link } from "react-router-dom";

interface NavmenuProps {
  show: boolean;
  onClick: () => void;
}

const Navmenu: React.FC<NavmenuProps> = ({ show, onClick }) => {
  const handleClickScroll = (id: string) => {
    onClick();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="offcanvas__area"
      style={
        show
          ? { opacity: 1, visibility: "visible" }
          : { opacity: 0, visibility: "hidden" }
      }
    >
      <div className="offcanvas__body">
        <div className="offcanvas__left">
          <div className="offcanvas__logo">
            <Link to="/">
              <img src="/images/site-logo-white-2.png" alt="Offcanvas Logo" />
            </Link>
          </div>
          <div className="offcanvas__social">
            <h3 className="social-title">Find Me</h3>
            <ul>
              <li>
                <a
                  href="https://dribbble.com/besal101"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Dribbble
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/besal101"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/bishal.chh/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/bishal.chhh/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/bishalkhatri/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linked In
                </a>
              </li>
            </ul>
          </div>
          <div className="offcanvas__links">
            <ul>
              <li>
                <a href="#about" onClick={() => handleClickScroll("about")}>
                  About
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => handleClickScroll("contact")}>
                  Contact
                </a>
              </li>
              <li>
                <a href="#project" onClick={() => handleClickScroll("project")}>
                  Project
                </a>
              </li>
              <li>
                <a href="#service" onClick={() => handleClickScroll("service")}>
                  Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="offcanvas__mid">
          <div className="offcanvas__menu-wrapper">
            <nav className="offcanvas__menu">
              <ul className="menu-anim">
                <li style={{ cursor: "pointer" }}>
                  <a>Home</a>
                </li>
                <li style={{ cursor: "pointer" }}>
                  <a>About</a>
                </li>
                <li style={{ cursor: "pointer" }}>
                  <a>Service</a>
                </li>
                <li style={{ cursor: "pointer" }}>
                  <a>Projects</a>
                </li>
                <li style={{ cursor: "pointer" }}>
                  <a>Blog</a>
                </li>
                <li style={{ cursor: "pointer" }}>
                  <a>Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="offcanvas__right">
          <div className="offcanvas__search">
            <form action="#">
              <input type="text" name="search" placeholder="Search keyword" />
              <button>
                <HiOutlineSearch />
              </button>
            </form>
          </div>
          <div className="offcanvas__contact">
            <h3>Get in touch</h3>
            <ul>
              <li>
                <a href="tel:00971526936570">+(971) - 526 936 570</a>
              </li>
              <li>
                <a href="mailto:hello@bishalkhatri.com">
                  hello@bishalkhatri.com
                </a>
              </li>
              <li>Deira - Dubai, UAE</li>
            </ul>
          </div>
          <img src="/images/11.png" alt="shape" className="shape-1" />
          <img src="/images/12.png" alt="shape" className="shape-2" />
        </div>
        <div className="offcanvas__close">
          <button type="button" onClick={onClick}>
            <RxCross2 />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navmenu;
