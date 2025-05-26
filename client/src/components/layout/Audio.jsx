import React, { useContext, useEffect } from "react";
import { Outlet, Link } from "react-router";
import { useSelector } from "react-redux";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./audio.css";

const MyCustomSVG = () => (
  <div className="custom-svg-wrapper">
    <svg
      width="24"
      height="24"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="cursor-pointer hover:scale-110 transition-transform"
      onClick={() => alert("Clicked SVG!")}
    >
      <path
        d="M5 25V18.75H6.25V22.865L10.75 18.365L11.635 19.25L7.135 23.75H11.25V25H5ZM19.25 11.635L18.365 10.75L22.865 6.25H18.75V5H25V11.25H23.75V7.135L19.25 11.635Z"
        fill="white"
      />
    </svg>
  </div>
);

const Audio = () => {
  const data = useSelector((state) => state.audio.data);
  const dataSong = useSelector((state) => state.audio.dataSong);
  useEffect(() => {
    console.log({ dataSong, data }, "H");
  }, [dataSong, data]);
  return (
    <div className="relative">
      <Outlet />
      {(dataSong || data === "album") && (
        <div className="w-[100%] fixed bottom-[0px] z-20">
          <AudioPlayer
            // className="custom-audio-player"
            style={{ backgroundColor: "#121212", color: "white" }}
            className="custom-audio-player"
            autoPlay
            src={dataSong?.url_audio}
            onPlay={(e) => console.log("onPlay")}
            showJumpControls={true} // bật nút tua
          />
          <div className=" absolute z-30 bottom-[30px] right-[25px]">
            <MyCustomSVG />
          </div>
          <div className=" absolute z-30 bottom-[0px] left-[15px] flex flex-row gap-[20px]">
            {dataSong ? (
              <>
                <img
                  src={dataSong.url_img}
                  alt=""
                  className=" w-[70px] h-[70px] mb-[15px] object-cover"
                />
                <div className=" text-[#fff] flex flex-col justify-center items-center mb-[15px]">
                  <p className=" text-[18px] font-[700] font-robotoCondensed">
                    {dataSong.title}
                  </p>
                  <p className=" text-[#B0B0B0] font-robotoCondensed">
                    {dataSong.artist}
                  </p>
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Audio;
