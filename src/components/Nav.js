import React, { useEffect, useState } from "react";
import logo from "../images/Netflix_logo.jpg";
import avatar from "../images/Netflix_avatar.jpg";
import "../css/Nav.css";


function Nav() {
  // handle show
  const [show, handleShow] = useState(false);
  
  // when nav bar loadss
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if(window.scrollY >100){
        handleShow(true);
      }else{
        handleShow(false);
      }
    });
    return ()=>{
      window.removeEventListener("scroll");
    }
  },[]);

  return <div className={`Nav ${show && "Nav_black"}`}>
    <img className="Nav_logo" src={logo} alt="Netflix Logo"></img>
    <img className="Nav_avatar" src={avatar} alt="Netflix Logo"></img>

  </div>;
}

export default Nav;
