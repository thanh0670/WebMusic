import React, { useEffect, useState } from "react";
import TimKiemSvg from "../Svg/timKiemSvg";
import { useDispatch, useSelector } from "react-redux";
import AddMusicSvg from "../Svg/addMusicSvg";

import {
  addSongToAlbum,
  getAlbumDetail,
} from "../../../../redux/features/API/album/getAlbumByUser";

const AddMusicToPlaylistComponent = (props) => {
  const dispatch = useDispatch();
  const dataUser = useSelector((state) => state.user.response); // chứa tất cả bài hát
  const statusAddAlbum = useSelector((state) => state.albums.statusAddAlbum);
  const [arrayData, setArrayData] = useState(null);
  const dataAlbumDetail = useSelector((state) => state.albums.dataAlbumDetail);

  const handleClick = (e) => {
    if (!props.albumId || !e) {
      return console.log("loi du lieu");
    }
    dispatch(addSongToAlbum({ albumId: props.albumId, songId: e }));
  };
  const handleIsClick = () => {
    props.isXClick(false); // ✅ Gọi hàm cha với giá trị false
  };

  useEffect(() => {
    if (dataUser && dataAlbumDetail) {
      const allSongs = dataUser.songs;
      const songsInAlbum = dataAlbumDetail.songs;

      // Lấy danh sách các ID bài hát trong album
      const albumSongIds = new Set(songsInAlbum.map((song) => song._id));

      // Lọc ra những bài hát không có trong album
      const filteredSongs = allSongs.filter(
        (song) => !albumSongIds.has(song._id)
      );
      console.log(filteredSongs, "songInAAlbum");

      setArrayData(filteredSongs);
    }
  }, [dataUser, dataAlbumDetail]);

  // Log ra để kiểm tra
  useEffect(() => {
    console.log("Bài hát chưa có trong album:", arrayData);
  }, [arrayData]);

  useEffect(() => {
    console.log(dataAlbumDetail, "dataAlbumDetail");
  }, [dataAlbumDetail]);

  useEffect(() => {
    if (statusAddAlbum === "succeeded") {
      console.log("them thanh cong");
      dispatch(getAlbumDetail(props.albumId));
    }
  }, [statusAddAlbum]);

  useEffect(() => {
    if (arrayData) {
      console.log(arrayData, "arrayData");
    }
  }, [arrayData]);

  return (
    <div className="max-w-[100%] h-[100%] flex justify-center ">
      <div className=" max-w-[100%] h-[100%] flex flex-col">
        <p className=" text-[25px] text-[#979797] font-bold  flex justify-center items-centers">
          Thêm vào danh sách phát này
        </p>
        <div className=" w-[800px] h-[420px] pt-[16px] gap-[10px] bg-[#B8B8B8] relative flex flex-col items-center rounded-tl-xl rounded-bl-xl rounded-tr-xl rounded-br-xl">
          <div className=" w-[390px] h-[45px] bg-[#EAEAEA] rounded-tl-3xl rounded-bl-3xl rounded-tr-3xl rounded-br-3xl flex flex-row justify-center items-center gap-[5px] cursor-pointer">
            <div>
              <TimKiemSvg />
            </div>
            <p className=" text-[20px] text-[#C58598]">Tìm kiếm</p>
          </div>
          <div className=" w-[390px] h-[80%] bg-[#D9D9D9] gap-[10px] flex flex-col rounded-tl-xl rounded-bl-xl rounded-tr-xl rounded-br-xl pt-[21px] pl-[41px] pr-[41px]">
            <p className=" w-[100%] text-[17px] text-[#555555] font-bold flex justify-center items-center">
              Bài hát đề xuất
            </p>
            <div className="w-[100%] h-[80%] flex flex-col gap-[25px] overflow-auto">
              {arrayData?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className=" flex flex-row gap-[16px] items-center"
                  >
                    <img
                      src={item.url_img}
                      alt=""
                      className=" w-[70px] h-[70px] object-cover"
                    />
                    <div className="flex flex-col justify-center w-[140px]">
                      <p
                        className="text-[#555555] font-bold text-[16px] truncate cursor-pointer"
                        title={item.title}
                      >
                        {item.title}
                      </p>
                      <p
                        className="text-[#B0B0B0] text-[15px] truncate"
                        title={item.artist}
                      >
                        {item.artist}
                      </p>
                    </div>

                    {/* <div className=" w-[35px] h-[35px] bg-[#C54B6C] rounded-[100%] ml-[5px] flex justify-center items-center"> */}
                    <div
                      onClick={() => handleClick(item._id)}
                      className=" cursor-pointer"
                    >
                      <AddMusicSvg />
                    </div>
                    {/* </div> */}
                  </div>
                );
              })}
            </div>
          </div>
          <div
            className=" absolute w-[40px] h-[40px] bg-[red] top-[15px] right-[15px] cursor-pointer rounded-tl-xl rounded-bl-xl rounded-tr-xl rounded-br-xl text-[30px] flex justify-center items-center text-[white]"
            onClick={handleIsClick}
          >
            X
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMusicToPlaylistComponent;
