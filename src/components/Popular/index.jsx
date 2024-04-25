import { BsArrowLeftShort, BsDot } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import "./popular.scss";
import img from "../../assets/img1.jpg";
import { useEffect, useState } from "react";
import axios from "../../utils/axios";
import { useNavigate } from "react-router-dom";

const Popular = () => {
  const [resortData, setResortData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const data = [
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
  const fetchData = async () => {
    try {
      const response = await axios.get("resort/");
      console.log("API Response:", response.data); // Log the response data
      setResortData(response.data.resort); // Set the data state
      setLoading(false);
      console.log(resortData);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <section className="popular section container">
      <div className="secContainer">
        <div className="secHeader flex">
          <div className="textDiv">
            <h2 className="secTitle">Popular Destinations</h2>
            <p>
              From historical cities to natural specteculars, come see the best
              in the world!
            </p>
          </div>
        </div>

        <div className="mainContent grid">
          {resortData.map((item, index) => {
            return (
              <div className="singleDestination">
                <div className="destImage">
                  <img src={item.images[0]} alt="Image Title" />
                  <div className="overlayInfo">
                    <h3>{item.name}</h3>
                    <p>{item.location}</p>
                    <BsArrowRightShort
                      className="icon"
                      onClick={() => {
                        navigate(`/resort-details/${item._id}`);
                      }}
                    />
                  </div>
                </div>

                <div className="destFooter">
                  <div className="number">0{index}</div>
                  <div className="destText flex">
                    <h6>{item.location}</h6>
                    <span className="flex">
                      <span className="dot">
                        <BsDot className="icon" />
                      </span>
                      RiverRover
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Popular;
