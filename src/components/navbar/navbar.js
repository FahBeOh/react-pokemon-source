import React from 'react';
import './navbar.css';

const styles = {
    background: "#d82e26",
    fontSize: "2rem",
    fontWeight: "bold", 
    position: "fixed",
    top: 0,
    width: "100%",
    overflow: "hidden",
    zIndex: 1,
}

const Navbar = props => (
<ul className="nav nav-pills nav-justified" style={styles}>
  <li className="nav-item">
    <a className="nav-link" href="/">Home</a>
  </li>
  <li className="nav-item">
    <span className="nav-link" href="#">Catch all 12!</span>
  </li>
  <li className="nav-item">
    <span className="nav-link" href="#">Score: {props.score} | TopScore: {props.topScore}</span>
  </li>
</ul>
);

export default Navbar;