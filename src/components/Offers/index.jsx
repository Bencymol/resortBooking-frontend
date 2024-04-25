import {
  MdKingBed,
  MdBathtub,
  MdAirportShuttle,
  MdLocationOn,
} from "react-icons/md";
import { FaWifi } from "react-icons/fa";
import { BsArrowRightShort } from "react-icons/bs";
import "./offers.scss";
import { useEffect, useState } from "react";
import axios from "../../utils/axios";
import { useNavigate } from "react-router-dom";

const Offers = () => {
  const [resorts, setResorts] = useState([]);
  const navigate = useNavigate();
  const fetchData = async () => {
    const response = await axios.get("/resort");
    setResorts(response.data.resort);
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log("resorts", resorts);
  return (
    <section className="offer container section">
      <div className="secContainer">
        <div className="secIntro">
          <h2 className="secTitle">Special Offers</h2>
          <p>
            Enjoy up to 30% off your bill when you dine with us at participating
            restaurants at RiverRover Hotels & Resorts across the Middle East,
            India and Africa. Plus, earn 250 RR Rewards points for every $25 you
            spend.
          </p>
        </div>

        <div className="mainContent grid">
          {resorts.map(item => {
            return (
              <div className="singleOffer">
                <div className="destImage">
                  <img src={item.images[0]} alt={item.name} />
                  <span className="discount">Up to 30% off</span>
                </div>
                <div className="offerBody">
                  <div className="price flex">
                    <span className="status">For rent</span>
                  </div>
                  <div className="amenities flex">
                    <div className="singleAmenity flex">
                      <MdKingBed className="icon" />
                      <small>2 Beds</small>
                    </div>
                    <div className="singleAmenity flex">
                      <MdBathtub className="icon" />
                      <small>1 Bathtub</small>
                    </div>
                    <div className="singleAmenity flex">
                      <FaWifi className="icon" />
                      <small>{item.network}</small>
                    </div>
                    <div className="singleAmenity flex">
                      <MdAirportShuttle className="icon" />
                      <small>{item.transportation}</small>
                    </div>
                  </div>
                  <div className="location flex">
                    <MdLocationOn className="icon" />
                    <small>{item.location}</small>
                  </div>
                  <button
                    className="btn flex"
                    onClick={() => {
                      navigate("/offers");
                    }}
                  >
                    View Details
                    <BsArrowRightShort className="icon" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Offers;
