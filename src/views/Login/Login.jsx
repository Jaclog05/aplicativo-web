import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import LoadingButton from "../../components/LoadingButton";
import Alert from "react-bootstrap/Alert";
import MainIcon from "../../components/MainIcon";
import { AppraisalsDispatchContext } from "../../appraisalContext";

const { VITE_API_BASE_URL } = import.meta.env;

function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useContext(AppraisalsDispatchContext)
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    dispatch({ type: 'SET_IS_LOADING', value: true });
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
    } finally {
      dispatch({ type: 'SET_IS_LOADING', value: false });
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center w-100 vh-100 bg-light">
      {error && (
        <Alert
          variant="danger"
          onClose={() => setError(false)}
          className="fixed-top w-100 text-center mt-5 px-2"
          dismissible
        >
          {error}
        </Alert>
      )}
      <form
        className="d-flex flex-column align-items-stretch gap-2 p-2 rounded bg-primary w-75 w-md-50 text-secondary"
        style={{ maxWidth: "400px" }}
        onSubmit={handleSubmit}
      >
        <MainIcon size="120" className="mx-auto my-1"/>
        <input
          type="text"
          placeholder="Ingrese su usuario"
          className="form-control border border-1 border-secondary"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Ingrese su contraseña"
          className="form-control border border-1 border-secondary"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <LoadingButton
          loadingMessage="Ingresando"
          text="Iniciar Sesión"
        />
      </form>
    </div>
  );
}

export default Login;
