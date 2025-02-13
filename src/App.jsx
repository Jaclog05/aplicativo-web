import { Routes, Route } from "react-router"
import NavBar from "./components/navbar/NavBar"
import Home from "./views/Home/Home"
import Login from "./views/Login/Login"
import AboutUs from "./views/AboutUs/AboutUs"
import AppraisalComponent from "./components/appraisal/AppraisalComponent"

function App() {

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={
          <Home/>
        } />
        <Route path="/" element={
          <AppraisalComponent/>
        } />
        <Route path="/admin-login" element={
          <Login />
        } />
        <Route path="/aboutUs" element={
          <AboutUs/>
        } />
      </Routes>
    </>
  )
}

export default App
