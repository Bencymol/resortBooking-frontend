import { SiYourtraveldottv } from "react-icons/si";
import axios from "../../utils/axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { saveCreds } from "../../utils/index";
import { useState } from "react";

import "./login.scss";

const Login = () => {
  const navigate = useNavigate();
  const [cred, setCred] = useState({ email: "", password: "" });

  const onChange = (e, key) => {
    setCred({ ...cred, [key]: e.target.value });
    console.log(cred);
  };
  const onLoginBtnClick = async () => {
    try {
      const response = await axios.post("/login", cred);
      console.log(response);
      saveCreds(response.data.token);
      if (localStorage.getItem("role") == "USER") {
        navigate("/user/home");
      } else {
        // navigate("/admin/home");
      }
    } catch (e) {
      toast.error(e.response.data.message);
    }
  };
  return (
    <div className="login">
      <ToastContainer />
      <div className="loginLogoDiv">
        <a href="#" className="logo">
          <h1 className="flex">
            <SiYourtraveldottv className="icon" />
            ResortRover
          </h1>
        </a>
        <div className="loginText">
          <p className="subTitle">
            Elevate your senses, indulge in serenity, and let the rhythm of
            nature be the soundtrack to your retreat.
          </p>
        </div>
      </div>
      <div className="loginDiv">
        <div className="loginCard grid">
          <div className="usernameDiv commDiv">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              placeholder="Enter your email"
              className="formInput"
              onChange={e => onChange(e, "email")}
            />
          </div>

          <div className="passwordDiv commDiv">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="formInput"
              onChange={e => onChange(e, "password")}
            />
          </div>
          <div className="btnDiv">
            <button className="btn" onClick={onLoginBtnClick}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
