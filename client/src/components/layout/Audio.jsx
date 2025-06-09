import React, { useEffect, useState, useRef } from "react";
import { Outlet } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./audio.css";
import MyCustomSVG from "./components/SVG/MyCustomSVG";
import Playlist from "./components/Playlist";
import {
  nextSong,
  prevSong,
  setArrayDataSong,
  setCurrentIndex,
} from "../../redux/features/counter/playerSlice";
import BinhLuanSvg from "./components/SVG/binhLuanSvg";
import BinhLuanComponent from "./components/binhLuanComponent";
import { getComments } from "../../redux/features/API/comment/postAndGetComment";

const Audio = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.audio.data);
  const dataSong = useSelector((state) => state.audio.dataSong);
  const arraySong = useSelector((state) => state.audio.arrayDataSong);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [activeTab, setActiveTab] = useState("lyrics");
  const [isClickComment, setIsClickComment] = useState(false);

  const commentRef = useRef(null);

  // useEffect(() => {
  //   dispatch(getComments(dataSong?._id));
  // }, []);
  const handleSVGClick = () => {
    setIsFullScreen(true);
    console.log(arraySong, "array");
  };
  const handleSvgCommentClick = () => {
    if (isClickComment === true) {
      setIsClickComment(false);
    } else {
      setIsClickComment(true);
    }
  };
  const handleClose = () => setIsFullScreen(false);
  useEffect(() => {
    console.log(arraySong, "huhu");
    console.log(dataSong, "haha");
  }, [arraySong, dataSong]);

  useEffect(() => {
    if (isFullScreen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isFullScreen]);
  useEffect(() => {
    const index = arraySong.findIndex((song) => song._id === dataSong?._id);
    if (index !== -1) {
      dispatch(setCurrentIndex(index));
    }
  }, [dataSong, arraySong, dispatch]);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (commentRef.current && !commentRef.current.contains(event.target)) {
        setIsClickComment(false);
      }
    };

    if (isClickComment) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isClickComment]);

  return (
    <div className="relative">
      <Outlet />

      {(dataSong || data === "album") && (
        <div
          className={`fixed inset-x-0 bottom-0 z-[110] transition-all duration-500 ease-in-out ${
            isFullScreen ? "h-screen bg-[#FFE3E3]" : "h-[100px] bg-[#121212]"
          }`}
        >
          {isFullScreen && (
            <div className="h-full flex flex-col justify-center items-center text-white relative">
              {/* Tabs + Nút Đóng */}
              <div className="absolute top-4 left-4 right-4 text-white flex flex-col items-center">
                <div className="w-full flex justify-between items-center mb-4">
                  <div className="flex-1"></div>
                  <button
                    className="absolute top-4 right-4 bg-white text-black px-4 py-2 rounded"
                    onClick={handleClose}
                  >
                    Đóng
                  </button>
                  <div
                    className=" w-[40px] h-[40px] bg-[#A3A3A3] absolute top-4 right-[110px] flex justify-center items-center rounded-[100%] cursor-pointer"
                    onClick={handleSvgCommentClick}
                  >
                    <BinhLuanSvg />
                  </div>
                  <div className="flex-1"></div>
                </div>

                {/* Tabs */}
                <div className="relative w-[700px] h-[50px] bg-[#686868] bg-opacity-20 rounded-full flex justify-between items-center px-4">
                  <div
                    className={`absolute top-[6px] w-[48%] h-[38px] bg-white rounded-full transition-all duration-500 ${
                      activeTab === "lyrics"
                        ? "left-[4px]"
                        : "left-[calc(50%+4px)]"
                    }`}
                    style={{ zIndex: 1 }}
                  ></div>
                  <div
                    onClick={() => setActiveTab("lyrics")}
                    className={`flex-1 text-center cursor-pointer select-none transition-colors duration-300 z-10 ${
                      activeTab === "lyrics"
                        ? "text-black font-semibold"
                        : "text-gray-700"
                    }`}
                  >
                    Lyrics
                  </div>
                  <div
                    onClick={() => setActiveTab("playlist")}
                    className={`flex-1 text-center cursor-pointer select-none transition-colors duration-300 z-10 ${
                      activeTab === "playlist"
                        ? "text-black font-semibold"
                        : "text-gray-700"
                    }`}
                  >
                    Playlist
                  </div>
                </div>
              </div>
              {/* Nội dung bình luận */}
              {isClickComment === true && (
                <div ref={commentRef} className=" absolute bottom-0 w-[100vw]">
                  <BinhLuanComponent />
                </div>
              )}
              {/* Nội dung chính: Ảnh + Lời hoặc Playlist */}
              <div className="flex gap-[80px] mb-[200px] mt-28 max-w-[1200px] justify-center">
                {activeTab === "lyrics" ? (
                  <>
                    <img
                      src={dataSong?.url_img}
                      alt=""
                      className="w-[400px] h-[400px] object-cover rounded-xl shadow-2xl"
                    />

                    <div className="flex-1 w-[600px] max-h-[400px] overflow-y-auto">
                      <div className="p-6 rounded-xl text-white flex justify-center items-center">
                        <pre className="whitespace-pre-wrap text-[35px] font-bold text-[#B0B0B0] leading-relaxed">
                          {dataSong?.lyrics || "Chưa có lời bài hát."}
                        </pre>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="w-full flex justify-center">
                    <div className="w-[1000px] h-[500px] rounded-xl p-4">
                      <Playlist songs={data} />
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Nút mở fullscreen */}
          {!isFullScreen && (
            <div className="absolute z-30 bottom-[30px] right-[25px]">
              <div onClick={handleSVGClick}>
                <MyCustomSVG />
              </div>
            </div>
          )}

          {/* Thanh phát nhạc */}
          <div className="absolute bottom-0 w-full">
            <AudioPlayer
              className={`custom-audio-player ${
                isFullScreen ? "fullscreen-audio" : ""
              }`}
              autoPlay
              src={dataSong?.url_audio}
              onPlay={() => console.log("onPlay")}
              onEnded={() => dispatch(nextSong())}
              onClickNext={() => dispatch(nextSong())}
              onClickPrevious={() => dispatch(prevSong())}
              showJumpControls={true}
              showSkipControls={true}
            />
          </div>
        </div>
      )}

      {/* Góc trái - Hiện thông tin khi không fullscreen */}
      {dataSong && !isFullScreen && (
        <div className="fixed z-[120] bottom-[20px] left-[15px] flex flex-row gap-[20px]">
          <img
            src={dataSong.url_img}
            alt=""
            className="w-[70px] h-[70px] object-cover rounded"
          />
          <div className="text-white flex flex-col justify-center">
            <p className="text-[18px] font-bold font-robotoCondensed">
              {dataSong.title}
            </p>
            <p className="text-[#B0B0B0] font-robotoCondensed">
              {dataSong.artist}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Audio;
