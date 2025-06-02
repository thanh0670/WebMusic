import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { dataAdmin } from "../../redux/features/counter/valueAdminSlice";
import { putFiles } from "../../redux/features/API/putAudio";
import {
  Svg1,
  Svg2,
  Svg3,
  Svg4,
  Svg5,
} from "./components/svgOfAdminManagerPage";
import { deleteAudio } from "../../redux/features/API/deleteAudio";
import { useNavigate } from "react-router";

const AdminManagerPage = () => {
  const navigate = useNavigate();

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
  const statusPut = useSelector((state) => state.putAudio.status);

  const statusDelete = useSelector((state) => state.deleteAudio.status);

  const fileInputRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentStatus === "successed" && currentUser) {
      dispatch(dataAdmin());
    }
  }, [currentStatus, currentUser, dispatch]);

  useEffect(() => {
    if (state) {
      setTitle(state.title || "");
      setArtist(state.artist || "");
      setLyrics(state.lyrics || "");
    }
  }, [state]);
  useEffect(() => {
    console.log(statusDelete);
  }, [statusDelete]);

  useEffect(() => {
    if (status === "successed" && data?.songs) {
      // Tìm bài hát với _id khớp với id từ URL
      const song = data.songs.find((item) => item._id === id);
      setState(song); // Cập nhật state với bài hát tìm được
    }
  }, [status, data, id]);
  useEffect(() => {
    console.log(state);
    console.log(state?._id);
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

  const handleDeleteAudio = (id) => {
    if (window.confirm("Bạn có chắc muốn xoá bài nhạc này không?")) {
      dispatch(deleteAudio({ id: state?._id }));
    }
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
  if (statusPut === "loading") {
    return <div className=" text-[white] ">Đang tải dữ liệu...</div>;
  }
  if (statusPut === "failed" || !state) {
    return <div className=" text-[white]">Không tìm thấy bài hát.</div>;
  }
  if (statusDelete === "loading") {
    return <div className=" text-[white] ">Đang xóa...</div>;
  }
  if (statusDelete === "succeeded") {
    alert("xoa thanh cong");
    navigate(-1);
  }
  return (
    <div className=" w-[100%] h-[100%] flex flex-col overflow-auto">
      <div className=" w-full flex flex-row p-[25px] justify-between">
        <div className="flex flex-row  gap-[25px]">
          <Svg2 />
          <button className="w-[200px] h-[50px] bg-[#8F8F8F] rounded-tl-3xl rounded-bl-3xl rounded-tr-3xl rounded-br-3xl flex justify-center items-center text-[24px] text-[white] font-[550]">
            Manage
          </button>
        </div>
        <div className="w-[200px] h-[50px] p-[6px] bg-[#8F8F8F] rounded-tl-3xl rounded-bl-3xl rounded-tr-3xl rounded-br-3xl flex flex-row justify-between items-center ">
          <div className=" text-[white]">Admin</div>
          <Svg1 />
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
              <Svg3 />
            </button>
          </div>
          <audio
            className="min-h-[70px] w-[448px]"
            src={state.url_audio}
            controls
          />
          <div className="w-[450px] min-h-[100px] bg-[#212121] flex justify-center items-center text-[white]">
            <div className=" cursor-pointer" onClick={handleDeleteAudio}>
              <Svg4 />
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
            <Svg5 />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminManagerPage;
