import React, { useEffect } from "react";
import Carroussel from "./Carroussel";
import "./styles.css";
import { useSelector, useDispatch } from "react-redux";

import {
  setArrayDataSong,
  setCurrentIndex,
  setCurrentSong,
} from "../../../redux/features/counter/playerSlice";

const Playlist = () => {
  const dispatch = useDispatch();
  const arraySong = useSelector((state) => state.audio.arrayDataSong);

  useEffect(() => {
    console.log("arraySong:", arraySong);
  }, [arraySong]);

  // Hàm xoay vòng mảng để đưa bài được chọn lên đầu
  const rotateArray = (arr, startIndex) => {
    return [...arr.slice(startIndex), ...arr.slice(0, startIndex)];
  };

  const handleCardClick = (index) => {
    // Xoay vòng arraySong để bài index được chọn lên đầu
    const newArraySong = rotateArray(arraySong, index);

    dispatch(setArrayDataSong(newArraySong));
    dispatch(setCurrentSong(newArraySong[0])); // bài mới là đầu tiên
    dispatch(setCurrentIndex(0)); // index mới luôn là 0
  };

  const cards = arraySong?.map((song) => ({
    key: song._id, // dùng _id làm key cố định để tránh unmount/mount Carousel
    content: (
      <div
        className=" w-[400px] h-[400px] bg-black text-white flex items-center justify-center cursor-pointer rounded shadow"
        style={{ opacity: 1 }}
      >
        <img
          className=" w-[100%] h-[400px] object-cover"
          src={song.url_img}
          alt="img"
          style={{ opacity: 1 }}
        />
      </div>
    ),
  }));

  return (
    <div className="text-white">
      {arraySong?.length > 0 && (
        <Carroussel
          cards={cards}
          height="500px"
          width="100%"
          margin="0 auto"
          offset={2}
          showArrows={false}
          goToSlide={0} // luôn 0 vì bài mới lên đầu rồi
          onCardClick={handleCardClick}
        />
      )}
    </div>
  );
};

export default Playlist;
