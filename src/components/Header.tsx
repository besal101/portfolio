import React from "react";
import { Link } from "react-router-dom";

interface HeaderProps {
  onClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onClick }) => {
  return (
    <header className="header__area-2">
      <div className="header__inner-5">
        <div className="header__logo-5">
          <Link to="/" className="logo-dark">
            <img src="/images/logo-black.png" alt="Site Logo" />
          </Link>
          <Link to="/" className="logo-light">
            <img src="/images/site-logo-white-2.png" alt="Site Logo" />
          </Link>
        </div>
        <div className="header__nav-icon-5">
          <button id="open_offcanvas" onClick={onClick}>
            <span className="menu-text-pp">Menu</span>
            <img src="/images/menu-black.png" alt="Menubar Icon" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
