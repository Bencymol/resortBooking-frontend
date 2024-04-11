import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import axios from "../../utils/axios";
import { MdLocationOn } from "react-icons/md";
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import "./resortpage.css";
import { useNavigate } from "react-router-dom";

const ResortsPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("resort/");
        console.log("API Response:", response.data); // Log the response data
        setData(response.data.resort); // Set the data state
        setLoading(false);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const nextImage = arrlength => {
    console.log(arrlength);
    if (arrlength > 0) {
      setSelectedIndex(selectedIndex < arrlength - 1 ? selectedIndex + 1 : 0);
    }
    console.log(selectedIndex);
  };

  const prevImage = arrlength => {
    if (arrlength > 0) {
      setSelectedIndex(selectedIndex > 0 ? selectedIndex - 1 : arrlength - 1);
    }
  };

  return (
    <div className="resorts">
      <div className="nav-div">
        <Navbar />
      </div>

      <div className="mainContent container grid">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <>
            {data.map((item, index) => {
              return (
                <div
                  className="singleDestination"
                  key={index}
                  onClick={() => {
                    navigate(`/resort-details/${item._id}`);
                  }}
                >
                  <h2>{item.name}</h2>
                  <div className="destImage">
                    <img
                      src={item.images[selectedIndex]}
                      alt={`Image ${selectedIndex}`}
                    />
                  </div>
                  <div className="image-navigation iconDiv flex">
                    <BsArrowLeftShort
                      className="icon leftIcon"
                      onClick={() => prevImage(item.images.length)}
                    />

                    <BsArrowRightShort
                      className="icon"
                      onClick={() => nextImage(item.images.length)}
                    />
                  </div>
                  <p>{item.description}</p>
                  <div className="location flex">
                    <MdLocationOn className="locIcon" />
                    <small> {item.location}</small>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default ResortsPage;
