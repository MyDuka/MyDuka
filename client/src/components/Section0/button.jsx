import React from "react";
import "./button.css";
import { IconButton } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import LoginIcon from '@mui/icons-material/Login';
import $ from "jquery";


function Button() {
  const handleClick = () => {
    const button = $(".button");
    const icon = $(".fas");
    const menu = $("ul");
    if (button.hasClass("expand")) {
      menu.slideUp(function () {
        button.removeClass("expand");
        icon.removeClass("expand");
      });
    } else {
      button.addClass("expand");
      setTimeout(function () {
        icon.addClass("expand");
        menu.stop().slideDown();
      }, 200);
    }
  };

  return (
    <div className="menu-container">
      <div className="button" onClick={handleClick}>
        Login
        <IconButton>
          <LoginIcon className="fas" />
        </IconButton>
      </div>
      <ul>
        <li>
          <a href="#">Super-Merchant Login</a>
        </li>
        <li>
          <a href="#">Admin Login</a>
        </li>
        <li>
          <a href="#">Clerk Login</a>
        </li>
        
      </ul>
    </div>
  );
}

export default Button;