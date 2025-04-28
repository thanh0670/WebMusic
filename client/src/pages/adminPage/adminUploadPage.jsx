import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadFiles } from "../../redux/features/API/postAudio";

const AdminUploadPage = () => {
  const imageInputRef = useRef(null);
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [lyrics, setLyrics] = useState("");
  const [fileName, setFileName] = useState(null);
  const [audioName, setAudioName] = useState(null);

  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.postAudio);

  const handleImageClick = () => {
    if (imageInputRef.current) {
      imageInputRef.current.click();
    }
  };

  const handleAudioChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAudioName(file);
    } else {
      setAudioName("");
    }
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file);
    }
  };
  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("audio", audioName);
    formData.append("image", fileName);
    formData.append("title", title);
    formData.append("artist", artist);
    formData.append("lyrics", lyrics);

    dispatch(uploadFiles(formData));
  };
  useEffect(() => {
    console.log(status);

    if (status === "succeeded") {
      alert("Upload thành công!");
      // Reset các giá trị sau khi upload thành công nếu cầ
      setTitle("");
      setArtist("");
      setLyrics("");
      setAudioName(null);
      setFileName(null);
    }
    if (status === "failed") {
      alert(`Lỗi: ${error}`);
    }
  }, [status, error]);

  return (
    <div className=" w-[100%] h-[100%] flex flex-col">
      <div className=" w-full flex flex-row p-[25px] justify-between">
        <div className="flex flex-row  gap-[25px]">
          <div className=" w-[50px] h-[50px] bg-[#232323] rounded-[100%] flex justify-center items-center cursor-pointer">
            <svg
              width="20"
              height="40"
              viewBox="0 0 20 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.07169 18.8151L12.5 9.38676L14.8567 11.7434L6.60669 19.9934L14.8567 28.2434L12.5 30.6001L3.07169 21.1718C2.75924 20.8592 2.58371 20.4354 2.58371 19.9934C2.58371 19.5515 2.75924 19.1276 3.07169 18.8151Z"
                fill="white"
              />
            </svg>
          </div>
          <button className="w-[200px] h-[50px] bg-[#8F8F8F] rounded-tl-3xl rounded-bl-3xl rounded-tr-3xl rounded-br-3xl flex justify-center items-center text-[24px] text-[white] font-[550]">
            Upload
          </button>
        </div>
        <div className="w-[200px] h-[50px] p-[6px] bg-[#8F8F8F] rounded-tl-3xl rounded-bl-3xl rounded-tr-3xl rounded-br-3xl flex flex-row justify-between items-center ">
          <div className=" text-[white]">Admin</div>
          <div className="w-[30px] h-[30px] flex justify-center items-center ">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.31501 16.3076C9.39146 16.4186 9.49375 16.5094 9.61308 16.5721C9.73241 16.6348 9.8652 16.6676 10 16.6676C10.1348 16.6676 10.2676 16.6348 10.3869 16.5721C10.5063 16.5094 10.6086 16.4186 10.685 16.3076L18.185 5.47425C18.2718 5.3493 18.3227 5.20294 18.3322 5.05109C18.3417 4.89923 18.3094 4.74768 18.2387 4.61291C18.1681 4.47814 18.0619 4.36529 17.9317 4.28663C17.8015 4.20797 17.6522 4.16651 17.5 4.16675H2.50001C2.34821 4.16738 2.19946 4.20937 2.06974 4.28822C1.94003 4.36707 1.83426 4.47978 1.76382 4.61424C1.69337 4.74871 1.66091 4.89983 1.66993 5.05136C1.67895 5.20289 1.72911 5.34909 1.81501 5.47425L9.31501 16.3076Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex flex-col gap-[30px] justify-center items-center pl-[60px] pr-[60px]">
        <div className="flex flex-row justify-center items-center gap-[105px]">
          <div className=" flex flex-col gap-[10px]">
            <p className=" text-[18px] text-[white] font-[550]">Title</p>
            <input
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              className="w-[500px] h-[50px] bg-[#121212] border text-[white] text-[20px] rounded-tl-lg rounded-bl-lg rounded-tr-lg rounded-br-lg outline-none focus:ring-0 pl-[10px] pr-[10px]"
            />
          </div>
          <div className=" flex flex-col gap-[10px]">
            <p className=" text-[18px] text-[white] font-[550]">Artist</p>
            <input
              onChange={(e) => setArtist(e.target.value)}
              type="text"
              className="w-[500px] h-[50px] bg-[#121212] border text-[white] text-[20px] rounded-tl-lg rounded-bl-lg rounded-tr-lg rounded-br-lg outline-none focus:ring-0 pl-[10px] pr-[10px]"
            />
          </div>
        </div>
        <div className="flex flex-row justify-center items-center gap-[105px]">
          <div className=" w-[500px] flex flex-row gap-[10px]">
            <div className="flex flex-col gap-[12px] justify-center">
              <p className=" text-[18px] text-[white] font-[550]">Audio File</p>
              <div className="flex flex-row ">
                <input
                  type="file"
                  className=" text-[white]"
                  onChange={handleAudioChange}
                />
              </div>
            </div>
            <div className="flex flex-col gap-[12px] justify-center">
              <p className="text-[18px] text-[white] font-[550] ">Image</p>
              <div
                onClick={handleImageClick}
                className=" cursor-pointer flex flex-row justify-center items-center "
              >
                <svg
                  width="45"
                  height="45"
                  viewBox="0 0 45 45"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M36.9531 9.65582C37.6961 10.1261 38.3078 10.7769 38.7313 11.5475C39.1548 12.3181 39.3763 13.1833 39.3751 14.0626V30.9376C39.3751 35.5983 35.5983 39.3751 30.9376 39.3751H14.0626C13.1829 39.3752 12.3175 39.1531 11.5465 38.7294C10.7756 38.3057 10.1241 37.6942 9.65261 36.9515L9.84868 36.9612L10.0448 36.9644H30.9376C32.536 36.9644 34.069 36.3294 35.1992 35.1992C36.3294 34.0689 36.9644 32.536 36.9644 30.9376V10.0447C36.9646 9.91502 36.9608 9.78532 36.9531 9.65582ZM20.7837 22.738L20.9331 22.8633L32.871 34.5842C32.0481 35.0909 31.1004 35.3585 30.134 35.3572H10.0448C9.07837 35.3585 8.1307 35.0909 7.30779 34.5842L19.244 22.8633L19.379 22.7508C19.5563 22.6214 19.7655 22.5428 19.9842 22.5235C20.2028 22.5042 20.4226 22.5451 20.6198 22.6415L20.7837 22.738ZM30.134 4.82153C30.82 4.82153 31.4992 4.95664 32.1329 5.21913C32.7666 5.48162 33.3424 5.86636 33.8274 6.35138C34.3124 6.8364 34.6972 7.4122 34.9597 8.04591C35.2222 8.67962 35.3573 9.35883 35.3573 10.0447V30.134C35.3573 31.1417 35.0712 32.0835 34.5778 32.8822L22.6223 21.1437L22.4165 20.9556C21.7668 20.4093 20.9456 20.109 20.0968 20.1072C19.2479 20.1054 18.4255 20.4024 17.7735 20.946L17.5565 21.1437L5.601 32.8806C5.09036 32.0556 4.82039 31.1043 4.82154 30.134V10.0447C4.82154 8.65946 5.37184 7.33092 6.35138 6.35138C7.33092 5.37183 8.65947 4.82153 10.0448 4.82153H30.134ZM26.518 11.6519C26.2495 11.6443 25.9822 11.6906 25.7319 11.7881C25.4816 11.8856 25.2535 12.0323 25.0609 12.2195C24.8683 12.4068 24.7152 12.6307 24.6106 12.8781C24.5061 13.1255 24.4522 13.3914 24.4522 13.66C24.4522 13.9286 24.5061 14.1945 24.6106 14.4419C24.7152 14.6893 24.8683 14.9133 25.0609 15.1005C25.2535 15.2877 25.4816 15.4344 25.7319 15.5319C25.9822 15.6294 26.2495 15.6757 26.518 15.6681C27.0407 15.6533 27.5371 15.4353 27.9016 15.0603C28.2661 14.6853 28.4701 14.183 28.4701 13.66C28.4701 13.1371 28.2661 12.6347 27.9016 12.2597C27.5371 11.8847 27.0407 11.6667 26.518 11.6519Z"
                    fill="white"
                  />
                </svg>
                {/* Hidden input for image */}
                {fileName ? (
                  <p className="text-sm text-[white]"> {fileName.name}</p>
                ) : (
                  <p className=" text-[white]">không có file </p>
                )}
              </div>
              <input
                type="file"
                ref={imageInputRef}
                onChange={handleFileChange}
                style={{ display: "none" }}
              />
            </div>
          </div>
          <div className="flex flex-col gap-[10px]">
            <p className=" text-[18px] text-[white] font-[550]">Lyrics</p>
            <textarea
              onChange={(e) => setLyrics(e.target.value)}
              name=""
              id=""
              className="w-[500px] h-[166px] p-[10px] resize-none bg-[#121212] border text-[white] text-[18px]"
            ></textarea>
          </div>
        </div>
        <button
          onClick={handleSubmit}
          className=" w-[300px] h-[70px] bg-[#00DB0B] mt-[30px] flex justify-center items-center rounded-tl-3xl rounded-bl-3xl rounded-tr-3xl rounded-br-3xl"
        >
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 24L24 6L43 24H31V42H17V24H5Z"
              fill="white"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AdminUploadPage;
