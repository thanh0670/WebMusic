
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import axios from "axios";
import backgroundImage from "../../asset/image/hieuthu2.png";
import backgroundImage1 from "../../asset/image/omemthatlau.png";
import backgroundImage2 from "../../asset/image/vailandondua.png";
import backgroundImage3 from "../../asset/image/buongdoitaynhaura.png";
import backgroundImage4 from "../../asset/image/casihieuthu2.png";
import backgroundImage5 from "../../asset/image/sontungmtp.png";
import backgroundImage6 from "../../asset/image/mono.png";
import backgroundImage7 from "../../asset/image/soobin.png";
import backgroundImage8 from "../../asset/image/tonghophinh.png";
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const { email, setUsername } = useContext(UserContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const token = localStorage.getItem("MUSIC_ACCESSTOKEN");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("MUSIC_ACCESSTOKEN");
    const username = localStorage.getItem("MUSIC_USERNAME");
    setIsLoggedIn(!!token && !!username);
  }, []);

  const handleLogoutClick = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/users/logout",
        { email, token },
        { withCredentials: true }
      );

      if (response.data.success) {
        localStorage.removeItem("MUSIC_ACCESSTOKEN");
        localStorage.removeItem("MUSIC_USERNAME");
        localStorage.removeItem("MUSIC_EMAIL");
        await setUsername("");
        setIsLoggedIn(false);
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

  const handleAlbumClick = (albumId) => {
    navigate(`/album/${albumId}`);
  };

  const LoggedInLibrary = ({ handleAlbumClick }) => (
    <div className="container-library w-[325px] h-[700px] bg-[#212121] ml-[17px] rounded-[10px]">
      <div className="w-[325px] h-7 flex flex-row">
        <p className="w-[270px] h-7 font-roboto text-[22px] text-white mt-[13px] ml-[15px] font-bold">
          Your Library
        </p>
        <button className="w-[55px] h-7 mt-[13px]">
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.75 16.2476H16.25V23.7476H13.75V16.2476H6.25V13.7476H13.75V6.24756H16.25V13.7476H23.75V16.2476Z"
              fill="#B0B0B0"
            />
          </svg>
        </button>
      </div>

      <div className="albums-container mt-5 px-[15px]">
        {[1, 2, 3].map((album) => (
          <div
            key={album}
            className="album-item flex items-center py-[10px] border-b border-[rgba(70,70,70,0.5)]"
            onClick={() => handleAlbumClick(`album${album}`)}
          >
            <button
              className="w-[50px] h-[50px] bg-[#333] rounded-[4px] bg-cover"
              style={{ backgroundImage: `url(${backgroundImage8})` }}
            ></button>
            <div className="ml-[15px]">
              <p className="font-roboto text-base text-white font-medium">
                Album {album}
              </p>
              <p className="font-roboto text-xs text-[#B0B0B0]">
                Danh sách phát
              </p>
            </div>
          </div>
        ))}
      </div>

      <button
        className="w-[180px] h-[30px] bg-[#D9D9D9] text-black font-roboto font-medium text-xl rounded-full mt-[320px] ml-[65px]"
        onClick={handleLogoutClick}
      >
        Logout
      </button>
    </div>
  );

  const NonLoggedInLibrary = () => (
    <div className="container-library w-[325px] h-[700px] bg-[#212121] ml-[17px] rounded-[10px]">
      <div className="w-[325px] h-7 flex flex-row">
        <p className="w-[270px] h-7 font-roboto text-[22px] text-white mt-[13px] ml-[15px] font-bold">
          Your Library
        </p>
        <button className="w-[55px] h-7 mt-[13px]">
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.75 16.2476H16.25V23.7476H13.75V16.2476H6.25V13.7476H13.75V6.24756H16.25V13.7476H23.75V16.2476Z"
              fill="#B0B0B0"
            />
          </svg>
        </button>
      </div>
      <p className="w-[150px] h-[18px] font-roboto mt-[188px] ml-[110px] text-[15px] font-semibold text-[#B0B0B0]">
        Danh sách trống
      </p>
      <button className="w-[150px] h-[30px] bg-white text-[#333] font-roboto text-[18px] font-semibold rounded-full mt-[70px] ml-[85px]">
        Create playlist
      </button>
      <p className="w-[265px] h-[70px] font-roboto font-light text-[19px] text-[#B0B0B0] mt-[170px] ml-[30px] text-center">
        Please log in to create and manage your playlists.
      </p>
    </div>
  );

  return (
    <div className="w-screen h-screen">
      <div className="wrapper-home w-screen h-screen flex flex-row justify-center mt-5 rounded-[10px]">
        <div className="container-song w-[1000px] h-[700px] bg-[#212121]">
          <p className="font-roboto text-[22px] text-white mt-[22px] ml-[15px] font-bold">
            Trending Song
          </p>
          <div className="wrapper-trending w-[881px] h-[240px] flex flex-row mt-10 ml-[60px]">
            {[
              { img: backgroundImage, title: "Nước Mắt Cá Sấu", artist: "HIEUTHUHAI" },
              { img: backgroundImage1, title: "Ôm Em Thật Lâu", artist: "MONO" },
              { img: backgroundImage2, title: "Vài Lần Đón Đưa", artist: "SOOBIN" },
              { img: backgroundImage3, title: "Buông Đôi Tay Nhau Ra", artist: "SON TUNG-MTP" },
            ].map((song, index) => (
              <div
                key={index}
                className={`trending w-[200px] h-[210px] flex flex-col ${index > 0 ? "ml-[17px]" : ""}`}
              >
                <div
                  className="img-trending w-[200px] h-[180px] rounded-lg bg-cover"
                  style={{ backgroundImage: `url(${song.img})` }}
                ></div>
                <p className="font-roboto text-[18px] font-medium text-white mt-[5px]">
                  {song.title}
                </p>
                <p className="font-roboto text-sm font-medium text-[#B0B0B0] mt-[5px]">
                  {song.artist}
                </p>
              </div>
            ))}
          </div>

          <p className="font-roboto text-[22px] text-white mt-[22px] ml-[15px] font-bold">
            Popular Artists
          </p>
          <div className="wrapper-trending w-[881px] h-[240px] flex flex-row mt-10 ml-[60px]">
            {[
              { img: backgroundImage4, name: "HIEUTHUHAI" },
              { img: backgroundImage5, name: "SON TUNG_MTP" },
              { img: backgroundImage6, name: "MONO" },
              { img: backgroundImage7, name: "SOOBIN" },
            ].map((artist, index) => (
              <div
                key={index}
                className={`trending w-[200px] h-[210px] flex flex-col ${index > 0 ? "ml-[17px]" : ""}`}
              >
                <div
                  className="img-trending w-[180px] h-[180px] rounded-full bg-cover"
                  style={{ backgroundImage: `url(${artist.img})` }}
                ></div>
                <p className="font-roboto text-[18px] font-medium text-white mt-[5px]">
                  {artist.name}
                </p>
                <p className="font-roboto text-sm font-medium text-[#B0B0B0] mt-[5px]">
                  Artist
                </p>
              </div>
            ))}
          </div>
        </div>

        {isLoggedIn ? (
          <LoggedInLibrary handleAlbumClick={handleAlbumClick} />
        ) : (
          <NonLoggedInLibrary />
        )}
      </div>
    </div>
  );
};

export default HomePage;