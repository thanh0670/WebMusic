import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, Link } from "react-router";
import { getAlbumByUser } from "../../redux/features/API/album/getAlbumByUser";

const LayoutAudio = () => {
  const Albums = useSelector((state) => state.albums.albums);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAlbumByUser());
  }, []);

  useEffect(() => {
    console.log(Albums, "new");
  }, [Albums]);

  return (
    <div className="w-[100vw] h-[100vh] flex flex-row bg-[#FFE3E3]">
      <div className="w-[300px] h-[100vh] bg-[#232323] flex flex-col pl-[30px] pt-[150px] gap-[40px] ">
        <Link>
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
                <path
                  d="M6.66663 35V15L20 5L33.3333 15V35H23.3333V23.3333H16.6666V35H6.66663Z"
                  fill="#B0B0B0"
                />
              </svg>
            </div>
            <div className=" text-[#B0B0B0] font-robotoCondensed text-[24px] font-[550] cursor-pointer ">
              Home
            </div>
            <span className="absolute left-0 right-0 bottom-[-4px] h-[2px] bg-[#B0B0B0] w-0 transition-all duration-300 group-hover:w-full"></span>
          </div>
        </Link>
        <Link>
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
                <path
                  d="M35 35.0001L27.7616 27.7618M27.7616 27.7618C28.9998 26.5236 29.9819 25.0537 30.652 23.436C31.3221 21.8183 31.667 20.0844 31.667 18.3334C31.667 16.5824 31.3221 14.8486 30.652 13.2309C29.9819 11.6131 28.9998 10.1432 27.7616 8.9051C26.5235 7.66695 25.0536 6.6848 23.4359 6.01472C21.8182 5.34464 20.0843 4.99976 18.3333 4.99976C16.5823 4.99976 14.8484 5.34464 13.2307 6.01472C11.613 6.6848 10.1431 7.66695 8.90498 8.9051C6.40443 11.4056 4.99963 14.7971 4.99963 18.3334C4.99963 21.8697 6.40443 25.2612 8.90498 27.7618C11.4055 30.2623 14.797 31.6671 18.3333 31.6671C21.8696 31.6671 25.2611 30.2623 27.7616 27.7618Z"
                  stroke="#B0B0B0"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className=" text-[#B0B0B0] font-robotoCondensed text-[24px] font-[550] cursor-pointer">
              Search
            </div>
            <span className="absolute left-0 right-0 bottom-[-4px] h-[2px] bg-[#B0B0B0] w-0 transition-all duration-300 group-hover:w-full"></span>
          </div>
        </Link>
        <Link>
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
                <path
                  d="M11.6666 5H15V35H11.6666V5ZM6.66663 5H9.99996V35H6.66663V5ZM16.6666 5H20V35H16.6666V5ZM31.77 34.6533L21.3983 6.50333L24.5266 5.35L34.8983 33.5L31.77 34.6533Z"
                  fill="#B0B0B0"
                />
              </svg>
            </div>
            <div className=" text-[#B0B0B0] font-robotoCondensed text-[24px] font-[550] cursor-pointer">
              Your library
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
            Top BXH
          </div>
          <span className="absolute left-0 right-0 bottom-[-4px] h-[2px] bg-[#B0B0B0] w-0 transition-all duration-300 group-hover:w-full"></span>
        </div>
        <div></div>
      </div>
      <div className="flex flex-col">
        <div className="w-[100%] flex flex-row gap-[850px] pt-[25px] pl-[40px] pb-[30px]">
          <div className="flex flex-row gap-[15px]">
            <div className=" w-[50px] h-[50px] rounded-[100%] bg-[#C58598] flex justify-center items-center cursor-pointer">
              <svg
                width="20"
                height="40"
                viewBox="0 0 20 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.07169 18.8151L12.5 9.38676L14.8567 11.7434L6.60669 19.9934L14.8567 28.2434L12.5 30.6001L3.07169 21.1718C2.75924 20.8592 2.58371 20.4354 2.58371 19.9934C2.58371 19.5515 2.75924 19.1276 3.07169 18.8151Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className=" w-[50px] h-[50px] rounded-[100%] bg-[#C58598] flex justify-center items-center cursor-pointer">
              <svg
                width="20"
                height="40"
                viewBox="0 0 20 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.9283 21.1849L7.49998 30.6132L5.14331 28.2566L13.3933 20.0066L5.14331 11.7566L7.49998 9.3999L16.9283 18.8282C17.2408 19.1408 17.4163 19.5646 17.4163 20.0066C17.4163 20.4485 17.2408 20.8724 16.9283 21.1849Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
          <div className=" w-[200px] h-[50px] bg-[#C54B6C] rounded-tl-3xl rounded-bl-3xl rounded-tr-3xl rounded-br-3xl flex flex-row justify-between items-center pl-[6px] pr-[16px] ">
            <div></div>
            <div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.31501 16.3075C9.39146 16.4185 9.49375 16.5093 9.61308 16.572C9.73241 16.6347 9.8652 16.6675 10 16.6675C10.1348 16.6675 10.2676 16.6347 10.3869 16.572C10.5063 16.5093 10.6086 16.4185 10.685 16.3075L18.185 5.47413C18.2718 5.34917 18.3227 5.20282 18.3322 5.05096C18.3417 4.89911 18.3094 4.74756 18.2387 4.61279C18.1681 4.47801 18.0619 4.36517 17.9317 4.28651C17.8015 4.20785 17.6522 4.16639 17.5 4.16663H2.50001C2.34821 4.16725 2.19946 4.20925 2.06974 4.2881C1.94003 4.36694 1.83426 4.47966 1.76382 4.61412C1.69337 4.74858 1.66091 4.89971 1.66993 5.05124C1.67895 5.20277 1.72911 5.34897 1.81501 5.47413L9.31501 16.3075Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutAudio;
