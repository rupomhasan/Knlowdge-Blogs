// import React from 'react';
import Profile from "../../../public/images/profile.png";
import "../../App.css";
const Header = () => {
   return (
      <>
         <nav className="flex justify-between">
            <h1 className="header">Knowledge cafe</h1>
            <img src={Profile} alt="" />
         </nav>
      </>
   );
};

export default Header;
