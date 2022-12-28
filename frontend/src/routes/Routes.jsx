import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "../layout"
import HomePage from "../pages/home"
import LandingPage from "../pages/landing/Landing"
import Login from "../pages/login/Login"
import Register from "../pages/register/Register"

const RouteComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={
          <Layout>
            <HomePage />
          </Layout>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default RouteComponent