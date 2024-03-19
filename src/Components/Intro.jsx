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
                <span className="fs-5">Click Me For Register user</span>
            </button><br />
            <h2 className="log-title text-center">Click Login for existing User</h2>
            <div class="btn-conteiner p-5" onClick={handleLogin}>
                <a class="btn-content" href="#">
                    <span class="btn-title">LOG IN</span>
                    <span class="icon-arrow">
                        <svg width="66px" height="43px" viewBox="0 0 66 43" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <g id="arrow" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <path id="arrow-icon-one" d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z" fill="#FFFFFF"></path>
                                <path id="arrow-icon-two" d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z" fill="#FFFFFF"></path>
                                <path id="arrow-icon-three" d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z" fill="#FFFFFF"></path>
                            </g>
                        </svg>
                    </span>
                </a>
            </div>

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
