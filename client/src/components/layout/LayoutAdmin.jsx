import React, { useState } from "react";
import { Outlet, Link } from "react-router";
import Svg2Logout from "../../pages/HomePage/components/svg2Logout";
import axios from "axios";

const LayoutAdmin = () => {
  const token = localStorage.getItem("MUSIC_ACCESSTOKEN");
  const email = localStorage.getItem("MUSIC_EMAIL");

  const handleLogoutClick = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/users/logout",
        {
          email,
          token,
        },
        { withCredentials: true }
      );
      if (response.data.success) {
        localStorage.removeItem("MUSIC_ACCESSTOKEN");
        localStorage.removeItem("MUSIC_USERNAME");
        localStorage.removeItem("MUSIC_EMAIL");
        window.location.reload();
      }
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Có lỗi xảy ra, vui lòng thử lại sau.");
      }
    }
  };

  return (
    <div className="w-[100vw] h-[100vh] bg-[#121212] flex flex-row">
      <div className="w-[300px] h-[100vh] bg-[#232323] flex flex-col pl-[30px] pt-[150px] gap-[40px] ">
        <Link>
          <div
            className="flex flex-row gap-[17px]  items-center cursor-pointer relative group "
            style={{ width: "fit-content" }}
          >
            <div>
              <svg
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.46875 15.3125C5.17867 15.3125 4.90047 15.1973 4.69535 14.9922C4.49023 14.787 4.375 14.5088 4.375 14.2188V5.47095C4.375 5.18087 4.49023 4.90267 4.69535 4.69755C4.90047 4.49243 5.17867 4.3772 5.46875 4.3772H14.2188C14.5088 4.3772 14.787 4.49243 14.9921 4.69755C15.1973 4.90267 15.3125 5.18087 15.3125 5.47095V14.2188C15.3125 14.5088 15.1973 14.787 14.9921 14.9922C14.787 15.1973 14.5088 15.3125 14.2188 15.3125H5.46875ZM20.7812 15.3125C20.4912 15.3125 20.213 15.1973 20.0079 14.9922C19.8027 14.787 19.6875 14.5088 19.6875 14.2188V5.47095C19.6875 5.18087 19.8027 4.90267 20.0079 4.69755C20.213 4.49243 20.4912 4.3772 20.7812 4.3772H29.5291C29.8191 4.3772 30.0973 4.49243 30.3025 4.69755C30.5076 4.90267 30.6228 5.18087 30.6228 5.47095V14.2188C30.6228 14.5088 30.5076 14.787 30.3025 14.9922C30.0973 15.1973 29.8191 15.3125 29.5291 15.3125H20.7812ZM5.46875 30.625C5.17867 30.625 4.90047 30.5098 4.69535 30.3047C4.49023 30.0995 4.375 29.8213 4.375 29.5313V20.7813C4.375 20.4912 4.49023 20.213 4.69535 20.0079C4.90047 19.8027 5.17867 19.6875 5.46875 19.6875H14.2188C14.5088 19.6875 14.787 19.8027 14.9921 20.0079C15.1973 20.213 15.3125 20.4912 15.3125 20.7813V29.5313C15.3125 29.8213 15.1973 30.0995 14.9921 30.3047C14.787 30.5098 14.5088 30.625 14.2188 30.625H5.46875ZM20.7812 30.625C20.4912 30.625 20.213 30.5098 20.0079 30.3047C19.8027 30.0995 19.6875 29.8213 19.6875 29.5313V20.7813C19.6875 20.4912 19.8027 20.213 20.0079 20.0079C20.213 19.8027 20.4912 19.6875 20.7812 19.6875H29.5291C29.8191 19.6875 30.0973 19.8027 30.3025 20.0079C30.5076 20.213 30.6228 20.4912 30.6228 20.7813V29.5313C30.6228 29.8213 30.5076 30.0995 30.3025 30.3047C30.0973 30.5098 29.8191 30.625 29.5291 30.625H20.7812Z"
                  fill="#B0B0B0"
                />
              </svg>
            </div>
            <div className=" text-[#B0B0B0] font-robotoCondensed text-[24px] font-[550] cursor-pointer ">
              Dashboard
            </div>
            <span className="absolute left-0 right-0 bottom-[-4px] h-[2px] bg-[#B0B0B0] w-0 transition-all duration-300 group-hover:w-full"></span>
          </div>
        </Link>
        <Link to="/admin">
          <div
            className="flex flex-row gap-[17px]  items-center cursor-pointer relative group "
            style={{ width: "fit-content" }}
          >
            <div>
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_50_103)">
                  <path
                    d="M9.95359 23.5715C10.2064 23.58 10.4584 23.5376 10.6945 23.4467C10.9306 23.3558 11.146 23.2184 11.3279 23.0425C11.5098 22.8667 11.6544 22.656 11.7532 22.4231C11.852 22.1902 11.9029 21.9398 11.9029 21.6869C11.9029 21.4339 11.852 21.1835 11.7532 20.9506C11.6544 20.7177 11.5098 20.507 11.3279 20.3312C11.146 20.1553 10.9306 20.0179 10.6945 19.927C10.4584 19.8361 10.2064 19.7937 9.95359 19.8022C9.45346 19.8022 8.97382 20.0009 8.62018 20.3545C8.26654 20.7082 8.06787 21.1878 8.06787 21.6879C8.06787 22.188 8.26654 22.6677 8.62018 23.0213C8.97382 23.375 9.45346 23.5736 9.95359 23.5736V23.5715ZM18.4329 21.2165C18.933 21.2165 19.4126 21.0178 19.7663 20.6642C20.1199 20.3105 20.3186 19.8309 20.3186 19.3308C20.3186 18.8307 20.1199 18.351 19.7663 17.9974C19.4126 17.6437 18.933 17.4451 18.4329 17.4451C17.9327 17.4451 17.4531 17.6437 17.0995 17.9974C16.7458 18.351 16.5472 18.8307 16.5472 19.3308C16.5472 19.8309 16.7458 20.3105 17.0995 20.6642C17.4531 21.0178 17.9327 21.2165 18.4329 21.2165Z"
                    stroke="#B0B0B0"
                    strokeWidth="3.42857"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.8394 21.6857V13.5836L20.3186 11.5864V19.335"
                    stroke="#B0B0B0"
                    strokeWidth="3.42857"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M1.07153 26.25V3.74997C1.07153 3.18165 1.2973 2.6366 1.69916 2.23474C2.10103 1.83288 2.64607 1.60711 3.21439 1.60711H11.1215C11.611 1.59285 12.0907 1.74668 12.4805 2.043C12.8704 2.33931 13.1471 2.76023 13.2644 3.23568L13.9287 5.89282H26.7858C27.3541 5.89282 27.8992 6.11859 28.301 6.52045C28.7029 6.92232 28.9287 7.46736 28.9287 8.03568V26.25C28.9287 26.8183 28.7029 27.3633 28.301 27.7652C27.8992 28.1671 27.3541 28.3928 26.7858 28.3928H3.21439C2.64607 28.3928 2.10103 28.1671 1.69916 27.7652C1.2973 27.3633 1.07153 26.8183 1.07153 26.25Z"
                    stroke="#B0B0B0"
                    strokeWidth="3.42857"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_50_103">
                    <rect width="30" height="30" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className=" text-[#B0B0B0] font-robotoCondensed text-[24px] font-[550] cursor-pointer">
              Songs
            </div>
            <span className="absolute left-0 right-0 bottom-[-4px] h-[2px] bg-[#B0B0B0] w-0 transition-all duration-300 group-hover:w-full"></span>
          </div>
        </Link>
        <Link to="/admin/upload">
          <div
            className="flex flex-row gap-[17px]  items-center cursor-pointer relative group "
            style={{ width: "fit-content" }}
          >
            {" "}
            <div>
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 23.75H6.25C5.58696 23.75 4.95107 23.4866 4.48223 23.0178C4.01339 22.5489 3.75 21.913 3.75 21.25V7.5C3.75 6.83696 4.01339 6.20107 4.48223 5.73223C4.95107 5.26339 5.58696 5 6.25 5H11.25L15 8.75H23.75C24.413 8.75 25.0489 9.01339 25.5178 9.48223C25.9866 9.95107 26.25 10.587 26.25 11.25V15.625M23.75 27.5V20M23.75 20L27.5 23.75M23.75 20L20 23.75"
                  stroke="#B0B0B0"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className=" text-[#B0B0B0] font-robotoCondensed text-[24px] font-[550] cursor-pointer">
              Upload Music
            </div>
            <span className="absolute left-0 right-0 bottom-[-4px] h-[2px] bg-[#B0B0B0] w-0 transition-all duration-300 group-hover:w-full"></span>
          </div>
        </Link>
        <div
          className="flex flex-row gap-[17px]  items-center cursor-pointer relative group "
          style={{ width: "fit-content" }}
        >
          <div>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_141_3"
                style={{ maskType: "luminance" }}
                maskUnits="userSpaceOnUse"
                x="2"
                y="5"
                width="36"
                height="30"
              >
                <path
                  d="M34.9999 6.66675H4.99992C4.55789 6.66675 4.13397 6.84234 3.82141 7.1549C3.50885 7.46746 3.33325 7.89139 3.33325 8.33341V31.6667C3.33325 32.1088 3.50885 32.5327 3.82141 32.8453C4.13397 33.1578 4.55789 33.3334 4.99992 33.3334H34.9999C35.4419 33.3334 35.8659 33.1578 36.1784 32.8453C36.491 32.5327 36.6666 32.1088 36.6666 31.6667V8.33341C36.6666 7.89139 36.491 7.46746 36.1784 7.1549C35.8659 6.84234 35.4419 6.66675 34.9999 6.66675Z"
                  fill="white"
                  stroke="white"
                  strokeWidth="2"
                />
                <path
                  d="M19.9999 14.1667V25.8334M26.6666 20.0001V25.8334M13.3333 18.3334V25.8334"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </mask>
              <g mask="url(#mask0_141_3)">
                <path d="M0 0H40V40H0V0Z" fill="#B0B0B0" />
              </g>
            </svg>
          </div>
          <div className=" text-[#B0B0B0] font-robotoCondensed text-[24px] font-[550] cursor-pointer">
            Xem BXH
          </div>
          <span className="absolute left-0 right-0 bottom-[-4px] h-[2px] bg-[#B0B0B0] w-0 transition-all duration-300 group-hover:w-full"></span>
        </div>
        <div className="w-[100%] ">
          <div className=" w-[100%] mt-[100px]">
            <button
              className="flex flex-row justify-center items-center gap-[4px] bg-[#C54B6C] w-[200px] h-[45px] rounded-tl-3xl rounded-bl-3xl rounded-tr-3xl rounded-br-3xl"
              onClick={handleLogoutClick}
            >
              Log out
              <span>
                <Svg2Logout />
              </span>
            </button>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default LayoutAdmin;
