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
  const status = useSelector((state) => state.counter.status);
  const data = useSelector((state) => state.counter.response);

  useEffect(()=>{
    reduxDispatch( current())    
  },[reduxDispatch])
  
  
  useEffect(() => {
    if (status === "successed") {
      if (data.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/home");
      }
    }
  }, [status, data, navigate]);
  return (
    <div className="App">
      <UserProvider>
        <MainRoute />
      </UserProvider>
    </div>
  );
}

export default App;
