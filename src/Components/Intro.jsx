import React from "react";
import "./Styles/intro.css";
import { useNavigate } from "react-router-dom";

const Intro = () => {
    const navigate = useNavigate()
    const handleRegisterPage = () => {
        navigate('/register')
    }

    const loginNavigate = useNavigate()

    const handleLogin = () => {
        loginNavigate("/login");
    }
    return (
        <div>
            <button className="continue-application m-5" onClick={handleRegisterPage}>
                <div>
                    <div className="pencil"></div>
                    <div className="folder">
                        <div className="top">
                            <svg viewBox="0 0 24 27">
                                <path d="M1,0 L23,0 C23.5522847,-1.01453063e-16 24,0.44771525 24,1 L24,8.17157288 C24,8.70200585 23.7892863,9.21071368 23.4142136,9.58578644 L20.5857864,12.4142136 C20.2107137,12.7892863 20,13.2979941 20,13.8284271 L20,26 C20,26.5522847 19.5522847,27 19,27 L1,27 C0.44771525,27 6.76353751e-17,26.5522847 0,26 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 Z"></path>
                            </svg>
                        </div>
                        <div className="paper"></div>
                    </div>
                </div>
                Click Me For Register user
            </button>
            <h2>Click Login for existing User</h2>
            <button class="cta p-5" onClick={handleLogin}>
                <span class="hover-underline-animation" style={{fontWeight:'700'}}> Log In </span>
                <svg
                    id="arrow-horizontal"
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="10"
                    viewBox="0 0 46 16"
                    fill="white"
                >
                    <path
                        id="Path_10"
                        data-name="Path 10"
                        d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                        transform="translate(30)"
                    ></path>
                </svg>
            </button>

            <div className="card h-100 p-5 bg-dark text-white" id="container">
                <div className="row">
                    <div className="col">
                        <h1 className="title-content p-3">
                            This App is specially made for User Management
                        </h1>
                        <div className="accordion accordion-flush" id="accordionFlushExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed bg-success fs-3"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseOne"
                                        aria-expanded="false"
                                        aria-controls="flush-collapseOne"
                                    >
                                        Register user
                                    </button>
                                </h2>
                                <div
                                    id="flush-collapseOne"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#accordionFlushExample"
                                >
                                    <div className="accordion-body">
                                        This is the process by which users create accounts on your
                                        platform. It typically involves collecting user information
                                        such as username, email, and password, and then storing this
                                        information securely in a database.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed  bg-info fs-3"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseTwo"
                                        aria-expanded="false"
                                        aria-controls="flush-collapseTwo"
                                    >
                                        User Login
                                    </button>
                                </h2>
                                <div
                                    id="flush-collapseTwo"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#accordionFlushExample"
                                >
                                    <div className="accordion-body">
                                        <li>
                                            Design a login form where users can input their
                                            credentials (e.g., username/email and password) to
                                            authenticate themselves.
                                        </li>
                                        <li>
                                            {" "}
                                            Validate the user inputs on the client-side to ensure they
                                            meet basic requirements (e.g., non-empty fields).
                                        </li>
                                        <li>
                                            When the user submits the login form, the client sends the
                                            entered credentials securely to the server. This can be
                                            done using HTTP POST requests.
                                        </li>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed bg-warning fs-3"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseThree"
                                        aria-expanded="false"
                                        aria-controls="flush-collapseThree"
                                    >
                                        Forget Password
                                    </button>
                                </h2>
                                <div
                                    id="flush-collapseThree"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#accordionFlushExample"
                                >
                                    <div className="accordion-body">
                                        <li>
                                            Provide a form or mechanism for users to request a
                                            password reset. Typically, this involves asking the user
                                            to enter their email address.
                                        </li>
                                        <li>
                                            Use an email service (e.g., Nodemailer in Node.js) to send
                                            an email to the user's email address.
                                        </li>
                                        <li>
                                            The email should contain a link with the password reset
                                            token appended to the URL as a query parameter or included
                                            in the URL path. For example:
                                            <code>
                                                https://example.com/reset-password?token=abcdef123456
                                            </code>
                                        </li>
                                        <li>
                                            The email should also provide instructions for the user on
                                            how to proceed with the password reset process.
                                        </li>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed bg-primary fs-3"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseThree"
                                        aria-expanded="false"
                                        aria-controls="flush-collapseThree"
                                    >
                                        Password Reset
                                    </button>
                                </h2>
                                <div
                                    id="flush-collapseThree"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#accordionFlushExample"
                                >
                                    <div className="accordion-body">
                                        <li>
                                            <strong>Receive Password Reset Request:</strong> Provide a
                                            form or endpoint where users can request a password reset
                                            by providing their email address.
                                        </li>
                                        <li>
                                            <strong>Generate Token:</strong> When a password reset
                                            request is received, generate a unique token or code. This
                                            token will be used to verify the authenticity of the
                                            password reset request.
                                        </li>
                                        <li>
                                            <strong>Associate Token with User:</strong> Store the
                                            token along with the user's email address and an
                                            expiration timestamp in a database or temporary storage.
                                        </li>
                                        <li>
                                            <strong>Send Email:</strong> Use an email service to send
                                            an email to the user's email address. The email should
                                            contain a link with the password reset token appended to
                                            the URL as a query parameter or included in the URL path.
                                        </li>
                                        <li>
                                            <strong>User Clicks Reset Link:</strong> The user receives
                                            the email and clicks on the password reset link. This
                                            action will take the user to a password reset page in your
                                            application.
                                        </li>
                                        <li>
                                            <strong>Reset Password Page:</strong> Provide a form where
                                            users can enter their new password. Include fields for
                                            confirming the new password.
                                        </li>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Intro;
