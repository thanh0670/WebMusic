import React, { useEffect, useState } from "react";
import EnterSvg from "./SVG/enterSvg";
import { useDispatch, useSelector } from "react-redux";
import {
  postComment,
  getComments,
  resetPostStatus,
} from "../../../redux/features/API/comment/postAndGetComment";

const BinhLuanComponent = () => {
  const dispatch = useDispatch();
  const username = localStorage.getItem("MUSIC_USERNAME");
  const firstLetter = username ? username.charAt(0).toUpperCase() : "";
  const [comment, setComment] = useState("");
  const [trueCommnet, setTrueComment] = useState("");
  const [isClickEnter, setisClickEnter] = useState(false);
  const dataSong = useSelector((state) => state.audio.dataSong);
  const statusCreateComment = useSelector((state) => state.commet.postStatus);
  const dataComment = useSelector((state) => state.commet.comments);

  useEffect(() => {
    dispatch(getComments(dataSong?._id));
  }, []);
  useEffect(() => {
    console.log(dataComment);
  }, [dataComment]);
  useEffect(() => {
    console.log(dataSong);
  }, [dataSong]);
  const handleCommetChange = (e) => {
    setComment(e.target.value);
  };
  useEffect(() => {
    if (statusCreateComment === "succeeded") {
      // Làm gì đó: ví dụ xóa input
      alert("dang thanh cpong");
      dispatch(resetPostStatus());
    }
  }, [statusCreateComment]);

  const handleEnterClick = () => {
    setisClickEnter(true);
    dispatch(postComment({ songId: dataSong._id, content: comment }));
    setTrueComment(comment);
    setComment(""); // clear input
  };
  const getColorFromChar = (char) => {
    const colors = [
      "#F44336", // đỏ
      "#E91E63", // hồng
      "#9C27B0", // tím
      "#3F51B5", // chàm
      "#2196F3", // xanh dương
      "#009688", // teal
      "#4CAF50", // xanh lá
      "#FFC107", // vàng
      "#FF9800", // cam
      "#795548", // nâu
      "#607D8B", // xám xanh
    ];

    if (!char) return "#999";

    const ascii = char.toUpperCase().charCodeAt(0);
    const index = ascii % colors.length;
    return colors[index];
  };
  const bgColor = getColorFromChar(firstLetter);

  return (
    <div className=" absolute w-[100vw] h-[500px] bg-[white] bottom-0 z-[200] flex flex-col items-center">
      <div className="w-[100%] h-[80%]">
        {isClickEnter ? (
          <div className=" w-[100%] flex flex-col gap-[10px] justify-center items-center">
            <p className=" text-[black] text-[30px]">Bình luận</p>
            <div className=" w-[100vw] max-h-[300px] overflow-y-auto">
              <div className=" flex flex-col gap-[20px] justify-center items-center">
                <div className=" w-[100%] flex flex-row gap-[10px] pl-[50px] items-center">
                  <div
                    className=" w-[50px] h-[50px] rounded-[100%] text-[30px] flex justify-center items-center"
                    style={{ backgroundColor: bgColor }}
                  >
                    {firstLetter}
                  </div>
                  <div className=" flex flex-col justify-center ">
                    <p className=" text-[black] text-[20px] font-bold">
                      {username}
                    </p>
                    <p className=" text-[#888] text-[20px]">{trueCommnet}</p>
                  </div>
                </div>
                <div className="w-[100%] max-h-[300px]">
                  {dataComment?.map((item, index) => {
                    const firstLetter = item.userId?.username
                      ? item.userId.username.charAt(0).toUpperCase()
                      : "?";
                    const bgColor = getColorFromChar(firstLetter);
                    return (
                      <div
                        key={index}
                        className=" flex flex-row gap-[10px] pl-[50px] items-center"
                      >
                        <div
                          className=" w-[50px] h-[50px] rounded-[100%] text-[30px] flex justify-center items-center"
                          style={{ backgroundColor: bgColor }}
                        >
                          {firstLetter}
                        </div>
                        <div className=" text-[black] flex flex-col  ">
                          <p className=" text-[black] text-[20px] font-bold">
                            {item.userId.username}
                          </p>
                          <p className=" text-[#888] text-[20px]">
                            {item.content}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        ) : (
          dataComment && (
            <div className=" w-[100%] flex flex-col justify-center items-center gap-[10px]">
              <p className=" text-[black] text-[30px]">Bình luận</p>
              <div className="w-[100%] max-h-[300px] overflow-auto">
                <div className="flex flex-col">
                  {dataComment?.map((item, index) => {
                    const firstLetter = item.userId?.username
                      ? item.userId.username.charAt(0).toUpperCase()
                      : "?";
                    const bgColor = getColorFromChar(firstLetter);
                    return (
                      <div className=" flex flex-row gap-[10px] pl-[50px] items-center">
                        <div
                          className=" w-[50px] h-[50px] rounded-[100%] text-[30px] flex justify-center items-center"
                          style={{ backgroundColor: bgColor }}
                        >
                          {firstLetter}
                        </div>
                        <div className=" text-[black] flex flex-col  ">
                          <p className=" text-[black] text-[20px] font-bold">
                            {item.userId.username}
                          </p>
                          <p className=" text-[#888] text-[20px]">
                            {item.content}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )
        )}
      </div>
      <div className=" w-[100%] flex justify-center items-center flex-row gap-[30px]">
        <div
          className=" w-[70px] h-[70px] rounded-[100%] text-[30px] flex justify-center items-center"
          style={{ backgroundColor: bgColor }}
        >
          {firstLetter}
        </div>
        <input
          type="text"
          value={comment}
          placeholder="Nhập bình luận..."
          onChange={handleCommetChange}
          className=" w-[80%] h-[65px] border border-[black] rounded-tl-3xl rounded-bl-3xl rounded-tr-3xl rounded-br-3xl p-[20px] text-[black] text-[30px] "
        />
        <div className=" cursor-pointer" onClick={handleEnterClick}>
          <EnterSvg />
        </div>
      </div>
    </div>
  );
};

export default BinhLuanComponent;
