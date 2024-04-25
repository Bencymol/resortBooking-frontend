import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./offerpage.scss";
import { useEffect, useState } from "react";
import axios from "../../utils/axios";
import { BsArrowRightShort } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const OfferPage = () => {
  const [offer, setOffer] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    const response = await axios.get("/offer/");
    setOffer(response.data.offer);
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(offer);
  return (
    <div className="offerPage">
      <div className="nav-div">
        <Navbar />
      </div>
      <div className="image-div">
        <div className="homeText">
          <h1 className="hash">#</h1>
          <h1 className="title">NEW DAY, NEW OFFER</h1>
        </div>
      </div>
      <div className="featuredOffer">
        <h2 className="offerText">River Rover Deals & Discounts</h2>
        <h2 className="offerText">Featured hotel deals</h2>
        <p>Save on hotel deals when you book this month.</p>
        <div className="videoCardOffer">
          <video
            src="src/assets/video2.mp4"
            autoPlay
            loop
            muted
            type="video/mp4"
          ></video>
        </div>
        <div className="mainContent grid">
          {offer.map(item => {
            return (
              <div className="singleOffer">
                <div className="offerHead">
                  <h3>{item.offerName}</h3>
                  <span className="discount">{item.percentage}% off</span>
                </div>
                <div className="offerDescription">
                  <p className="offerDesc">{item.description}</p>
                </div>

                <button
                  className="btn flex"
                  onClick={() => {
                    navigate("/resort-list");
                  }}
                >
                  Book Now
                  <BsArrowRightShort className="icon" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <div className="memberOffer">
        <h2 className="offerText">River Rover One Rewards member offers</h2>
        <p>
          Save money, earn points, and enjoy great benefits with RR Rewards.{" "}
          <a href="/signup">Join for free!</a>
          Check out our exclusive offers only for RR Rewards members.
        </p>
        <div className="singleMemOffer">
          <div className="offOne">
            <h4>Turn Everyday Dining Into An Occasion!</h4>
            <small>
              Enjoy up to 30% off your bill when you dine with us at
              participating restaurants at IHG Hotels & Resorts across the
              Middle East, India and Africa. Plus, earn 250 RR Rewards points
              for every $25 you spend.
            </small>
          </div>
          <div className="offOne">
            <h4>The best things in life are free</h4>
            <small>
              With your RiverRover One Rewards points, you can book a Reward
              Night at one of our 6,000+ hotels around the world. Reward Nights
              start at just 5K points.
            </small>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OfferPage;
