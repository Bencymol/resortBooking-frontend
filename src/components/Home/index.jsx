import { useNavigate } from "react-router-dom";
import { Select } from "antd";
import "./home.scss";
import { useEffect, useState } from "react";
import axios from "../../utils/axios";

const Home = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({ resort: "" });
  const [resort, setResort] = useState([]);

  const onAddResort = value => {
    setData({ ...data, resort: value });
    console.log(data);
  };
  const fetchData = async () => {
    try {
      const response = await axios.get("resort/");
      const re = response.data.resort.map(item => {
        return { value: item._id, label: item.name };
      });
      setResort(re); // Set the data state
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log("options:", resort);
  return (
    <section className="home">
      <div className="secContainer container">
        <div className="homeText">
          <h1 className="title">Find Your Retreat</h1>
          <p className="subTitle">
            Elevate your senses, indulge in serenity, and let the rhythm of
            nature be the soundtrack to your retreat.
          </p>
          <button
            className="btn"
            onClick={() => {
              navigate("/resort-list");
            }}
          >
            <a href="#">Explore Now</a>
          </button>
        </div>

        <div className="homeCard grid">
          <div className="locationDiv">
            <label htmlFor="location">Location</label>

            <Select
              allowClear
              style={{
                width: "100%",

                background: "hsl(330, 12%, 97%)",
                borderRadius: "10px",
                border: "none",
              }}
              placeholder="Please select"
              options={resort || []}
              onChange={onAddResort}
            />
          </div>

          <div className="distDiv">
            <label htmlFor="distance">Location</label>
            <input type="text" placeholder="ll/meters" />
          </div>

          <div className="priceDiv">
            <label htmlFor="price">Location</label>
            <input type="text" placeholder="6000-10000" />
          </div>
          <button className="btn">Search</button>
        </div>
      </div>
    </section>
  );
};

export default Home;
