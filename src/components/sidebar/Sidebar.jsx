import React from "react";
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
    <aside className="h-md-100 d-md-flex flex-md-column col-md-2 bg-secondary">
      <div className="text-center mb-md-2 text-light">
        <i
          className="bi bi-person-square"
          style={{fontSize: '7rem', color: "#f2f9f1"}}
        ></i>
        <p className="mb-0 fw-bold">Admin 1</p>
        <p
          className="mb-0 fst-italic text-break px-2"
          style={{ fontSize: "0.8rem" }}
        >
          admin1@example.com
        </p>
      </div>

      <hr className="d-none d-md-block text-light" />

      <p
        className="d-none d-md-block my-md-2 text-light fw-bold mx-md-2"
        style={{ fontSize: "16px", fontWeight: "900px" }}
      >
        Opciones
      </p>

      <nav className="d-flex align-items-center justify-content-center">
        <ul
          className="w-100 p-0 mb-0 list-unstyled list-inline d-flex d-md-block justify-content-around"
          style={{ fontSize: "14px" }}
        >
          <li className="inline-item text-md-left">
            <a
              name="list"
              value={options[0]}
              onClick={onClick}
              className={`${options[0] ? "bg-light text-secondary": ""} text-decoration-none d-block p-2 nav-link-sidebar-hover`}
            >
              Registros del aplicativo web
            </a>
          </li>
          <li className="inline-item text-md-left">
            <a
              name="edit"
              value={options[1]}
              onClick={onClick}
              className={`${options[1] ? "bg-light text-secondary": ""} text-decoration-none d-block p-2 nav-link-sidebar-hover`}
            >
              Editar precio Metro cuadrado
            </a>
          </li>
          <li className="bg-danger inline-item text-md-left p-2 nav-link-sidebar-hover">
            <a
              onClick={handleLogout}
              className="text-light text-decoration-none"
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
