import React, { useEffect,useState } from "react";
import { Zoom, toast } from 'react-toastify';
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
import soundErr from '/public/livechat-129007.mp3'
import sound from '/public/level-up-191997.mp3'
import { useNavigate } from "react-router-dom";


const Register = () => {
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [password, setPassword] = useState('')
  const [resMsg, setResMsg] = useState('')
  const [loading, setLoading] = useState(false); // Add loading state

  const navigate = useNavigate()
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
    console.log("Register payloads:", userName, email, phoneNumber, password);
    const payloads = { userName, email, phoneNumber, password };
    try {
      const response = await axios.post('https://reset-password-backend-x4pn.onrender.com/user/register', payloads);
      toast.success(response.data.msg, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        onOpen: successNotificationSound,
        transition: Zoom,
      });
      // Reset form fields
     
          setUserName('');
          setEmail('');
          setPassword('');
          setPhoneNumber('');
          setResMsg('');
       

      // Update state or perform any other actions if needed
      setResMsg(response.data.msg);
      // Redirect to login page after successful registration
      navigate('/login');

    } catch (error) {
      console.error(error);
      // Display toast message for error
      toast.error('Registration failed. Please try again later.', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        onOpen: errorNotificationSound,
        transition: Zoom,
      });
    }

  };

  return (
    <div className="register">
      <form className="login" onSubmit={handleSubmit}>
        <div className="form bg-dark text-white">
          <h1 className="log-title p-3">
            <i className="fa-solid fa-user" style={{ color: "#D3F172" }}></i>{" "}
            Register User
          </h1>
          <hr />
          <div className="col">
            <div className="row g-3 p-3 ">
              <div className="col d-flex justify-content-start">
                <label
                  className="col-form-label fs-5 p-1"
                  style={{ fontWeight: "700" }}
                >
                  <i
                    className="fa-solid fa-address-card"
                    style={{ color: "#183153" }}
                  ></i>{" "}
                  User Name:
                </label>
              </div>
              <div className="col-12">
                <input
                  type="text"
                  className="form-control p-2"
                  placeholder="Enter Your Name"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="row g-3 p-3 ">
              <div className="col d-flex justify-content-start">
                <label
                  className="col-form-label fs-5 p-1"
                  style={{ fontWeight: "700" }}
                >
                  <i
                    className="fa-solid fa-envelope"
                    style={{ color: "#183153" }}
                  ></i>{" "}
                  E-mail:
                </label>
              </div>
              <div className="col-12">
                <input
                  type="text"
                  className="form-control d-flex justify-content-end"
                  placeholder="example@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="row g-3 p-3 ">
              <div className="col d-flex justify-content-start">
                <label
                  className="col-form-label fs-5 p-1"
                  style={{ fontWeight: "700" }}
                >
                  <i
                    className="fa-solid fa-tty"
                    style={{ color: "#183153" }}
                  ></i>{" "}
                  Mobile Number:
                </label>
              </div>
              <div className="col-12">
                <input
                  type="text"
                  className="form-control d-flex justify-content-end"
                  placeholder="Enter Your Mobile Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
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
                    style={{ color: "#183153" }}
                  ></i>{" "}
                  Password:
                </label>
              </div>
              <div className="col-12">
                <input
                  placeholder="password"
                  type="Password"
                  id="inputPassword6"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="btns d-flex justify-content-center p-4">
              <button type='submit' className="log-btn">
                <span>Register Now</span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
