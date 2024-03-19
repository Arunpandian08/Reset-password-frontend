import React, { useEffect, useState } from "react";
import { Zoom, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import soundErr from "/public/livechat-129007.mp3";
import sound from "/public/level-up-191997.mp3";
import { useNavigate, useParams } from 'react-router-dom';
import './Styles/ResetPassword.css'



const ResetPassword = () => {
    const [email, setEmail] = useState("");//manage state for mail field
    const [newPassword, setNewPassword] = useState("");//manage state for new password field
    const [conformPassword, setConformPassword] = useState("");// manage state for conform password
    const [loading, setLoading] = useState(false); // Add loading state
    const [tokenValid, setTokenValid] = useState(false);
    const { token } = useParams();
    const navigate = useNavigate()

    const handleLogin = () => {
        navigate("/login");
    }

    const successNotificationSound = () => {
        const audio = new Audio(sound);
        audio.play();
    };
    const errorNotificationSound = () => {
        const audio = new Audio(soundErr);
        audio.play();
    };

 useEffect(() => {
 // validate token
const validateToken = async () => {
    console.log("token checking");
            try {
                const response = await axios.get(`http://localhost:4000/user/validate-token/${token}`);
                if (response.data.valid) {
                    setTokenValid(true);
                } else {
                    toast.error("Invalid token", {
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
                    navigate("/"); // Redirect to homepage if token is invalid
                }
            } catch (error) {
                console.error("Error validating token:", error);
            }
        };

        validateToken();
    }, [token, navigate]);

//handle submit
const handleSubmit = async (e) => {
        e.preventDefault();
        // Set loading to true when form is submitted
        setLoading(true);
        const payloads = { email, newPassword, conformPassword, token };
        console.log("Reset payloads:", email, newPassword, conformPassword, token);
        try {
            const response = await axios.post(
                `https://reset-password-backend-x4pn.onrender.com/user/resetpassword`,
                payloads
            );
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
            navigate('/')
            // Reset form fields after successful submission
            setEmail("");
            setNewPassword("");
            setConformPassword("");
        } catch (error) {
            console.error(error);
            // Display toast message for error
            toast.error(error.response.data.msg || 'An error occurred', { // Update this line
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
        } finally {
            setLoading(false); // Reset loading state after request is completed
        }

       
    };
    return (
        <div>
            <form className="form1 p-5" onSubmit={handleSubmit} >
                <p className="title">Password Reset </p>
                <p className="message">Don't worry about it.Let's Set a New Password </p>
                <label className='p-1'>
                    <input className="input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <span>Email</span>
                </label>

                <label className='p-1'>
                    <input className="input" type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
                    <span>New Password</span>
                </label>
                <label className='p-1'>
                    <input className="input" type="password" value={conformPassword} onChange={(e) => setConformPassword(e.target.value)} required />
                    <span>Confirm password</span>
                </label>
                <button className="submit" type='submit'>
                    {loading ? (
                        <div className="loader">
                            <p className="heading">Loading</p>
                            <div className="loading">
                                <div className="load"></div>
                                <div className="load"></div>
                                <div className="load"></div>
                                <div className="load"></div>
                            </div>
                        </div>
                    ) : 'Submit'}
                </button>

                <p className="signin p-2">Move to Re-Login<a href="#" onClick={handleLogin}>Login?</a> </p>
            </form>
        </div>
    );
};

export default ResetPassword;