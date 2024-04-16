import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import axios from "../../utils/axios";
import {
  MdKingBed,
  MdBathtub,
  MdAirportShuttle,
  MdLocationOn,
} from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";
import "./userprofile.scss";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  const id = localStorage.getItem("id");

  const fetchUserBookings = async () => {
    const response = await axios.get(`user/bookings/${id}`);
    setBookings(response.data);
  };

  const [date, setDate] = useState(new Date().toISOString().substring(0, 10));
  useEffect(() => {
    setDate(new Date().toISOString().substring(0, 10));
    fetchUserBookings();
  }, []);

  return (
    <div className="userProfile">
      <div className="nav-div">
        <Navbar />
      </div>
      <div className="profileContainer">
        <div className="greet">
          <h1>Hello {localStorage.getItem("name")}, Your Bookings</h1>
          <div className="btnDiv">
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
        </div>

        <div className="mainContent grid">
          {bookings.map(item => {
            return (
              <div className="singleCard">
                <div className="cardBody">
                  <div className="Rname flex">
                    <h4>Resort: </h4>
                    <h5>{item.resort.name}</h5>
                  </div>
                  <div className="location flex">
                    <h4>Booking Id: </h4>
                    <h5>{item._id}</h5>
                  </div>
                  <div className="location flex">
                    <h4>Checkin: </h4>
                    <h5>
                      {item.fromDate}, {item.chekIn}
                    </h5>
                  </div>
                  <div className="location flex">
                    <h4>Checkout: </h4>
                    <h5>
                      {item.toDate}, {item.chekOut}
                    </h5>
                  </div>
                  {date && date > item.fromDate && (
                    <button className=" btn flex">
                      Cancel Booking
                      <BsArrowRightShort className="icon" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="bookings"></div>
      </div>
      <Footer />
    </div>
  );
};

export default UserProfile;
