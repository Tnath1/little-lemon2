import { NavLink } from "react-router-dom";

function NavLinks() {
  return (
    <nav className="navLinks">
      <div className="center">
        <img src="./images/Nav.png" className="imgNav" alt="Logo" />
      </div>
      <div className="center">
        <NavLink className="flexItems" to="/">
          Home
        </NavLink>
        <NavLink className="flexItems" to="/about">
          About
        </NavLink>
        <NavLink className="flexItems" to="/menu">
          Menu
        </NavLink>
        <NavLink className="flexItems" to="/reservation">
          Reservation
        </NavLink>
        <NavLink className="flexItems" to="/orderonline">
          Order Online
        </NavLink>
        <NavLink className="flexItem" to="/login">
          Login
        </NavLink>
      </div>
    </nav>
  );
}

export default NavLinks;
