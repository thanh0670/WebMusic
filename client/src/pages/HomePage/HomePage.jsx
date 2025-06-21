import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserContext } from "../../contexts/UserContext";
import { dataUser } from "../../redux/features/counter/valueUserSlice";
import { useNavigate } from "react-router";
import { Tooltip, TooltipProvider } from "react-tooltip";

import {
  setCurrentSong,
  setCurrentAlbum,
  setArrayDataSong,
  setOriginalArraySong,
} from "../../redux/features/counter/playerSlice";
import axios from "axios";
import Svg1 from "./components/svg1";
import Svg2Logout from "./components/svg2Logout";
import {
  createAlbum,
  getAlbumByUser,
} from "../../redux/features/API/album/getAlbumByUser";
import { current } from "../../redux/features/counter/currentSlice";

const HomePage = () => {
  const { email, setUsername } = useContext(UserContext);
  const [state, setState] = useState(false);
  const [song, setSong] = useState(null);
  const [nameAlbum, setNameAlbum] = useState("");
  const [showOverlay, setShowOverlay] = useState(false);
  const [audio, setAudio] = useState(false);
  const token = localStorage.getItem("MUSIC_ACCESSTOKEN");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentUser = useSelector((state) => state.current.response);
  const currentStatus = useSelector((state) => state.current.status);
  const status = useSelector((state) => state.user.status);
  const Albums = useSelector((state) => state.albums.albums);
  const data = useSelector((state) => state.user.response);
  const currentArrayDataSong = useSelector((state) => state.audio.dataSong);
  const currentSong = useSelector((state) => state.audio.dataSong);
  const currentArraySong = useSelector((state) => state.audio.dataSong);

  const statusAlbum = useSelector((state) => state.albums.statusAlbum);
  const getRandomSongs = (songs, count = 4) => {
    const shuffled = [...songs].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const handelChange = (e) => {
    setNameAlbum(e.target.value);
  };
  const handelImgClick = () => {
    setAudio(true);
  };

  const handleAlbumClick = (item) => {
    console.log(item);
    setShowOverlay(false);
    navigate(`/AudioPage/${item._id}`);
    dispatch(setCurrentAlbum("album"));
  };
  const handleCreateAlbumClick = () => {
    dispatch(createAlbum(nameAlbum));
    setShowOverlay(false);
  };

  useEffect(() => {
    dispatch(current());
  }, []);
  useEffect(() => {
    console.log(statusAlbum);
    if (statusAlbum === "successed" && Albums) {
      dispatch(getAlbumByUser());
      console.log(Albums, "moi tao");
    }
  }, [statusAlbum, Albums, dispatch]);
  useEffect(() => {
    if (currentStatus === "successed" && currentUser) {
      dispatch(dataUser());
      dispatch(getAlbumByUser());
      setState(true);
    }
  }, [currentStatus, currentUser, dispatch]);

  useEffect(() => {
    if (status === "successed" && data) {
      const random = getRandomSongs(data?.songs, 4);
      setSong(random);
      if (random) {
        dispatch(setArrayDataSong(random));
        dispatch(setOriginalArraySong(random));
      }
      console.log(data, "hello");
    }
  }, [status, data]);

  useEffect(() => {
    console.log(song);
    if (Albums) {
      console.log(Albums, "Albums");
      if (Albums && Albums.length === 0) {
        console.log("null");
      }
    }
  }, [song, Albums]);
  useEffect(() => {
    console.log(currentSong, "curentySonf");
  }, [currentSong]);

  if (currentStatus === "loading") {
    return <div>Đang kiểm tra đăng nhập...</div>;
  }

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
        await setUsername("");
      }
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Có lỗi xảy ra, vui lòng thử lại sau.");
      }
    }
  };
  const handleSongClick = (songClicked) => {
    // // Lấy array bài hát hiện tại (ví dụ là mảng `song` trong state)
    // if (!song || song.length === 0) return;

    // // Tạo mảng mới, bài được click sẽ được đẩy lên đầu
    // const newArraySong = [
    //   songClicked,
    //   ...song.filter((s) => s._id !== songClicked._id),
    // ];

    // console.log(songClicked);

    // dispatch(setArrayDataSong(newArraySong)); // Cập nhật lại array song trong redux
    // dispatch(setCurrentIndex(0)); // Bài đầu tiên trong mảng mới

    dispatch(setCurrentSong(songClicked)); // Cập nhật bài hiện tại
  };

  return (
    <div className=" flex justify-center flex-row gap-[20px] bg-[#121212] ">
      <div className=" w-[1000px] h-[900px] bg-[#FFE3E3] rounded-tl-xl rounded-bl-xl rounded-tr-xl rounded-br-xl flex flex-col">
        <div className="w-[100%^] flex flex-col">
          <div className="flex flex-row justify-between pl-[29px] pt-[30px] pr-[60px]">
            <p className=" font-robotoCondensed font-[800] text-[22px] text-[#C54B6C]">
              Trending Songs
            </p>
            <p className=" font-robotoCondensed text-[15px] text-[#B0B0B0] cursor-pointer">
              Show all
            </p>
          </div>
          <div className=" w-[100%] pl-[49px] pt-[30px] pr-[60px] flex flex-row gap-[25px]">
            {song ? (
              song.map((item, index) => {
                return (
                  <div
                    key={index}
                    className=" w-[200px] flex flex-col gap-[0px]"
                    onClick={handelImgClick}
                  >
                    <img
                      src={item.url_img}
                      onClick={() => handleSongClick(item)}
                      alt=""
                      className=" w-[200px] h-[200px] object-cover rounded-tl-xl rounded-bl-xl rounded-tr-xl rounded-br-xl cursor-pointer"
                    />
                    <p className=" mt-[5px] w-[100%] text-[19px] text-[#555555] font-[500] font-robotoCondensed truncate whitespace-nowrap overflow-hidden">
                      {item.title}
                    </p>
                    <p className=" font-robotoCondensed text-[#B0B0B0] text-[16px]">
                      {item.artist}
                    </p>
                  </div>
                );
              })
            ) : (
              <div className=" text-[black]"> Khong co du lieu</div>
            )}
          </div>
        </div>
        <div></div>
      </div>
      <div className=" sticky top-[105px] z-10 w-[325px] h-[610px] bg-[#FFE3E3] flex flex-col  rounded-tl-xl rounded-bl-xl rounded-tr-xl rounded-br-xl">
        <div className=" flex flex-row justify-between mt-[14px] ml-[15px] mr-[11px]">
          <p className=" font-robotoCondensed font-[800] text-[22px] text-[#C54B6C]">
            Your Library
          </p>
          <TooltipProvider>
            <div
              id="create-album-icon"
              onClick={() => setShowOverlay(true)}
              className="cursor-pointer"
            >
              <Svg1 />
            </div>

            <Tooltip
              anchorId="create-album-icon"
              place="bottom"
              content="Tạo album"
              delayShow={500}
            />
          </TooltipProvider>

          {showOverlay && (
            <>
              <div className="fixed inset-0 bg-black opacity-50 z-40" />
              <div
                className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                    w-[1000px] h-[300px] bg-[#D9D9D9] z-50 shadow-lg rounded-xl p-4 flex flex-col items-center"
              >
                <p className=" w-[500px] h-[40px] bg-[#B0B0B0] flex justify-center items-center text-lg font-semibold  rounded-tl-xl rounded-bl-xl rounded-tr-xl rounded-br-xl">
                  Đặt tên cho danh sách phát của bạn
                </p>
                <input
                  type="text"
                  onChange={handelChange}
                  className="w-[500px] border-b-2 border-[#000] bg-[#D9D9D9] outline-none text-center text-[24px] mt-[54px]"
                />
                <button
                  className=" fixed top-[-25px] right-[10px] w-[50px] h-[50px] bg-[#C54B6C] text-white rounded-xl mt-[39px]"
                  onClick={() => setShowOverlay(false)}
                >
                  X
                </button>
                <button
                  className=" w-[100px] h-[50px] bg-[#C54B6C] text-white rounded-xl mt-[39px]"
                  onClick={handleCreateAlbumClick}
                >
                  Tạo
                </button>
              </div>
            </>
          )}
        </div>
        <div className="h-[80%] flex flex-col">
          <div className="h-[100%] flex flex-col">
            {state ? (
              Albums?.albums?.length === 0 ? (
                <div className="flex flex-col h-[100%] gap-[149px] justify-center items-center">
                  <p className=" font-robotoCondensed text-[15px] text-[#B0B0B0]">
                    Danh sách trống
                  </p>
                  <button
                    className=" bg-[#fff] w-[150px] h-[30px] rounded-tl-3xl rounded-bl-3xl rounded-tr-3xl rounded-br-3xl"
                    onClick={() => setShowOverlay(!showOverlay)}
                  >
                    Create playlist
                  </button>
                </div>
              ) : (
                <div>
                  {Albums?.albums?.map((item, index) => {
                    return (
                      <div
                        onClick={() => handleAlbumClick(item)}
                        className=" cursor-pointer"
                        key={index}
                      >
                        {item.name}
                      </div>
                    );
                  })}
                </div>
              )
            ) : (
              <div className="flex flex-col h-[100%] gap-[149px] justify-center items-center">
                <p className=" font-robotoCondensed text-[15px] text-[#B0B0B0]">
                  Danh sách trống
                </p>
                <button className=" bg-[#fff] w-[150px] h-[30px] rounded-tl-3xl rounded-bl-3xl rounded-tr-3xl rounded-br-3xl">
                  Create playlist
                </button>
              </div>
            )}
          </div>
          <div>
            {token ? (
              audio || currentSong ? (
                <div className=" w-[100%] flex justify-center items-center mb-[100px]">
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
              ) : (
                <div className=" w-[100%] flex justify-center items-center">
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
              )
            ) : (
              <div className=" w-[100%] flex justify-center items-center">
                <p className=" w-[80%] font-robotoCondensed text-[#C54B6C] text-[20px] text-center ">
                  Please log in to create and manage your playlists.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
