import React,{useEffect} from 'react';
import { useDispatch,useSelector } from "react-redux";
import { dataAdmin } from '../../redux/features/counter/valueAdminSlice';
import { useNavigate } from "react-router";

const AdminPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const currentUser = useSelector((state) => state.current.response); 
  const currentStatus = useSelector(state => state.current.status); 
  const status = useSelector(state => state.admin.status);
  const data = useSelector((state) => state.admin.response);
  const error = useSelector((state) => state.admin.error);

  useEffect(() => {
    if (currentStatus === "successed" && currentUser) {  
          dispatch(dataAdmin());
      }
  }, [currentStatus, currentUser, dispatch]);  

  useEffect(() => {
    if (currentStatus === "failed") {
      navigate("/");  // chỉ navigate nếu chắc chắn currentUser failed
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
        <div>
            {data?.songs.map((item,index)=>{
                return(
                <div key={index}>
                    <audio controls src={item.url_audio}></audio>
                   <br/>
                    <img src={item.url_img} alt="" />
                </div>)
            })}
        </div>
    );
}

export default AdminPage;
