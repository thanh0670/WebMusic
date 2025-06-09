import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import PlayMusicSvg from "../Svg/playMusicSvg";

const LibaryPage = () => {
  const dataAlbumDetail = useSelector((state) => state.albums.dataAlbumDetail);
  const songs = dataAlbumDetail?.songs;
  useEffect(() => {
    console.log(dataAlbumDetail, "detaail");
  }, [dataAlbumDetail]);

  return (
    <div className="w-[100%] h-[100%] flex flex-col">
      <div className="w-[100%] h-[35%] flex flex-row pl-[40px] gap-[20px] ">
        {songs?.length < 4 ? (
          <div>
            <img
              src={songs[0].url_img}
              alt=""
              className=" w-[250px] h-[250px]"
            />
          </div>
        ) : (
          <div className="w-[200px] h-[200px] flex flex-col">
            <div className="w-[100%] h-[50%] flex flex-row">
              <img
                src={songs[0]?.url_img}
                alt=""
                className=" w-[50%] h-[100%]"
              />
              <img
                src={songs[1]?.url_img}
                alt=""
                className=" w-[50%] h-[100%]"
              />
            </div>
            <div className="w-[100%] h-[50%] flex flex-row">
              <img
                src={songs[2]?.url_img}
                alt=""
                className=" w-[50%] h-[100%]"
              />
              <img
                src={songs[3]?.url_img}
                alt=""
                className=" w-[50%] h-[100%]"
              />
            </div>
          </div>
        )}
        <div className="h-[100%] flex flex-col justify-center">
          <p className=" text-[#B0B0B0] text-[20px]">PLAYLIST</p>
          <p className=" text-[70px] text-[#FFFFFF] font-bold">
            {dataAlbumDetail?.name}
          </p>
          <p className=" text-[#B0B0B0] text-[20px]">{songs.length} Songs</p>
        </div>
      </div>
      <div className="w-[100%] h-[65%] bg-[#f59a9a] flex flex-col p-[10px]">
        <div>
          <PlayMusicSvg />
        </div>
        <div className=" flex flex-col">
          <div className=" flex flex-row gap-[500px] pl-[10px]">
            <p className=" text-[#FFFFFF] text-[20px]">TITLE</p>
            <p className=" text-[#FFFFFF] text-[20px]">ALBUM</p>
          </div>
          <div className=" "></div>
          <div className=" w-[100%] border border-black"></div>
          <div className=" w-[100%] h-[140px] flex flex-col gap-[10px] overflow-y-scroll">
            {songs?.map((item, key) => {
              return (
                <div className=" w-[90%] flex flex-row gap-[15px] pl-[15px]">
                  <div className="w-[35%] flex flex-row gap-[20px]">
                    <img
                      src={item.url_img}
                      alt=""
                      className=" w-[30px] h-[30px]"
                    />
                    <div>{item.title}</div>
                  </div>
                  <div>{dataAlbumDetail.name}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibaryPage;
