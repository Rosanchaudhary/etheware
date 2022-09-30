import { useRef } from "react";
import { FaBars, FaLock, FaTimes } from "react-icons/fa";
import {  NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./NavBar.css";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <img src={logo} alt="logo" className="logo"/>
      <nav ref={navRef}>
        <NavLink to='/'>App Store</NavLink>
        <NavLink to="/login">Enterprise Plans</NavLink>
        <NavLink to="/cats">The Etheware Difference</NavLink>
        <NavLink to="/domain-name">App of the Year</NavLink>
        <NavLink to="/name">Etheware Cloud</NavLink>
        <NavLink to="/create-project">Support</NavLink>
        <NavLink to="/calander"><FaLock/></NavLink>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
