import React from "react";
import adminProfileIcon from "../../assets/user-profile-svgrepo.svg";
import { useNavigate } from "react-router-dom";

function Sidebar({ onClick, options }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmLogout = window.confirm(
      "¿Estás seguro de que deseas cerrar sesión?"
    );

    if (confirmLogout) {
      sessionStorage.removeItem("appraisalToken");
      sessionStorage.removeItem("appraisalsData");
      sessionStorage.removeItem("squareMPrices");
      navigate("/admin-login");
    }
  };

  return (
    <aside className="h-md-100 p-md-2 d-md-flex flex-md-column col-md-2 bg-light">
      <div className="text-center mb-md-2">
        <img
          src={adminProfileIcon}
          alt="Avatar admin"
          className="d-none d-md-block mx-auto w-75 text-dark"
        />
        <p className="mb-0 fw-bold">Admin 1</p>
        <p
          className="mb-0 fst-italic text-break px-2"
          style={{ fontSize: "0.8rem" }}
        >
          admin1@example.com
        </p>
      </div>

      <hr className="d-none d-md-block" />

      <p
        className="d-none d-md-block my-md-2"
        style={{ fontSize: "16px", fontWeight: "900px" }}
      >
        Opciones
      </p>

      <nav className="d-flex align-items-center justify-content-center">
        <ul
          className="w-100 p-0 mb-0 list-unstyled list-inline d-flex d-md-block justify-content-around"
          style={{ fontSize: "14px" }}
        >
          <li className="inline-item text-md-left mx-md-2">
            <a
              name="list"
              value={options[0]}
              onClick={onClick}
              className="text-dark text-decoration-none d-block p-2 nav-link-sidebar-hover"
              style={options[0] ? { background: "#8B8B8B", color: "#FFF" } : {}}
            >
              Registros del aplicativo web
            </a>
          </li>
          <li className="inline-item text-md-left mx-md-2">
            <a
              name="edit"
              value={options[1]}
              onClick={onClick}
              className="text-dark text-decoration-none d-block p-2 nav-link-sidebar-hover"
              style={options[1] ? { background: "#8B8B8B", color: "#FFF" } : {}}
            >
              Editar precio Metro cuadrado
            </a>
          </li>
          <li className="inline-item text-md-left mx-md-2 p-2 nav-link-sidebar-hover">
            <a
              onClick={handleLogout}
              className="text-danger text-decoration-none"
            >
              Cerrar Sesión
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
