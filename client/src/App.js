import './App.css';
import React,{ useEffect } from 'react';
import { UserProvider } from './contexts/UserContext';
import MainRoute from './routes/routes';
import { useDispatch,useSelector } from "react-redux";
import { current } from './redux/features/counter/currentSlice';
import { useNavigate,useLocation  } from "react-router";


function App() {
  const reduxDispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
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
      if (data.role === "admin") {
        if (!location.pathname.startsWith("/admin")) {
          navigate("/admin");
        }
      } else {
        if (location.pathname.startsWith("/admin")) {
          navigate("/");
        }
      }
    }
  }, [status, data, error, navigate, location]);
  return (
    <div className="App">
      <UserProvider>
        <MainRoute />
      </UserProvider>
    </div>
  );
}

export default App;
