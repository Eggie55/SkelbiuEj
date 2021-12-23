import React from 'react';
import {  Link } from "react-router-dom";

const Navbar= () =>{
  return (
  <ul>
      <li>
      <Link to="/">SKELBIU</Link>
    </li>
    <li>
      <Link to="/">Pagrindinis</Link>
    </li>
    <li>
      <Link to="/">Atsijungti</Link>
    </li>
    <li>
      <Link to="/myaccount">Mano Paskyra</Link>
    </li>
  </ul>
  );
}
export default Navbar;