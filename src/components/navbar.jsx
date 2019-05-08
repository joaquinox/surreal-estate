import React from 'react';
import { Link } from 'react-router-dom';
import '../css/navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFortAwesomeAlt } from '@fortawesome/free-brands-svg-icons';

const AWESOME_ICON = <FontAwesomeIcon icon={faFortAwesomeAlt} />;

const NavBar = () => {
  return (
    <div className="navbar">
      <div>
        <Link to="/" className="icon">{AWESOME_ICON}   Surreal Estate</Link>
      </div>
      <ul className="nav">
        <Link to="/" className="item">View Properties</Link>
        <Link to="/add-property" className="item">Add a Property</Link>
      </ul>
    </div>
  );
};

export default NavBar;
