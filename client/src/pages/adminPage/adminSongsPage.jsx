import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dataAdmin } from "../../redux/features/counter/valueAdminSlice";
import { useNavigate } from "react-router";

const AdminSongsPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentUser = useSelector((state) => state.current.response);
  const currentStatus = useSelector((state) => state.current.status);
  const status = useSelector((state) => state.admin.status);
  const data = useSelector((state) => state.admin.response);
  const error = useSelector((state) => state.admin.error);

  useEffect(() => {
    if (currentStatus === "successed" && currentUser) {
      dispatch(dataAdmin());
    }
  }, [currentStatus, currentUser, dispatch]);

  useEffect(() => {
    if (currentStatus === "failed") {
      navigate("/"); // chỉ navigate nếu chắc chắn currentUser failed
    }
  }, [currentStatus, navigate]);

  if (currentStatus === "loading") {
    return <div>Đang kiểm tra đăng nhập...</div>;
  }
  if (status === "successed") {
    console.log(data?.songs);
    console.log("hello");
  } else {
    console.log(error);
  }

  return (
    <div className="w-[100%] h-[100%] overflow-auto">
      <div className="p-[69px] grid grid-cols-3 gap-y-[150px]">
        {data?.songs.map((item, index) => {
          return (
            <div
              onClick={() => navigate(`/admin/manage/${item._id}`)}
              key={index}
              className="flex flex-col gap-[5px] cursor-pointer"
            >
              <img
                src={item.url_img}
                alt=""
                className="w-[200px] h-[200px] object-cover"
              />
              <p className=" text-[18px] text-[white] font-[550]">
                {item.title}
              </p>
              <p className=" text-[16px] text-[#B0B0B0]">{item.artist}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdminSongsPage;
