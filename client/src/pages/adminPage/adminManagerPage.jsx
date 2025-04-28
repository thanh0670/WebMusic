import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { dataAdmin } from "../../redux/features/counter/valueAdminSlice";
import { putFiles } from "../../redux/features/API/putAudio";

const AdminManagerPage = () => {
  const { id } = useParams();
  const [state, setState] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [lyrics, setLyrics] = useState("");
  const [fileName, setFileName] = useState(null);

  const currentUser = useSelector((state) => state.current.response);
  const currentStatus = useSelector((state) => state.current.status);
  const status = useSelector((state) => state.admin.status);
  const data = useSelector((state) => state.admin.response);

  const fileInputRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentStatus === "successed" && currentUser) {
      dispatch(dataAdmin());
    }
  }, [currentStatus, currentUser, dispatch]);
  useEffect(() => {
    if (status === "successed" && data?.songs) {
      // Tìm bài hát với _id khớp với id từ URL
      const song = data.songs.find((item) => item._id === id);
      setState(song); // Cập nhật state với bài hát tìm được
    }
  }, [status, data, id]);
  useEffect(() => {
    console.log(state);
  }, [state]);
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreviewImage(URL.createObjectURL(file)); // lấy url tạm cho ảnh
      setFileName(file);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click(); // bấm nút thì kích hoạt chọn file
  };
  const handleUpdateContent = async () => {
    const formDataUpdate = new FormData();

    if (title && title !== state.title) {
      formDataUpdate.append("title", title);
    }
    if (artist && artist !== state.artist) {
      formDataUpdate.append("artist", artist);
    }
    if (lyrics && lyrics !== state.lyrics) {
      formDataUpdate.append("lyrics", lyrics);
    }
    if (fileName) {
      formDataUpdate.append("image", fileName);
    }

    if ([...formDataUpdate.entries()].length === 0) {
      alert("Bạn chưa thay đổi gì để cập nhật!");
      return;
    }

    try {
      await dispatch(putFiles({ id, formData: formDataUpdate })).unwrap();
      alert("Cập nhật thành công!");
      window.location.reload();
    } catch (error) {
      console.error(error);
      alert("Cập nhật thất bại!");
    }
  };
  if (status === "loading") {
    return <div>Đang tải dữ liệu...</div>;
  }
  if (status === "failed" || !state) {
    return <div>Không tìm thấy bài hát.</div>;
  }
  return (
    <div className=" w-[100%] h-[100%] flex flex-col overflow-auto">
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
            Manage
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
      <div className="flex flex-row justify-between p-[32px] overflow-y-auto ">
        <div className="flex flex-col gap-[100px] ">
          <div className="w-[450px] h-[560px] bg-[#212121] flex flex-col gap-[18px] p-[25px] rounded-tl-xl rounded-bl-xl rounded-tr-xl rounded-br-xl ">
            <p className=" text-[28px] text-[white] font-[550]">Image</p>
            <div className=" flex flex-row gap-[25px] relative justify-center items-center">
              <div className="flex flex-col gap-[9px] relative w-[400px] h-[400px]">
                {/* Ảnh */}
                <img
                  src={previewImage || state.url_img}
                  alt="Ảnh bài hát"
                  className="w-full h-full object-cover rounded-lg"
                />

                {/* Nút overlay */}
                <button
                  onClick={handleButtonClick}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                       bg-black bg-opacity-50 text-white px-4 py-2 rounded-lg hover:bg-opacity-70"
                >
                  Thay ảnh
                </button>

                {/* Input file hidden */}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </div>
            </div>
            <button
              onClick={handleUpdateContent}
              className=" w-[400px] h-[40px]  border border-[#B0B0B0] flex justify-center items-center  rounded-tl-3xl rounded-bl-3xl rounded-tr-3xl rounded-br-3xl"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.5 12L12 3L21.5 12H15.5V21H8.5V12H2.5Z"
                  fill="white"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <audio className="min-h-[70px]" src={state.url_audio} controls />
          <div className="w-[450px] min-h-[100px] bg-[#212121] flex justify-center items-center text-[white]">
            <div className=" cursor-pointer">
              <svg
                width="70"
                height="70"
                viewBox="0 0 70 70"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5002 55.4167C17.5002 58.625 20.1252 61.25 23.3335 61.25H46.6668C49.8752 61.25 52.5002 58.625 52.5002 55.4167V20.4167H17.5002V55.4167ZM55.4168 11.6667H45.2085L42.2918 8.75H27.7085L24.7918 11.6667H14.5835V17.5H55.4168V11.6667Z"
                  fill="#FF3636"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className=" w-[600px] h-[930px] flex flex-col p-[28px] gap-[31px] bg-[#212121]">
          <p className=" text-[30px] text-[white] font-[550]">General</p>
          <div className="flex flex-col gap-[17px]">
            <p className=" text-[24px] text-[white] ">Song name</p>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              className="w-[550px] h-[70px] bg-[#121212] border text-[white] text-[20px] rounded-tl-lg rounded-bl-lg rounded-tr-lg rounded-br-lg outline-none focus:ring-0 pl-[10px] pr-[10px]"
            />
          </div>
          <div className="flex flex-col gap-[17px]">
            <p className=" text-[24px] text-[white] ">Artist</p>
            <input
              value={artist}
              onChange={(e) => setArtist(e.target.value)}
              type="text"
              className="w-[550px] h-[70px] bg-[#121212] border text-[white] text-[20px] rounded-tl-lg rounded-bl-lg rounded-tr-lg rounded-br-lg outline-none focus:ring-0 pl-[10px] pr-[10px]"
            />
          </div>
          <div className="flex flex-col gap-[17px]">
            <p className=" text-[24px] text-[white] font-[550]">Lyrics</p>
            <textarea
              value={lyrics}
              onChange={(e) => setLyrics(e.target.value)}
              name=""
              id=""
              className="w-[550px] h-[250px] p-[10px] resize-none bg-[#121212] border text-[white] text-[18px]"
            ></textarea>
          </div>
          <button
            onClick={handleUpdateContent}
            className=" w-[550px] h-[80px] bg-[#00DB0B] mt-[30px] flex justify-center items-center rounded-tl-3xl rounded-bl-3xl rounded-tr-3xl rounded-br-3xl"
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
    </div>
  );
};

export default AdminManagerPage;
