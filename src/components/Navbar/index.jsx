import { SiYourtraveldottv } from "react-icons/si";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { useState, useEffect } from "react";
import { AiOutlineUser } from "react-icons/ai";
import "./navbar.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setSignupVisibleFalse,
  setSignupVisibleTrue,
} from "../../redux/navbarSlice";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [signupVisible, setSignupVisible] = useState(true);

  //redux

  const dispatch = useDispatch();

  const visiblity = useSelector(state => state.navbarRD.signupVisible);

  //const [buttonClicked, setButtonClicked] = useState(false);
  const navigate = useNavigate();
  /*code to show the navbar*/

  const [active, setActive] = useState("navBar");
  const showNav = () => {
    setActive("navBar activeNavbar");
  };

  /*code to close the navbar*/

  const closeNav = () => {
    setActive("navBar ");
  };

  /*code to add bg to navbar*/

  const [transparent, setTransparent] = useState("header");
  const addBg = () => {
    if (window.scrollY >= 10) {
      setTransparent("header activeHeader");
    } else {
      setTransparent("header");
    }
  };

  window.addEventListener("scroll", addBg);

  const onJoin = () => {
    //setSignupVisible(false);
    dispatch(setSignupVisibleFalse());
    navigate("/signup");
  };

  const handleLogout = () => {
    localStorage.removeItem("id");
    localStorage.removeItem("role");
    localStorage.removeItem("name");
    localStorage.removeItem("token");
    // setSignupVisible(true);
    dispatch(setSignupVisibleTrue());
    navigate("/");
  };

  const handleSignupClick = () => {
    // Disable signup button
    document.getElementById("signupBtn").disabled = true;
  };

  useEffect(() => {
    // Check if user is logged in
    const checkLoggedInStatus = () => {
      const id = localStorage.getItem("id");
      setIsLoggedIn(!!id); // Convert to boolean
    };

    checkLoggedInStatus(); // Check initially

    // Update login status whenever local storage changes
    window.addEventListener("storage", checkLoggedInStatus);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("storage", checkLoggedInStatus);
    };
  }, []);

  const name = localStorage.getItem("name");
  const role = localStorage.getItem("role");

  return (
    <section className="navBarSection">
      <div className={transparent}>
        <div className="logoDiv">
          <a href="#" className="logo">
            <h1
              className="flex"
              onClick={() => {
                navigate("/");
              }}
            >
              <SiYourtraveldottv className="icon" />
              ResortRover
            </h1>
          </a>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="/" className="navLink">
                Home
              </a>
            </li>
            <li className="navItem">
              <a href="/offers" className="navLink">
                Offers
              </a>
            </li>

            <li className="navItem">
              <a href="#footer" className="navLink">
                Contact
              </a>
            </li>
            {!isLoggedIn && (
              <div className="headerBtns flex">
                <button
                  className="btn loginBtn"
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  <a href="">Login</a>
                </button>
                {visiblity && (
                  <button className="btn " id="signupBtn" onClick={onJoin}>
                    <a>Join</a>
                  </button>
                )}
              </div>
            )}
            {isLoggedIn && role === "USER" && (
              <div className="headerBtns flex">
                <button
                  className="btn loginBtn"
                  id="profileBtn"
                  onClick={() => {
                    navigate("/user/profile");
                  }}
                >
                  <a href="#">{name}</a>
                </button>
                <button className="btn " id="logoutBtn" onClick={handleLogout}>
                  <a>Logout</a>
                </button>
              </div>
            )}
            {isLoggedIn && role === "ADMIN" && (
              <div className="headerBtns flex">
                <button
                  className="btn loginBtn"
                  id="profileBtn"
                  onClick={() => {
                    navigate("/admin-home");
                  }}
                >
                  <a href="#">{name}</a>
                </button>
                <button className="btn " id="logoutBtn" onClick={handleLogout}>
                  <a>Logout</a>
                </button>
              </div>
            )}
          </ul>
          <div onClick={closeNav} className="closeNavBar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>
        <div onClick={showNav} className="toggleNavBar">
          <TbGridDots className="icon" />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
