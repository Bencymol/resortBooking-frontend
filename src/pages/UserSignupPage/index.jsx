import { useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import axios from "../../utils/axios";
import { saveCreds } from "../../utils";
import "./usersignup.scss";
import { useNavigate } from "react-router-dom";

const UserSignup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    emailVerify: "",
    country: "",
    address: "",
    city: "",
    postalCode: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const onInputChange = (e, key) => {
    setUser({ ...user, [key]: e.target.value });
  };

  const onJoinClick = async () => {
    const response = await axios.post("user/signup", user);
    saveCreds(response.data.token);
    navigate("/user/home");
  };
  return (
    <div className="signup">
      <div className="nav-div">
        <Navbar />
      </div>

      <div className="signupContainer ">
        <div className="join-quote">
          <h1>Join RiverRover One Rewards</h1>
        </div>
        <div className="signup-form grid">
          <div className="nameDiv inputComm">
            <label htmlFor="name">Name</label>
            <input
              name={user.name}
              type="text"
              onChange={e => {
                onInputChange(e, "name");
              }}
            />
          </div>
          <div className="emailDiv inputComm">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name={user.email}
              placeholder="someone@example.com"
              onChange={e => {
                onInputChange(e, "email");
              }}
            />
          </div>
          <div className="emailVerifyDiv inputComm">
            <label htmlFor="emailVerify">Verify Email</label>
            <input
              type="text"
              name={user.emailVerify}
              placeholder="someone@example.com"
              onChange={e => {
                onInputChange(e, "emailVerify");
              }}
            />
          </div>
          <div className="countryDiv inputComm">
            <label htmlFor="country">Country</label>
            <input
              type="text"
              name={user.country}
              onChange={e => {
                onInputChange(e, "country");
              }}
            />
          </div>
          <div className="addressDiv inputComm">
            <label htmlFor="address">Address</label>
            <textarea
              type="text"
              name={user.address}
              className="formInput"
              onChange={e => {
                onInputChange(e, "address");
              }}
            />
          </div>
          <div className="cityDiv inputComm">
            <label htmlFor="city">City</label>
            <input
              type="text"
              name={user.city}
              className="formInput"
              onChange={e => {
                onInputChange(e, "city");
              }}
            />
          </div>
          <div className="postalCodeDiv inputComm">
            <label htmlFor="po">Postal Code</label>
            <input
              type="nubmer"
              name={user.postalCode}
              className="formInput"
              onChange={e => {
                onInputChange(e, "postalCode");
              }}
            />
          </div>
          <div className="phoneDiv inputComm">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="number"
              name={user.phone}
              className="formInput"
              onChange={e => {
                onInputChange(e, "phone");
              }}
            />
          </div>
          <div className="passwordDiv inputComm">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name={user.password}
              className="formInput"
              onChange={e => {
                onInputChange(e, "password");
              }}
            />
          </div>
          <div className="confirmPasswordDiv inputComm">
            <label htmlFor="cfpassword">Confirm Password</label>
            <input
              type="password"
              name={user.confrimPassword}
              className="formInput"
              onChange={e => {
                onInputChange(e, "confirmPassword");
              }}
            />
          </div>
          <button className="btn" onClick={onJoinClick}>
            Join Now
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserSignup;
