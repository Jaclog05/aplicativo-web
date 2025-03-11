import React, { useState } from "react";
import { useNavigate } from "react-router";
import styles from "./Login.module.css";
import avaluoLogo from "../../assets/avaluo-icon.svg";

const { VITE_API_BASE_URL } = import.meta.env;

function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch(`${VITE_API_BASE_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user, password }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Error al iniciar sesión");
      }

      sessionStorage.setItem("appraisalToken", result.token);

      navigate("/dashboard");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className={styles.viewPage}>
      <form className={styles.wrapper} onSubmit={handleSubmit}>
        <img src={avaluoLogo} alt="avaluo Logo" className={styles.imgIcon} />
        {error && <p className={styles.error}>{error}</p>}
        <input
          type="text"
          placeholder="Ingrese su usuario"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Ingrese su contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input type="submit" value="Iniciar sesión" />
      </form>
    </div>
  );
}

export default Login;
