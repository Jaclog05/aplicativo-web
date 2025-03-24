import React from "react";
import avaluoLogo from "../../assets/avaluo-icon.svg";
import { Link } from "react-router";
import { useLocation } from 'react-router-dom'

function NavBar() {
  const location = useLocation();

  if (
    location.pathname === "/dashboard"
  ) {
    return null;
  }

  return (
    <nav className="navbar navbar-light bg-light d-flex justify-content-between py-0 px-2">
      <Link to="/" className="navbar-brand p-0 m-0">
        <div className="d-flex align-items-center justify-content-between gap-2 py-2 fs-5">
          <img src={avaluoLogo} alt="avaluo Logo" />
          <p className="mb-0">Aplicativo Web Nombre</p>
        </div>
      </Link>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/aboutUs" className="nav-link nav-link-hover px-1">
            Sobre Nosotros
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
