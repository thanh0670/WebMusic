import { Routes, Route } from "react-router"
import Layout from "../components/layout/Layout"
import HomePage from "../pages/HomePage/HomePage"
import LoginPage from "../pages/LoginPage/LoginPage"
import RegisterPage from "../pages/LoginPage/RegisterPage"
import AdminPage from "../pages/adminPage/adminPage"


export default function MainRoute() {
    return (
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                </Route>
                <Route path="LoginPage" element={<LoginPage />} />
                <Route path="RegisterPage" element={<RegisterPage />} />
                <Route path="admin" element={<AdminPage />} />
            </Routes>
    )
}