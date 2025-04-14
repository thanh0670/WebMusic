import React, { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import axios from 'axios'

const HomePage = () => {
    const { email, setUsername } = useContext(UserContext)
    const token = localStorage.getItem("MUSIC_ACCESSTOKEN");

    const handleLogoutClick = async () => {

        try {
            const response = await axios.post("http://localhost:8000/api/users/logout", {
                email,
                token
            }, { withCredentials: true })
            if (response.data.success) {
                localStorage.removeItem("MUSIC_ACCESSTOKEN")
                localStorage.removeItem("MUSIC_USERNAME")
                localStorage.removeItem("MUSIC_EMAIL")
                setUsername("")
            }
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert("Có lỗi xảy ra, vui lòng thử lại sau.");
            }
        }

    }
    return (
        <div className=' w-[100vw] h-[100vh] flex justify-center items-center'>
            <button className='w-[360px] h-[50px] flex justify-center items-center text-[24px] bg-[#00DB0B] rounded-tl-3xl rounded-bl-3xl rounded-tr-3xl rounded-br-3xl'
                onClick={handleLogoutClick}>
                logout
            </button>
        </div>

    );
}

export default HomePage;
