import React, {useState} from "react";
import { Link } from "react-router";
import { useLocation } from 'react-router-dom'
import MainIcon from "../MainIcon";

function NavBar() {
  const [isHovered, setIsHovered] = useState(false)
  const location = useLocation();

  if (
    location.pathname === "/dashboard"
  ) {
    return null;
  }

  return (
    <nav className="navbar navbar-light bg-secondary d-flex justify-content-between py-0 px-2 shadow">
      <Link to="/" className="navbar-brand p-0 m-0">
        <div className="d-flex align-items-center text-light justify-content-between gap-2 py-2 fs-5">
          <MainIcon size='2rem'/>
          <p className="mb-0">Aplicativo Web Nombre</p>
        </div>
      </Link>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link
            to="/aboutUs"
            className={`
              nav-link nav-link-hover border border-1 border-light border-bottom-0 border-top-0 border-end-0 px-2 fw-bold
              ${isHovered ? 'text-secondary bg-light' : 'text-light bg-secondary'}
            `}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Sobre Nosotros
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
