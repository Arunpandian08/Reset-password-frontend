import React, { useState } from "react";
import { Zoom, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import soundErr from "/public/livechat-129007.mp3";
import sound from "/public/level-up-191997.mp3";
import { Navigate, useNavigate } from "react-router-dom";
import "./Styles/forget.css";

const ForGet = () => {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false); // Add loading state
    const [responseMsg, setResponseMsg] = useState("");
    const navigate = useNavigate()

    const handleSignup = () => {
        navigate("/register");
    }
    const handleRe = () => {
        navigate("/resetpassword");
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
        console.log("forget payloads:", email);
        const payloads = { email };
        try {
            const response = await axios.post(
                "https://reset-password-backend-x4pn.onrender.com/user/forgetpassword",
                payloads
            );
            toast.success(response.data.msg, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                onOpen: successNotificationSound,
                transition: Zoom,
            });
            // Reset form fields after successful submission
            setEmail('')
        } catch (error) {
            console.error(setResponseMsg(error.response.data.msg));
            // Display toast message for error
            toast.error(responseMsg, {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                onOpen: errorNotificationSound,
                transition: Zoom,
            });
        } finally {
            setLoading(false); // Reset loading state after request is completed
        }

        
    };
    return (
        <div className="form-container">
            <div className="log-title">
            <h3><i className="fa-solid fa-face-grin-beam-sweat fa-2xl p-4" style={{color: '#183153' }}></i></h3>
                <h3>Forgot Password</h3>
            </div>

            <form className="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label
                        className="col-form-label fs-5 p-1"
                        style={{ fontWeight: "700" }}
                    >
                        <i
                            className="fa-solid fa-envelope"
                            style={{ color: "#183153" }}
                        ></i>{" "}
                        E-mail
                    </label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <button className="form-submit-btn" type="submit" disabled={loading}>
                    {loading ? <div className="loader">
                        <p className="heading">Loading</p>
                        <div className="loading">
                            <div className="load"></div>
                            <div className="load"></div>
                            <div className="load"></div>
                            <div className="load"></div>
                        </div>
                    </div> : 'Send Email'} {/* Show loading text when loading is true */}
                </button>
            </form>
            <p className="signup-link">
                Don't have an account?
                <a href="#" className="signup-link link" onClick={handleSignup}>
                    {" "}
                    Sign up now
                </a>
            </p>
            <p className="signup-link">
            Click For Reset Password
            <a href="#"  className="signup-link link" onClick={handleRe}>{" "}Reset New password</a>
            </p>
        </div>
    );
};

export default ForGet;
