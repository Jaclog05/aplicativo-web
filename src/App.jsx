import { Routes, Route } from "react-router"
import NavBar from "./components/navbar/NavBar"
import Home from "./views/Home/Home"
import Login from "./views/Login/Login"
import AboutUs from "./views/AboutUs/AboutUs"
import AppraisalComponent from "./components/appraisal/AppraisalComponent"
import Dashboard from "./views/Dashboard/Dashboard"
import PrivateRoute from "./components/PrivateRoute"
import { AppraisalsContext, AppraisalsDispatchContext } from "./appraisalContext"
import { useReducer } from "react"
import { appraisalReducer, initialState } from "./appraisalReducer"

function App() {

  const [appraisalState, dispatch] = useReducer(appraisalReducer, initialState)

  return (
    <AppraisalsContext.Provider value={appraisalState}>
      <AppraisalsDispatchContext.Provider value={dispatch}>
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
          <Route path="/dashboard" element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          } />
        </Routes>
      </AppraisalsDispatchContext.Provider>
    </AppraisalsContext.Provider>
  )
}

export default App
