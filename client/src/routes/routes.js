import { Routes, Route } from "react-router"
import Layout from "../components/layout/Layout"
import HomePage from "../pages/HomePage/HomePage"
import LoginPage from "../pages/LoginPage/LoginPage"
import RegisterPage from "../pages/LoginPage/RegisterPage"
import AdminSongsPage from "../pages/adminPage/adminSongsPage"
import AdminUploadPage from "../pages/adminPage/adminUploadPage"
import LayoutAdmin from "../components/layout/LayoutAdmin"
import AdminManagerPage from "../pages/adminPage/adminManagerPage"
import AlbumPage from "../pages/AlbumDetail/AlbumPage"

export default function MainRoute() {
    return (
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                </Route>
                <Route path="LoginPage" element={<LoginPage />} />
                <Route path="RegisterPage" element={<RegisterPage />} />
                <Route path="/admin" element={< LayoutAdmin/>} >
                    <Route index element={<AdminSongsPage />} />
                    <Route path="upload" element={<AdminUploadPage/>}/>
                    <Route path="manage/:id" element={<AdminManagerPage/>}/>
                </Route>
                <Route path="/" element={<HomePage />} />
                <Route path="/album/:albumId" element={<AlbumPage />} />
            </Routes>
    )
}