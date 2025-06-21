import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import PlayMusicSvg from "../Svg/playMusicSvg";
import {
  setArrayDataSong,
  setCurrentSong,
  setOriginalArraySong,
} from "../../../../redux/features/counter/playerSlice";
import NutChinhSuaSvg from "../Svg/nutChinhSuaSvg";
import DeleteAlbumSvg from "../Svg/deleteAlbumSvg";
import {
  deleteAlbum,
  deleteSongFromAlbum,
} from "../../../../redux/features/API/album/getAlbumByUser";
import DeleteFromAlbumSvg from "../Svg/deleteFromAlbumSvg";

const LibaryPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isChinhSua, setIsChinhSua] = useState(false);
  const dataAlbumDetail = useSelector((state) => state.albums.dataAlbumDetail);
  const dataSong = useSelector((state) => state.audio.dataSong);

  const songs = dataAlbumDetail?.songs;

  const handleChinhSuaClick = () => {
    if (isChinhSua) {
      setIsChinhSua(false);
    } else {
      setIsChinhSua(true);
    }
  };
  //xóa album
  const handleDeleteAlbumClick = () => {
    const isConfirm = window.confirm(
      "Bạn có chắc chắn muốn xoá album này không?"
    );
    if (!isConfirm) return;

    dispatch(deleteAlbum(dataAlbumDetail._id))
      .unwrap()
      .then(() => {
        navigate("/HomePage"); // nếu bạn dùng react-router và muốn chuyển trang
      })
      .catch((error) => {
        console.error("Lỗi khi xoá album:", error);
        alert("Xoá album thất bại!");
      });
  };

  const handleDeleteSong = (song) => {
    dispatch(
      deleteSongFromAlbum({ albumId: dataAlbumDetail._id, songId: song._id })
    );
  };
  const handleClickMusic = (e) => {
    dispatch(setCurrentSong(e));
    dispatch(setArrayDataSong(songs));
    dispatch(setOriginalArraySong(songs));
    console.log(e);
  };
  useEffect(() => {
    console.log(dataAlbumDetail, "detaail");
  }, [dataAlbumDetail]);

  return (
    <div className="w-[100%] h-[100%] flex flex-col">
      <div className="w-[100%] h-[170px] flex flex-row pl-[40px] gap-[20px] ">
        {songs && songs?.length < 4 ? (
          <div>
            <img
              src={songs[0]?.url_img}
              alt=""
              className=" w-[150px] h-[150px]"
            />
          </div>
        ) : (
          songs && (
            <div className="w-[150px] h-[150px] flex flex-col">
              <div className="w-[100%] h-[50%] flex flex-row ">
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
          )
        )}
        <div className="h-[100%] flex flex-col">
          <p className=" text-[#B0B0B0] text-[20px]">PLAYLIST</p>
          <p className=" text-[60px] text-[#FFFFFF] font-bold">
            {dataAlbumDetail?.name}
          </p>
          <div className=" flex flex-row gap-[10px] items-center ">
            <p className=" text-[#B0B0B0] text-[20px]">{songs?.length} Songs</p>
            {/* Nút Chỉnh sửa */}
            <div
              className="relative group cursor-pointer"
              onClick={handleChinhSuaClick}
            >
              <NutChinhSuaSvg />
              <div className="w-[200px] absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity">
                Chỉnh sửa danh sách album
              </div>
            </div>

            {/* Nút Xoá Album */}
            <div
              className="relative group cursor-pointer"
              onClick={handleDeleteAlbumClick}
            >
              <DeleteAlbumSvg />
              <div className="w-[90px] absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity">
                Xóa album
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] h-[65vh] bg-[#f59a9a] flex flex-col p-[10px]">
        <div>
          <PlayMusicSvg />
        </div>
        <div className=" flex flex-col h-[80%]">
          <div className=" flex flex-row gap-[40%] pl-[10px]">
            <p className=" text-[#FFFFFF] text-[20px]">TITLE</p>
            <p className=" text-[#FFFFFF] text-[20px]">ALBUM</p>
          </div>
          <div className=" "></div>
          <div className=" w-[100%] border border-black"></div>
          {dataSong ? (
            <div className=" w-[100%] h-[180px] flex flex-col gap-[10px] overflow-y-scroll pt-[5px]">
              {songs?.map((item, index) => {
                return (
                  <div
                    className=" w-[90%] flex flex-row gap-[14.5%] pl-[15px] relative"
                    key={index}
                  >
                    <div
                      className="w-[35%] flex flex-row gap-[20px]"
                      onClick={() => handleClickMusic(item)}
                    >
                      <img
                        src={item.url_img}
                        alt=""
                        className=" w-[30px] h-[30px]  cursor-pointer"
                      />
                      <div className=" cursor-pointer">{item.title}</div>
                    </div>
                    <div>{dataAlbumDetail.name}</div>
                    {isChinhSua && (
                      <div
                        className=" absolute right-0"
                        onClick={() => handleDeleteSong(item)}
                      >
                        <DeleteFromAlbumSvg />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            <div className=" w-[97%] max-h-[90%] flex flex-col gap-[10px] overflow-y-scroll pt-[5px]">
              {songs?.map((item, index) => {
                return (
                  <div
                    className=" w-[90%] flex flex-row gap-[14.5%] pl-[15px] relative"
                    key={index}
                  >
                    <div
                      className="w-[35%] flex flex-row gap-[20px]"
                      onClick={() => handleClickMusic(item)}
                    >
                      <img
                        src={item.url_img}
                        alt=""
                        className=" w-[30px] h-[30px]  cursor-pointer"
                      />
                      <div className=" cursor-pointer">{item.title}</div>
                    </div>
                    <div>{dataAlbumDetail.name}</div>
                    {isChinhSua && (
                      <div
                        className=" absolute right-0"
                        onClick={() => handleDeleteSong(item)}
                      >
                        <DeleteFromAlbumSvg />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LibaryPage;
