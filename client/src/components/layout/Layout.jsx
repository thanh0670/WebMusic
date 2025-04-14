import React, { useContext, useEffect } from 'react';
import { Outlet, Link } from "react-router"
import { UserContext } from '../../contexts/UserContext';

const Layout = () => {
    const { username } = useContext(UserContext);
    console.log(username);


    return (
        <div className=' w-[100vw] h-[100vh] bg-[#121212] flex flex-col'>
            <div className=' w-[100%] h-[100px] pl-[25px] border border-solid border-orange-50 flex flex-row justify-between items-center'>
                <div className=' flex flex-row justify-center items-center gap-[30px]'>
                    <div className=' hover:cursor-pointer'>
                        <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M27.0458 2.02776C21.0229 2.01589 15.1915 4.19911 10.5909 8.18831C2.85699 14.8345 1.19392 25.9068 2.31615 35.2586L4.06034 49.8691C4.13798 50.5 4.45637 51.0735 4.94561 51.4637C5.43486 51.8539 6.05498 52.0289 6.66988 51.9504L13.525 51.0763C13.8288 51.0385 14.1224 50.9396 14.3889 50.7851C14.6554 50.6307 14.8895 50.4238 15.0779 50.1763C15.2664 49.9288 15.4053 49.6456 15.4869 49.3429C15.5684 49.0402 15.5909 48.7239 15.5531 48.4123L13.7954 33.3161C13.7525 33.013 13.6514 32.7216 13.498 32.4588C13.3447 32.1959 13.1421 31.9669 12.9019 31.785C12.6617 31.6031 12.3888 31.4718 12.0989 31.3988C11.809 31.3258 11.5078 31.3125 11.2129 31.3597L8.71153 31.7205C8.52405 30.6113 8.42457 29.4884 8.41407 28.3627C8.41407 23.2808 10.3813 18.407 13.8831 14.8135C17.3848 11.22 22.1342 9.20119 27.0864 9.20119C32.0386 9.20119 36.788 11.22 40.2897 14.8135C43.7915 18.407 45.7587 23.2808 45.7587 28.3627C45.7548 29.4657 45.6553 30.5662 45.4613 31.6511L43.0005 31.3459C42.6968 31.3071 42.3886 31.3302 42.0936 31.4138C41.7986 31.4975 41.5226 31.6401 41.2815 31.8335C41.0403 32.0268 40.8387 32.2671 40.6882 32.5406C40.5377 32.8141 40.4413 33.1153 40.4045 33.4271L38.5927 48.4539C38.5155 49.0749 38.6791 49.7022 39.0484 50.2005C39.4177 50.6988 39.9629 51.0283 40.5667 51.1179L47.4083 51.9782C47.7141 52.0209 48.0251 52.0008 48.3232 51.9189C48.6213 51.8371 48.9006 51.6952 49.1447 51.5015C49.3889 51.3078 49.593 51.0661 49.7452 50.7906C49.8974 50.5152 49.9947 50.2113 50.0313 49.8969L51.6674 35.2864C52.8437 25.9484 51.086 14.8206 43.3926 8.22993C38.8178 4.20587 32.9901 1.99584 26.9647 2.00001L27.0458 2.02776Z" stroke="#00DB0B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M27.0927 27.0207C27.0064 26.9991 26.9151 26.9943 26.8261 27.0067C26.7371 27.019 26.6529 27.0481 26.5803 27.0917C26.5076 27.1353 26.4486 27.1921 26.408 27.2576C26.3673 27.3231 26.3461 27.3955 26.3462 27.4688V36.7546C25.7161 36.2634 24.8948 35.9663 24.0239 35.9145C23.1531 35.8627 22.2873 36.0594 21.5758 36.4707C20.8644 36.882 20.3519 37.4822 20.1268 38.1676C19.9017 38.8531 19.978 39.5809 20.3426 40.2255C20.7073 40.8701 21.3373 41.3912 22.1242 41.6988C22.911 42.0063 23.8053 42.0812 24.6528 41.9104C25.5003 41.7396 26.2479 41.3339 26.7666 40.7632C27.2853 40.1925 27.5426 39.4926 27.4942 38.7842L27.5 38.7186V31.8534L34.2535 33.5409C34.3397 33.5624 34.4309 33.5673 34.5198 33.555C34.6087 33.5427 34.6928 33.5137 34.7654 33.4702C34.838 33.4267 34.8971 33.37 34.9378 33.3046C34.9785 33.2392 34.9998 33.167 35 33.0937V30.7285C35.0001 30.2271 34.8024 29.739 34.4358 29.3357C34.0693 28.9324 33.5532 28.6353 32.9635 28.4879L27.0927 27.0207Z" fill="#00DB0B" />
                        </svg>
                    </div>
                    <div className=' w-[50px] h-[50px] flex justify-center items-center bg-[#212121] rounded-[100%] hover:cursor-pointer'>
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 26.25V11.25L15 3.75L25 11.25V26.25H17.5V17.5H12.5V26.25H5Z" fill="white" />
                        </svg>
                    </div>

                </div>
                <div className=' w-[550px] h-[40px] text-[24px] font-leckerli text-[white] flex justify-center items-center rounded-tl-3xl rounded-bl-3xl rounded-tr-3xl rounded-br-3xl bg-[#212121]'>Hello! What do you want to hear today?</div>
                {username ? (<div className=' flex flex-row gap-[25px]'>
                    <p className=' text-[16px] text-[white] flex justify-center items-center'>{username}</p>
                    <div className=' w-[60px] h-[60px] bg-[red] rounded-[100%^]'></div>
                </div>) : (<div className='flex flex-row gap-20px'>
                    <Link to="/RegisterPage" >
                        <button className='w-[100px] h-[40px] text-[16px] text-[white] flex justify-center items-center rounded-tl-3xl rounded-bl-3xl rounded-tr-3xl rounded-br-3xl bg-[#212121]'>Sign up</button>
                    </Link>
                    <Link to="/LoginPage">
                        <button className='w-[100px] h-[40px] text-[16px] text-[black] flex justify-center items-center rounded-tl-3xl rounded-bl-3xl rounded-tr-3xl rounded-br-3xl bg-[white]'>Log in</button>
                    </Link>
                </div>)}
            </div>
            <Outlet />
        </div>
    );
}

export default Layout;
