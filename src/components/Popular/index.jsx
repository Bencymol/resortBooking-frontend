import { BsArrowLeftShort, BsDot } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import "./popular.scss";
import img from "../../assets/img1.jpg";

const Popular = () => {
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
          <div className="iconDiv flex">
            <BsArrowLeftShort className="icon leftIcon" />
            <BsArrowRightShort className="icon" />
          </div>
        </div>

        <div className="mainContent grid">
          {data.map(item => {
            return (
              <div className="singleDestination">
                <div className="destImage">
                  <img src={item.imgSrc} alt="Image Title" />
                  <div className="overlayInfo">
                    <h3>{item.destTitle}</h3>
                    <p>{item.location}</p>
                    <BsArrowRightShort className="icon" />
                  </div>
                </div>

                <div className="destFooter">
                  <div className="number">0{item.id}</div>
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
