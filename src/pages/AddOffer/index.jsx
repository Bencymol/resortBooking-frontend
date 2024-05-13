import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./addoffer.scss";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../utils/axios";

const AddOffer = () => {
  const [offer, setOffer] = useState({
    resort: "",
    percentage: "",
    offerName: "",
    description: "",
    validTill: "",
    expired: false,
  });
  const [resortId, setResortId] = useState("");
  const navigate = useNavigate();
  const [today, setToday] = useState(new Date());
  const [resort, setResort] = useState();

  const onInputChange = (e, key) => {
    console.log(key, e.target.value);
    setOffer({ ...offer, [key]: e.target.value });
  };

  const onAddClick = async () => {
    console.log("offer data", offer);
    try {
      const response = await axios.post("offer/", offer);
      console.log("response", response);
      toast.success("Offer added successfully");
      navigate("/admin-home");
    } catch (e) {
      toast.error("Please try again");
    }
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setResortId(value);
    setOffer({ ...offer, resort: value });
  };

  const fetchResort = async () => {
    try {
      const response = await axios.get("/resort");
      const re = response.data.resort.map(item => {
        return { value: item._id, label: item.name };
      });
      setResort(re);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    setToday(new Date());
    fetchResort();
  }, []);

  const formattedDate = today.toISOString().substring(0, 10); // Format date for min attribute

  return (
    <div className="addOffer">
      <div className="nav-div">
        <Navbar />
      </div>
      <div className="offerContainer">
        <ToastContainer />
        <div className="details">
          <div className="nameDiv inputComm">
            <label htmlFor="name">Offer Name</label>
            <input
              name={offer.offerName}
              type="text"
              onChange={e => {
                onInputChange(e, "offerName");
              }}
            />
          </div>
          <div className="percetDiv inputComm">
            <label htmlFor="percentage">Percentage</label>
            <input
              name={offer.percentage}
              type="number"
              onChange={e => {
                onInputChange(e, "percentage");
              }}
            />
          </div>
          <div className="descDiv inputComm">
            <label htmlFor="description">Description</label>
            <textarea
              name={offer.description}
              type="text"
              onChange={e => {
                onInputChange(e, "description");
              }}
            />
          </div>
          <div className="resortsDiv inputComm">
            <label htmlFor="name">Resort</label>
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
          <div className="validityDiv inputComm">
            <label htmlFor="validity">Valid till</label>
            <input
              name={offer.validTill}
              type="date"
              onChange={e => {
                onInputChange(e, "validTill");
              }}
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
          <button className="btn" onClick={onAddClick}>
            Add
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AddOffer;
