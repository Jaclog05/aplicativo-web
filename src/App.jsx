import { Routes, Route } from "react-router"
import NavBar from "./components/navbar/NavBar"
import Home from "./views/Home/Home"
import Login from "./views/Login/Login"

function App() {

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={
          <Home/>
        } />
        <Route path="/login" element={
          <Login />
        } />
      </Routes>
    </>
  )
}

export default App
