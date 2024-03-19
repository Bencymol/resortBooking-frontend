import {
  MdKingBed,
  MdBathtub,
  MdAirportShuttle,
  MdLocationOn,
} from "react-icons/md";
import { FaWifi } from "react-icons/fa";
import { BsArrowRightShort } from "react-icons/bs";
import "./offers.scss";

const Offers = () => {
  const offers = [
    {
      id: 1,
      imgSrc: "src/assets/img1.jpg",
      destTitle: "RiverRover Goa",
      location: "Goa",
      grade: "Beach Resort",
    },
    {
      id: 2,
      imgSrc: "src/assets/img2.jpg",
      destTitle: "RiverRover Kerala",
      location: "Kerala",
      grade: "Cultural Resort",
    },
    {
      id: 3,
      imgSrc: "src/assets/img3.jpg",
      destTitle: "RiverRover Chennai",
      location: "Chennai",
      grade: "Luxury Resort",
    },
    {
      id: 4,
      imgSrc: "src/assets/img4.jpg",
      destTitle: "RiverRover Mumbai",
      location: "Mumbai",
      grade: "Luxury Resort",
    },
  ];
  return (
    <section className="offer container section">
      <div className="secContainer">
        <div className="secIntro">
          <h2 className="secTitle">Special Offers</h2>
          <p>
            &Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque non
            fugiat laboriosam fugit placeat a. Amet aliquid illo beatae unde
            dicta aspernatur voluptate laboriosam, accusamus ducimus laborum
            minima nobis! Voluptates?
          </p>
        </div>

        <div className="mainContent grid">
          {offers.map(item => {
            return (
              <div className="singleOffer">
                <div className="destImage">
                  <img src={item.imgSrc} alt={item.destTitle} />
                  <span className="discount">30% off</span>
                </div>
                <div className="offerBody">
                  <div className="price flex">
                    <h4>{item.price}</h4>
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
                      <small>WIFI</small>
                    </div>
                    <div className="singleAmenity flex">
                      <MdAirportShuttle className="icon" />
                      <small>Airport Shuttle</small>
                    </div>
                  </div>
                  <div className="location flex">
                    <MdLocationOn className="icon" />
                    <small>450 panaji,{item.location}</small>
                  </div>
                  <button className="btn flex">
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
