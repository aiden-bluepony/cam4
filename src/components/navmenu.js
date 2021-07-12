import React from 'react';
import "./navmenu.css"

export default function Navmenu({menuOpen, setMenuOpen}) {
  return (
    <div className="navmenu">
      <div className="navmenu-innerbox">
        <h1>What we do</h1>
        <ul>
          <li>Design</li>
          <li>Development</li>
          <li>Branding</li>
          <li>Engagement</li>
        </ul>
        <button
          onClick={() => setMenuOpen(false)}
        >Close Menu</button>
      </div>
    </div>
  )
}