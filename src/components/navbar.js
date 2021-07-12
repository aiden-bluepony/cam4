import React, {useState} from 'react';
import "./navbar.css"
import logo1 from "../images/primary_logo.svg"
import logo2 from "../images/white_logo.svg"
import blueHam from "../images/blueHam.svg";
import whiteHam from "../images/whiteHam.svg";

import Navmenu from "./navmenu"

export default function Navbar({laptopOpen, menuOpen, setMenuOpen}) {
  
  return (
    <div className="navbar">
      {menuOpen ? <Navmenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/> : null}
      <img className="logo" src={laptopOpen ? logo2 : logo1} />
      <div className="rightSideNav">
        <div className="phoneNumber"><a href="tel:2609691020">260.969.1020</a></div>
        <img 
          className="hamburgerIcon" 
          src={laptopOpen ? whiteHam : blueHam} 
          onClick={() => setMenuOpen(true)}
        />
      </div>
    </div>
  )
}