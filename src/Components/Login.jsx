import React, { useState } from "react";
import { Zoom, toast } from 'react-toastify';
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
import soundErr from '/public/livechat-129007.mp3'
import sound from '/public/level-up-191997.mp3'
import { Link, useNavigate } from "react-router-dom";
import "./Styles/Login.css";

const Login = () => {
  const[password,setPassword]=useState('')
  const[email,setEmail]=useState('')
  const[responseMsg,setResponseMsg]=useState('')
  const [loading, setLoading] = useState(false); // Add loading state

    const navigate = useNavigate();

    const handleForgetPasswordClick = () => {
        navigate("/forgetpassword");
    }

    const navigateRegister = useNavigate()
    const handleRegisterPage=()=>{
      navigateRegister('/register')
    }
  
  const successNotificationSound = () => {
    const audio = new Audio(sound);
    audio.play();
  };
  const errorNotificationSound = () => {
    const audio = new Audio(soundErr);
    audio.play();
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when form is submitted
    console.log("login payloads:", email,password);
    const payloads = {email, password };
    try {
      const response = await axios.post('https://reset-password-backend-x4pn.onrender.com/user/login', payloads);
      toast.success(response.data.msg, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        onOpen:successNotificationSound,
        transition: Zoom,
        });
    // Reset form fields after successful submission
    setEmail('');
    setPassword('');
    } catch (error) {
      console.error(setResponseMsg(error.response.data.msg));
      // Display toast message for error
      toast.error(responseMsg, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        onOpen:errorNotificationSound,
        transition: Zoom,
      });
    }
  };
  return (
    <div>
      <form className="login" onSubmit={handleSubmit}>
        <div className="form bg-dark text-white">
          <h2 className="log-title p-3">Welcome back to App</h2>
          <p className="para m-5">Log in to your account</p>
          <hr />
          <div className="col">
            <div className="row g-3 p-3 ">
              <div className="col d-flex justify-content-start">
                <label
                  className="col-form-label fs-5 p-1"
                  style={{ fontWeight: "700" }}
                >
                  <i
                    className="fa-solid fa-envelope"
                    style={{color:'#183153'}}
                  ></i>{" "}
                  E-mail
                </label>
              </div>
              <div className="col-12">
                <input
                  type="text"
                  className="form-control "
                  placeholder="example@gmail.com"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="row g-3 p-3 ">
              <div className="col d-flex justify-content-start">
                <label
                  className="col-form-label fs-5"
                  style={{ fontWeight: "700" }}
                >
                  <i
                    className="fa-solid fa-lock"
                    style={{color:'#183153'}}
                  ></i>{" "}
                  Password:
                </label>
              </div>
              <div className="col-12">
                <input
                  placeholder="password"
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="forget d-flex justify-content-end">
            <Link to="/login" onClick={handleForgetPasswordClick}>
                Forget Password?
            </Link>
            </div>
            <div className="btns d-flex justify-content-center p-4">
              <button className="log-btn" type="submit">
                <span>LOG IN</span>
              </button>
            </div>
            <div className="forget d-flex justify-content-center p-2 mb-3">
              <label className="reg-txt">Don’t have an account yet?</label>
              <Link
                className="reg-txt"
                to="/register"
                onClick={handleRegisterPage}
              >
                Sign up for free!
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
