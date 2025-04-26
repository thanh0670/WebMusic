import './App.css';
import React,{ useEffect } from 'react';
import { UserProvider } from './contexts/UserContext';
import MainRoute from './routes/routes';
import { useDispatch,useSelector } from "react-redux";
import { current } from './redux/features/counter/currentSlice';
import { useNavigate } from "react-router";


function App() {
  const reduxDispatch = useDispatch();
  const navigate = useNavigate();
  const status = useSelector((state) => state.current.status);
  const data = useSelector((state) => state.current.response);
  const error = useSelector((state) => state.current.error);


  useEffect(()=>{
    reduxDispatch( current())    
  },[reduxDispatch])
  
  useEffect(()=>{
    if(status ==="failed"){
      navigate("/")
    }
  },[])
  
  useEffect(() => {
    if (data && status === "successed") {
      console.log(data.role);
      
      if (data.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }
    }
  }, [status, data, error, navigate]);
  return (
    <div className="App">
      <UserProvider>
        <MainRoute />
      </UserProvider>
    </div>
  );
}

export default App;
