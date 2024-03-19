import { SiYourtraveldottv } from "react-icons/si";
import { ImFacebook } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="secContainer container grid">
        <div className="logoDiv">
          <div className="footerLogo">
            <div className="logo flex">
              <h1 className="flex">
                <SiYourtraveldottv className="icon" />
                RiverRover
              </h1>
            </div>
          </div>
          <div className="socials flex">
            <ImFacebook className="icon" />
            <BsTwitter className="icon" />
            <AiFillInstagram className="icon" />
          </div>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">Information</span>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Explore</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Terms & Conditions</a>
          </li>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">Contact Us</span>
          <span className="phone">+91 9000800000</span>
          <span className="email">riverrover@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
