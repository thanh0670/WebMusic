import React, { useContext } from 'react';
import Input from './components/Input';
import { Link, useNavigate } from 'react-router';
import axios from 'axios'
import { UserContext } from '../../contexts/UserContext';
import { useDispatch } from "react-redux";
import { dataAdmin } from '../../redux/features/counter/valueAdminSlice';
import { current } from '../../redux/features/counter/currentSlice';




const LoginPage = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const { setUsername, setEmailContext } = useContext(UserContext);
    const dispatch = useDispatch();
    


    const navigate = useNavigate();

    const getEmail = (e) => {
        setEmail(e);
    };

    const getPassword = (e) => {
        setPassword(e);
    };

    const handleLoginClick = async () => {
        if (!email || !password) {
            alert("Nhập đầy đủ thông tin")
        } else {
            try {
                const response = await axios.post("http://localhost:8000/api/users/login", {
                    email,
                    password
                }, { withCredentials: true })
                if (response.data.success) {
                    localStorage.setItem('MUSIC_ACCESSTOKEN', response.data.accessToken);
                    localStorage.setItem('MUSIC_USERNAME', response.data.username);
                    localStorage.setItem('MUSIC_EMAIL', email);
                    console.log(response.data);
                    console.log(response.data.role);
                    
                    if(response.data.role ==="user"){
                        dispatch( current())    
                        navigate("/");
                    }
                    else if(response.data.role ==="admin"){
                        dispatch( current())    
                        dispatch(dataAdmin());
                        navigate("/admin/songs")
                    }
                    setUsername(response.data.username);
                    setEmailContext(email);
                    console.log();

                } else {
                    alert("Sai toàn khoản hoặc mật khẩu")
                }
                console.log(response);
            } catch (error) {
                if (error.response) {
                    alert(error.response.data.message);
                } else {
                    alert("Có lỗi xảy ra, vui lòng thử lại sau.");
                }
            }

        }
    }
    return (
        <div className='w-[100vw] h-[100vh] bg-[#121212] flex justify-center items-center'>
            <div className=' w-[500px] h-[100%] flex flex-col justify-center items-center gap-[50px]'>
                <svg width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M37.0642 2.03886C28.632 2.02224 20.468 5.07875 14.0273 10.6636C3.19978 19.9683 0.871485 35.4695 2.44261 48.5621L4.88448 69.0168C4.99317 69.9 5.43891 70.7028 6.12386 71.2491C6.8088 71.7954 7.67698 72.0405 8.53783 71.9306L18.1349 70.7068C18.5603 70.6539 18.9713 70.5154 19.3444 70.2992C19.7175 70.083 20.0453 69.7933 20.3091 69.4468C20.5729 69.1004 20.7674 68.7038 20.8816 68.28C20.9958 67.8562 21.0273 67.4135 20.9743 66.9772L18.5135 45.8426C18.4535 45.4182 18.312 45.0102 18.0973 44.6423C17.8826 44.2743 17.5989 43.9537 17.2627 43.699C16.9264 43.4443 16.5443 43.2605 16.1385 43.1583C15.7326 43.0561 15.311 43.0375 14.898 43.1036L11.3961 43.6087C11.1337 42.0559 10.9944 40.4837 10.9797 38.9078C10.9797 31.7931 13.7339 24.9697 18.6363 19.9389C23.5387 14.908 30.1879 12.0817 37.121 12.0817C44.0541 12.0817 50.7032 14.908 55.6056 19.9389C60.5081 24.9697 63.2622 31.7931 63.2622 38.9078C63.2568 40.452 63.1174 41.9927 62.8458 43.5116L59.4007 43.0842C58.9755 43.0299 58.544 43.0622 58.1311 43.1794C57.7181 43.2965 57.3317 43.4962 56.994 43.7669C56.6564 44.0375 56.3741 44.374 56.1634 44.7568C55.9528 45.1397 55.8178 45.5615 55.7663 45.998L53.2298 67.0354C53.1216 67.9048 53.3508 68.783 53.8677 69.4807C54.3847 70.1784 55.1481 70.6396 55.9934 70.7651L65.5716 71.9694C65.9997 72.0293 66.4351 72.0011 66.8525 71.8865C67.2698 71.7719 67.6608 71.5733 68.0026 71.3021C68.3444 71.0309 68.6302 70.6926 68.8433 70.3069C69.0564 69.9212 69.1926 69.4959 69.2439 69.0556L71.5343 48.601C73.1812 35.5278 70.7204 19.9489 59.9496 10.7219C53.5449 5.08821 45.3862 1.99417 36.9506 2.00001L37.0642 2.03886Z" stroke="#00DB0B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M36.5942 38.7067C36.4997 38.6713 36.398 38.6593 36.2978 38.6718C36.1976 38.6843 36.102 38.7208 36.019 38.7783C35.9361 38.8358 35.8683 38.9125 35.8214 39.0019C35.7746 39.0913 35.7501 39.1907 35.75 39.2917V49.3975C35.1725 48.9352 34.4577 48.678 33.718 48.6667C32.9783 48.6553 32.2559 48.8903 31.6644 49.3346C31.073 49.779 30.6462 50.4075 30.4512 51.1211C30.2562 51.8347 30.3042 52.5929 30.5875 53.2762C30.8708 53.9596 31.3734 54.5293 32.0161 54.8956C32.6588 55.2619 33.4051 55.404 34.1375 55.2995C34.8698 55.195 35.5466 54.8499 36.0613 54.3185C36.5759 53.787 36.8991 53.0995 36.98 52.3642C36.9928 52.3132 36.9995 52.2609 37 52.2083V44.36L42.8225 46.5433C42.917 46.5787 43.0187 46.5907 43.1189 46.5782C43.2191 46.5658 43.3147 46.5292 43.3977 46.4717C43.4806 46.4142 43.5484 46.3375 43.5953 46.2481C43.6421 46.1587 43.6666 46.0593 43.6667 45.9583V43.2358C43.6668 42.6844 43.4986 42.146 43.1846 41.6927C42.8705 41.2394 42.4255 40.8928 41.9092 40.6992L36.5942 38.7067Z" fill="#00DB0B" />
                </svg>
                <p className='flex flex-col justify-center items-center text-[48px] font-leckerli text-[#4CAF50] mt-[-15px]'>Login in to Soundify!</p>
                <div className='w-[100%] flex flex-col gap-[20px] justify-center items-center'>
                    <Input placeholder="Enter your Email" onGetdData={getEmail} type="email" />
                    <Input placeholder="Enter your Password" onGetdData={getPassword} type="password" />
                </div>
                <div className='flex flex-col justify-center items-center gap-[8px]'>
                    <button className=' w-[360px] h-[50px] flex justify-center items-center text-[24px] bg-[#00DB0B] rounded-tl-3xl rounded-bl-3xl rounded-tr-3xl rounded-br-3xl'
                        onClick={handleLoginClick}>Login</button>
                    <p className=' text-[16px] text-[#FFFFFF]'>Already haven't an account?
                        <span className='text-[red]'>
                            <Link to="/RegisterPage">sign up here?</Link>
                        </span></p>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
