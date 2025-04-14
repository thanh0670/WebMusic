import { BrowserRouter, Routes, Route } from "react-router"
import Layout from "../components/layout/Layout"
import HomePage from "../pages/HomePage/HomePage"
import LoginPage from "../pages/LoginPage/LoginPage"
import Contactpage from "../pages/ContactPage/ContactPage"
import RegisterPage from "../pages/LoginPage/RegisterPage"


export default function MainRoute() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="Contactpage" element={<Contactpage />} />
                </Route>
                <Route path="LoginPage" element={<LoginPage />} />
                <Route path="RegisterPage" element={<RegisterPage />} />
            </Routes>
        </BrowserRouter >
    )
}