import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "../layout"
import DataAndAnalyticsPage from "../pages/analytics"
import HomePage from "../pages/home"
import LandingPage from "../pages/landing/Landing"
import Login from "../pages/login/Login"
import MessagePage from "../pages/message"
import NotificationsPage from "../pages/notification"
import ProfilePage from "../pages/profile"
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
        <Route path="/message" element={
          <Layout>
            <MessagePage />
          </Layout>
        } />
        <Route path="/notification" element={
          <Layout>
            <NotificationsPage />
          </Layout>
        } />
        <Route path="/profile" element={
          <Layout>
            <ProfilePage />
          </Layout>
        } />
        <Route path="/dataAndAnalytics" element={
          <Layout>
            <DataAndAnalyticsPage />
          </Layout>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default RouteComponent