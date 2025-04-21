import React,{useEffect} from 'react';
import { useDispatch,useSelector } from "react-redux";
import { dataAdmin } from '../../redux/features/counter/valueAdminSlice';

const AdminPage = () => {
    const dispatch = useDispatch();
    const status = useSelector(state => state.counter.status);
    const data = useSelector((state) => state.admin.response);
    const error = useSelector((state) => state.counter.error);
    if(status ==="successed"){
        console.log(data?.songs);
      }else {
        console.log(error);
      }

    useEffect(() => {
        dispatch(dataAdmin());
      }, [dispatch]);

  
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
