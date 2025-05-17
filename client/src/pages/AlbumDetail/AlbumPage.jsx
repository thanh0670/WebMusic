import React from "react";
import { useParams } from "react-router-dom";
import backgroundImage8 from "../../asset/image/tonghophinh.png";
import backgroundImage from "../../asset/image/hieuthu2.png";
import backgroundImage9 from "../../asset/image/catdoinoisau.png";
import backgroundImage10 from "../../asset/image/nangtho.png";
import backgroundImage2 from "../../asset/image/vailandondua.png";

const AlbumPage = () => {
  const { albumId } = useParams();
  
  const songs = [
    {
      id: 1,
      title: "Nước Mắt Cá Sấu",
      artist: "HIEUTHUHAI",
      album: "ALBUM 1",
      duration: "3:26",
      image: backgroundImage,
    },
    {
      id: 2,
      title: "Cắt Đôi Nỗi Sầu",
      artist: "TANGBUTTAN",
      album: "ALBUM 1",
      duration: "3:02",
      image: backgroundImage9,
    },
    {
      id: 3,
      title: "Nàng Thơ",
      artist: "HOANGDUNG",
      album: "ALBUM 1",
      duration: "4:14",
      image: backgroundImage10,
    },
    {
      id: 4,
      title: "Vài Lần Đón Đưa",
      artist: "SOOBIN",
      album: "ALBUM 1",
      duration: "2:50",
      image: backgroundImage2,
    },
  ];

  return (
    <div className="wrapper-album flex flex-col w-[1690px] h-[900px]">
      <div className="container-album-playlist flex flex-row w-[1690px] h-[710px]">
        <div className="container-nav flex flex-col w-[300px] h-[710px] bg-[#232323]">
          <div className="nav-home flex flex-row w-[220px] h-10 mt-[150px] ml-5">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.66666 35V15L20 5L33.3333 15V35H23.3333V23.3333H16.6667V35H6.66666Z"
                fill="#B0B0B0"
              />
            </svg>
            <p className="text-2xl text-[#B0B0B0] ml-5 mt-1 font-['Roboto_Condensed']">
              Home
            </p>
          </div>
          <div className="nav-search flex flex-row w-[220px] h-10 mt-5 ml-5">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M35 35.0001L27.7617 27.7618M27.7617 27.7618C28.9998 26.5236 29.982 25.0537 30.6521 23.436C31.3221 21.8183 31.667 20.0844 31.667 18.3334C31.667 16.5824 31.3221 14.8486 30.6521 13.2309C29.982 11.6131 28.9998 10.1432 27.7617 8.9051C26.5235 7.66695 25.0536 6.6848 23.4359 6.01472C21.8182 5.34464 20.0843 4.99976 18.3333 4.99976C16.5823 4.99976 14.8485 5.34464 13.2308 6.01472C11.613 6.6848 10.1432 7.66695 8.90501 8.9051C6.40446 11.4056 4.99966 14.7971 4.99966 18.3334C4.99966 21.8697 6.40446 25.2612 8.90501 27.7618C11.4056 30.2623 14.797 31.6671 18.3333 31.6671C21.8697 31.6671 25.2611 30.2623 27.7617 27.7618Z"
                stroke="#B0B0B0"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className="text-2xl text-[#B0B0B0] ml-5 mt-1 font-['Roboto_Condensed']">
              Search
            </p>
          </div>
          <div className="nav-library flex flex-row w-[220px] h-10 mt-5 ml-5">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.6667 5H15V35H11.6667V5ZM6.66666 5H9.99999V35H6.66666V5ZM16.6667 5H20V35H16.6667V5ZM31.77 34.6533L21.3983 6.50333L24.5267 5.35L34.8983 33.5L31.77 34.6533Z"
                fill="#B0B0B0"
              />
            </svg>
            <p className="text-2xl text-[#B0B0B0] ml-5 mt-1 font-['Roboto_Condensed']">
              Your library
            </p>
          </div>
          <div className="nav-topbxh flex flex-row w-[220px] h-10 mt-5 ml-5">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_134_2"
                style={{ maskType: "luminance" }}
                maskUnits="userSpaceOnUse"
                x="2"
                y="5"
                width="36"
                height="30"
              >
                <path
                  d="M35 6.66675H5.00001C4.55798 6.66675 4.13406 6.84234 3.8215 7.1549C3.50894 7.46746 3.33334 7.89139 3.33334 8.33341V31.6667C3.33334 32.1088 3.50894 32.5327 3.8215 32.8453C4.13406 33.1578 4.55798 33.3334 5.00001 33.3334H35C35.442 33.3334 35.866 33.1578 36.1785 32.8453C36.4911 32.5327 36.6667 32.1088 36.6667 31.6667V8.33341C36.6667 7.89139 36.4911 7.46746 36.1785 7.1549C35.866 6.84234 35.442 6.66675 35 6.66675Z"
                  fill="white"
                  stroke="white"
                  strokeWidth="2"
                />
                <path
                  d="M20 14.1667V25.8334M26.6667 20.0001V25.8334M13.3333 18.3334V25.8334"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </mask>
              <g mask="url(#mask0_134_2)">
                <path d="M0 0H40V40H0V0Z" fill="#B0B0B0" />
              </g>
            </svg>
            <p className="text-2xl text-[#B0B0B0] ml-5 mt-1 font-['Roboto_Condensed']">
              Top BXH
            </p>
          </div>
        </div>
        <div className="container-playlist flex flex-col w-[1390px] h-[710px]">
          <div className="playlist-album flex flex-row w-[1390px] h-[310px] bg-[#121212]">
            <div className="playlist-album-detail flex flex-row w-[1160px] h-[310px]">
              <div className="w-[300px] h-[310px]">
                <div
                  className="w-[200px] h-[200px] bg-cover mt-[75px] ml-[50px]"
                  style={{ backgroundImage: `url(${backgroundImage8})` }}
                ></div>
              </div>
              <div className="flex flex-col w-[860px] h-[310px]">
                <p className="text-2xl font-['Roboto_Condensed'] font-medium text-[#B0B0B0] mt-[120px] ml-[50px]">
                  PLAYLIST
                </p>
                <p className="text-[90px] font-['Roboto_Condensed'] font-medium ml-[50px] text-white">
                  {albumId || "Not specified"}
                </p>
                <p className="text-sm font-['Roboto_Condensed'] font-medium ml-[50px] text-[#B0B0B0]">
                  9 song
                </p>
              </div>
            </div>
            <div className="playlist-album-detail-user-logout flex flex-col w-[230px] h-[400px]">
              <div></div>
              <button className="w-[150px] h-[30px] bg-[#D9D9D9] text-black font-['Roboto_Condensed'] font-medium text-xl rounded-full mt-[50px] ml-10">
                Logout
              </button>
            </div>
          </div>
          <div className="playlist-music w-[1390px] h-[400px] bg-[#212121]">
            <div className="bg-[#121212] text-white font-['Arial',_sans-serif] w-full box-border">
              <div className="flex justify-start">
                <button className="bg-[#1DB954] border-none rounded-full w-[60px] h-[60px] flex justify-center items-center cursor-pointer">
                  <div className="w-0 h-0 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-l-[20px] border-l-black ml-[5px]"></div>
                </button>
              </div>

              <div className="grid grid-cols-[40px_50px_1fr_1fr_80px] items-center px-[10px] text-[#b3b3b3] font-['Arial',_sans-serif] text-sm font-medium">
                <div className="col-start-3 col-end-4">TITLE</div>
                <div className="col-start-4 col-end-5">ALBUM</div>
                <div className="col-start-5 col-end-6 flex justify-end">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    className="opacity-70"
                  >
                    <circle
                      cx="8"
                      cy="8"
                      r="7"
                      stroke="white"
                      strokeWidth="1"
                      fill="none"
                    />
                    <line
                      x1="8"
                      y1="8"
                      x2="8"
                      y2="4"
                      stroke="white"
                      strokeWidth="1"
                    />
                    <line
                      x1="8"
                      y1="8"
                      x2="10"
                      y2="10"
                      stroke="white"
                      strokeWidth="1"
                    />
                  </svg>
                </div>
              </div>

              <div className="h-[1px] bg-[#282828] my-[10px]"></div>

              <div className="flex flex-col gap-3">
                {songs.map((song) => (
                  <div
                    key={song.id}
                    className="grid grid-cols-[30px_40px_1fr_1fr_80px] items-center mx-[10px] my-2 rounded"
                  >
                    <div className="text-[#b3b3b3] text-base text-right pr-[15px]">
                      {song.id}
                    </div>
                    <div className="w-10 h-10">
                      <img
                        src={song.image}
                        alt={song.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col pl-[10px]">
                      <div className="text-base font-normal">{song.title}</div>
                      <div className="text-sm text-[#b3b3b3] mt-1">
                        {song.artist}
                      </div>
                    </div>
                    <div className="text-sm text-[#b3b3b3]">{song.album}</div>
                    <div className="text-sm text-[#b3b3b3] text-right">
                      {song.duration}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-play-music flex flex-row w-[1690px] h-[120px] bg-[#303030]">
        <div className="flex flex-row w-[400px] h-[120px]">
          <div
            className="w-20 h-20 bg-[#333] rounded mt-3 ml-[22px] bg-cover"
            style={{ backgroundImage: `url(${backgroundImage2})` }}
          ></div>
          <div className="flex flex-col w-40 h-[120px] ml-[14px] mt-5">
            <div>
              <p className="text-white text-xl font-['Roboto_Condensed'] font-medium">
                Vài Lần Đón Đưa
              </p>
            </div>
            <div>
              <p className="text-[#B0B0B0] text-sm font-['Roboto_Condensed'] font-medium">
                SOOBIN
              </p>
            </div>
          </div>
          <div className="mt-[18px] ml-[50px]">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.06667 20.4168C6.40768 19.7622 5.88557 18.9829 5.53075 18.1245C5.17594 17.2661 4.99551 16.3456 5 15.4168C5 13.5382 5.74628 11.7365 7.07466 10.4081C8.40304 9.07972 10.2047 8.33344 12.0833 8.33344C14.7167 8.33344 17.0167 9.76678 18.2333 11.9001H20.1C20.7185 10.8152 21.6135 9.91359 22.6938 9.28707C23.7741 8.66055 25.0012 8.33151 26.25 8.33344C28.1286 8.33344 29.9303 9.07972 31.2587 10.4081C32.5871 11.7365 33.3333 13.5382 33.3333 15.4168C33.3333 17.3668 32.5 19.1668 31.2667 20.4168L19.1667 32.5001L7.06667 20.4168ZM32.4333 21.6001C34.0167 20.0001 35 17.8334 35 15.4168C35 13.0961 34.0781 10.8705 32.4372 9.22959C30.7962 7.58865 28.5706 6.66678 26.25 6.66678C23.3333 6.66678 20.75 8.08345 19.1667 10.2834C18.3585 9.16094 17.2943 8.24731 16.0625 7.61832C14.8306 6.98934 13.4665 6.66314 12.0833 6.66678C9.76269 6.66678 7.53709 7.58865 5.89615 9.22959C4.25521 10.8705 3.33333 13.0961 3.33333 15.4168C3.33333 17.8334 4.31667 20.0001 5.9 21.6001L19.1667 34.8668L32.4333 21.6001Z"
                fill="#B0B0B0"
              />
            </svg>
          </div>
        </div>
        <div className="flex flex-col w-[950px] h-[120px]">
          <div className="flex flex-row w-[950px] h-[60px] ml-[200px] mt-[15px]">
            <div>
              <svg
                width="35"
                height="35"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 11.6667H7.96667C11.5533 11.6667 13.3467 11.6667 14.8 12.4267C15.4205 12.7523 15.9857 13.1735 16.475 13.6751C17.6217 14.8467 18.1367 16.5651 19.1667 20.0001C20.1967 23.4351 20.7133 25.1534 21.8583 26.3251C22.3483 26.8267 22.9133 27.2484 23.535 27.5734C24.9867 28.3334 26.78 28.3334 30.3683 28.3334H35M35 28.3334L30 23.3334M35 28.3334L30 33.3334"
                  stroke="#B0B0B0"
                  stroke-width="2"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M35.59 11.0767L30.59 6.07666L29.41 7.25666L32.9883 10.8333H30.3267C28.5683 10.8333 27.1933 10.8333 26.0767 10.9317C24.94 11.0317 24.0083 11.2383 23.1483 11.6883C22.4101 12.075 21.7415 12.5819 21.17 13.1883C21.38 13.6061 21.5683 14.025 21.735 14.445L21.92 14.93C22.075 14.6884 22.2537 14.4629 22.4533 14.2567C22.8818 13.8179 23.3768 13.4495 23.92 13.165C24.5133 12.855 25.2033 12.6817 26.2233 12.5917C27.2567 12.5 28.56 12.5 30.3667 12.5H32.9883L29.41 16.0767L30.59 17.255L35.59 12.255L36.1783 11.6667L35.59 11.0767ZM17.1633 26.81C16.8769 26.2464 16.6264 25.6652 16.4133 25.07C16.2583 25.3115 16.0796 25.5371 15.88 25.7433C15.4515 26.182 14.9566 26.5505 14.4133 26.835C13.82 27.145 13.13 27.3183 12.11 27.4083C11.0767 27.5 9.775 27.5 7.96667 27.5H5V29.1667H8.00667C9.765 29.1667 11.14 29.1667 12.2567 29.0683C13.3933 28.9683 14.325 28.7617 15.185 28.3117C15.9232 27.925 16.5918 27.4164 17.1633 26.81Z"
                  fill="#B0B0B0"
                />
              </svg>
            </div>
            <div className="flex flex-row ml-[120px]">
              <div>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M28.75 32.7734L15.9767 20.0001L28.75 7.22677L28.75 32.7734ZM10.8333 31.6668L10.8333 8.33344H14.1667L14.1667 31.6668L10.8333 31.6668Z"
                    fill="#B0B0B0"
                  />
                </svg>
              </div>
              <div className="ml-5">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25 4.16675C20.8796 4.16675 16.8516 5.3886 13.4256 7.6778C9.9996 9.96699 7.32933 13.2207 5.75251 17.0275C4.17568 20.8343 3.76311 25.0232 4.56697 29.0645C5.37083 33.1057 7.35501 36.8179 10.2686 39.7315C13.1822 42.6451 16.8943 44.6292 20.9356 45.4331C24.9769 46.237 29.1658 45.8244 32.9726 44.2476C36.7794 42.6707 40.0331 40.0005 42.3223 36.5745C44.6115 33.1484 45.8333 29.1205 45.8333 25.0001C45.8333 22.2642 45.2945 19.5551 44.2475 17.0275C43.2005 14.4999 41.6659 12.2032 39.7314 10.2687C37.7968 8.33414 35.5002 6.79956 32.9726 5.75259C30.445 4.70562 27.7359 4.16675 25 4.16675ZM20.8333 34.3751V15.6251L33.3333 25.0001L20.8333 34.3751Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="ml-5">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.25 7.22656L24.0233 19.9999L11.25 32.7732V7.22656ZM29.1667 8.33323V31.6666H25.8333V8.33323H29.1667Z"
                    fill="#B0B0B0"
                  />
                </svg>
              </div>
            </div>
            <div className="ml-[100px]">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.0625 20.0001C4.06581 17.1003 5.21921 14.3202 7.26967 12.2697C9.32014 10.2193 12.1002 9.06586 15 9.06255H32.7359L30.5875 6.91255C30.4219 6.73483 30.3317 6.49978 30.336 6.2569C30.3403 6.01402 30.4387 5.78229 30.6105 5.61052C30.7822 5.43876 31.014 5.34037 31.2568 5.33608C31.4997 5.3318 31.7348 5.42195 31.9125 5.58755L35.6625 9.33755C35.8381 9.51333 35.9367 9.75161 35.9367 10.0001C35.9367 10.2485 35.8381 10.4868 35.6625 10.6626L31.9125 14.4126C31.7348 14.5782 31.4997 14.6683 31.2568 14.664C31.014 14.6597 30.7822 14.5613 30.6105 14.3896C30.4387 14.2178 30.3403 13.9861 30.336 13.7432C30.3317 13.5003 30.4219 13.2653 30.5875 13.0876L32.7359 10.9376H15C12.5974 10.9404 10.294 11.8962 8.59504 13.5951C6.89612 15.294 5.94039 17.5974 5.9375 20.0001C5.9375 20.2487 5.83873 20.4871 5.66291 20.663C5.4871 20.8388 5.24864 20.9376 5 20.9376C4.75136 20.9376 4.5129 20.8388 4.33709 20.663C4.16127 20.4871 4.0625 20.2487 4.0625 20.0001ZM35 19.0626C34.7514 19.0626 34.5129 19.1613 34.3371 19.3371C34.1613 19.513 34.0625 19.7514 34.0625 20.0001C34.0596 22.4027 33.1039 24.7061 31.405 26.405C29.706 28.1039 27.4026 29.0597 25 29.0626H7.26406L9.4125 26.9126C9.5781 26.7348 9.66825 26.4998 9.66397 26.2569C9.65968 26.014 9.56129 25.7823 9.38953 25.6105C9.21776 25.4388 8.98603 25.3404 8.74315 25.3361C8.50028 25.3318 8.26522 25.422 8.0875 25.5876L4.3375 29.3376C4.16194 29.5133 4.06332 29.7516 4.06332 30.0001C4.06332 30.2485 4.16194 30.4868 4.3375 30.6626L8.0875 34.4126C8.26522 34.5782 8.50028 34.6683 8.74315 34.664C8.98603 34.6597 9.21776 34.5613 9.38953 34.3896C9.56129 34.2178 9.65968 33.9861 9.66397 33.7432C9.66825 33.5003 9.5781 33.2653 9.4125 33.0875L7.26406 30.9376H25C27.8998 30.9342 30.6799 29.7808 32.7303 27.7304C34.7808 25.6799 35.9342 22.8998 35.9375 20.0001C35.9375 19.7514 35.8387 19.513 35.6629 19.3371C35.4871 19.1613 35.2486 19.0626 35 19.0626Z"
                  fill="#B0B0B0"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-row w-[950px] h-[60px] ml-[90px]">
            <div className="text-[#B0B0B0] text-base mr-5">0:00</div>
            <div className="mt-[10px]">
              <svg
                width="600"
                height="4"
                viewBox="0 0 600 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="600" height="4" rx="2" fill="#B0B0B0" />
              </svg>
            </div>
            <div className="text-[#B0B0B0] text-base ml-[15px]">2:50</div>
          </div>
        </div>
        <div className="flex flex-row w-[340px] h-[120px] gap-[10px] mt-5">
          <div>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 21.5876V20.3376H25V21.5876H5ZM5 15.6251V14.3751H25V15.6251H5ZM5 9.6626V8.4126H25V9.6626H5Z"
                fill="#B0B0B0"
              />
            </svg>
          </div>
          <div>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.94747 17.4125C3.51006 16.6838 3.27899 15.8499 3.27899 15C3.27899 14.1501 3.51006 13.3162 3.94747 12.5875C4.0819 12.3631 4.26178 12.1694 4.47555 12.0187C4.68931 11.868 4.93224 11.7637 5.18872 11.7125L7.30497 11.2887C7.43118 11.2638 7.54501 11.1963 7.62747 11.0975L10.2125 7.99375C11.69 6.21875 12.43 5.3325 13.0887 5.57125C13.7475 5.81 13.75 6.965 13.75 9.275V20.7275C13.75 23.0362 13.75 24.19 13.09 24.43C12.4312 24.6675 11.6912 23.7812 10.2137 22.0075L7.62497 18.9025C7.54283 18.804 7.42948 18.7365 7.30372 18.7112L5.18747 18.2875C4.93099 18.2363 4.68806 18.132 4.4743 17.9813C4.26053 17.8306 4.0819 17.6369 3.94747 17.4125Z"
                stroke="#B0B0B0"
                stroke-width="2"
              />
              <path
                d="M19.42 10.58C20.5863 11.7462 21.2443 13.3262 21.2506 14.9755C21.2569 16.6248 20.611 18.2098 19.4537 19.385M24.5712 7.92871C26.4373 9.79454 27.4902 12.3223 27.5005 14.9611C27.5108 17.5999 26.4776 20.1359 24.6262 22.0162"
                stroke="#B0B0B0"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </div>
          <div className="mt-3">
            <svg
              width="150"
              height="4"
              viewBox="0 0 150 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="150" height="4" rx="2" fill="#B0B0B0" />
            </svg>
          </div>
          <div>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 25V18.75H6.25V22.865L10.75 18.365L11.635 19.25L7.135 23.75H11.25V25H5ZM19.25 11.635L18.365 10.75L22.865 6.25H18.75V5H25V11.25H23.75V7.135L19.25 11.635Z"
                fill="#B0B0B0"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlbumPage;