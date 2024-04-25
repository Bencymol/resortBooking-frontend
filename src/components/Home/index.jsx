import { useNavigate } from "react-router-dom";
import "./home.scss";
import { useEffect, useState } from "react";
import axios from "../../utils/axios";

const Home = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [resort, setResort] = useState();
  const [fromDate, setFromDate] = useState("");
  const [resortId, setResortId] = useState("");
  const [toDate, setToDate] = useState("");
  const [today, setToday] = useState(new Date());

  const fetchData = async () => {
    try {
      const response = await axios.get("resort/");
      const re = response.data.resort.map(item => {
        return { value: item._id, label: item.name };
      });
      // Set the data state
      setResort(re);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleChange = event => {
    const { name, value } = event.target;
    console.log(value);
    if (name === "fromDate") {
      setFromDate(value);
    } else if (name === "toDate") {
      setToDate(value);
    } else if (name == "select") {
      setResortId(value);
    }
  };
  useEffect(() => {
    setToday(new Date());
    fetchData();
  }, []);
  const formattedDate = today.toISOString().substring(0, 10); // Format date for min attribute

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
            {resort && (
              <select
                id="select"
                name="select"
                onChange={handleChange}
                className="slt"
              >
                <option key="blankKey" hidden value>
                  Please select
                </option>
                {resort.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            )}
          </div>

          <div className="distDiv">
            <label htmlFor="distance">From</label>
            <input
              id="fromdate"
              type="date"
              name="fromDate"
              value={fromDate || ""}
              onChange={handleChange}
              // Prefer min attribute for browser compatibility
              min={formattedDate}
              // Fallback for older browsers (optional)
              onfocus={() => {
                document
                  .getElementById("fromdate")
                  .setAttribute("min", formattedDate);
              }}
              required
            />
          </div>

          <div className="priceDiv">
            <label htmlFor="to">To</label>
            <input
              id="todate"
              type="date"
              name="toDate"
              value={toDate || ""}
              onChange={handleChange}
              // Prefer min attribute for browser compatibility
              min={formattedDate}
              // Fallback for older browsers (optional)
              onfocus={() => {
                document
                  .getElementById("todate")
                  .setAttribute("min", formattedDate);
              }}
              required
            />
          </div>
          <button
            className="btn"
            onClick={() => {
              navigate(`/resort-details/${resortId}`);
            }}
          >
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
