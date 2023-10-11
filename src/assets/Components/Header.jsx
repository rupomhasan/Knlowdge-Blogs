// import React from 'react';
import Profile from "../../../public/images/profile.png";
import "../../App.css";
const Header = () => {
   return (
      <>
         <nav className="flex justify-between bg-slate-200 px-4 rounded">
            <h1 className="header">Knowledge cafe</h1>
            <img src={Profile} alt="" />
         </nav>
      </>
   );
};

export default Header;
