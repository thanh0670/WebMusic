import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NotNhacSvg from "./components/Svg/notNhacSvg";
import { useOutletContext } from "react-router";

import AddMusicToPlaylistComponent from "./components/components/addMusicToPlaylistComponent";
import { current } from "../../redux/features/counter/currentSlice";

const AudioPage = (pops) => {
  const dispatch = useDispatch();

  const dataAlbumDetail = useSelector((state) => state.albums.dataAlbumDetail);

  const [isClick, setIsClick] = useState(false);
  // const [a, setA] = useState(false);

  const { albumId } = useOutletContext();
  const a = (e) => {
    console.log(e);
    setIsClick(e);
  };
  useEffect(() => {
    dispatch(current());
  }, [dispatch]);
  useEffect(() => {
    console.log(albumId, "albumId từ useOutletContext()");
  }, [albumId]);

  useEffect(() => {});
  const isHandleClick = () => {
    setIsClick(true);
  };
  useEffect(() => {
    console.log(dataAlbumDetail, "dataAlbumDetail");
  }, [dataAlbumDetail]);
  return (
    <div className=" max-w-[100%] h-[100%] p-[40px] flex flex-col relative">
      {dataAlbumDetail && (
        <div className=" flex flex-col">
          <div className=" flex flex-row">
            <div className=" w-[225px] h-[225px] bg-[#E9E9E9] shadow-xl flex justify-center items-center">
              <NotNhacSvg />
            </div>
            <div className=" flex flex-col justify-center  pl-[32px]">
              <p className=" text-[24px] text-[#B0B0B0] ">PLAYLIST</p>
              <p className=" text-[70px] text-[#979797] font-bold">
                {dataAlbumDetail?.name}
              </p>
            </div>
          </div>
          <div className=" flex flex-col w-[100%] justify-center items-center gap-[40px]">
            <p className=" text-[20px] text-[#979797] ">
              Hãy bắt đầu tạo danh sách phát của bạn
            </p>
            <button
              className=" w-[400px] h-[50px] bg-[white]  text-[#000000] text-[20px] font-bold rounded-tl-3xl rounded-bl-3xl rounded-tr-3xl rounded-br-3xl flex justify-center items-center"
              onClick={isHandleClick}
            >
              Thêm vào danh sách phát này
            </button>
          </div>
          {isClick && (
            <div className="absolute top-0 right-[0px] w-[100%] h-[100%] bg-[#FFE3E3]">
              {/* <div className=" w-[30px] h-[30px] bg-[red]"></div> */}
              <AddMusicToPlaylistComponent albumId={albumId} isXClick={a} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AudioPage;
