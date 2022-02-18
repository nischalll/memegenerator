import React from "react";
// import "../styles.css";  
import logo from "../images/laugh.png";

function Header(props) {
  return (
    <header onClick={props.handleClick}>
      <div className="logo">
          <img src={logo} alt=""/>
        <h1 >Meme Generator</h1>
      </div>
    </header>
  );
}

export default Header;
