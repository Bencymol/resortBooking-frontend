import { useState, useEffect } from "react";
import { MdOutlineClose } from "react-icons/md";

import "./popupform.scss";

const PopupForm = ({ open, onClose, onSubmit, active }) => {
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [adult, setAdult] = useState(null);
  const [kid, setKid] = useState(null);
  const [today, setToday] = useState(new Date());

  const handleChange = event => {
    const { name, value } = event.target;
    if (name === "fromDate") {
      setFromDate(value);
    } else if (name === "toDate") {
      setToDate(value);
    } else if (name == "adult") {
      setAdult(parseFloat(value)); // Ensure valid number input
    } else {
      setKid(parseFloat(value));
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({ fromDate, toDate, adult, kid }); // Pass form data to onSubmit handler
    onClose(); // Close the popup after submission
  };

  useEffect(() => {
    setToday(new Date()); // Update today's date on component mount and updates
  }, []);

  const formattedDate = today.toISOString().substring(0, 10); // Format date for min attribute

  return (
    <div className="popup-form active">
      <div className="form-container">
        <div className="close-button iconDiv flex">
          <MdOutlineClose className="icon" onClick={onClose} />
        </div>

        <h2>Add Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="fromDiv homeCard grid">
            <label htmlFor="from">From</label>
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
          <div className="toDiv">
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
          <div className="adults">
            <label htmlFor="adults">Adults</label>
            <input
              id="adult"
              type="number"
              name="adult"
              min="0"
              value={adult || ""}
              onChange={handleChange}
              required
            />
          </div>
          <div className="kids">
            <label htmlFor="kids">Kids</label>
            <input
              id="kid"
              type="number"
              name="kid"
              min="0"
              value={kid || ""}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn">
            Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
