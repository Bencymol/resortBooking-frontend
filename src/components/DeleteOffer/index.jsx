import { useState, useEffect } from "react";
import { MdOutlineClose } from "react-icons/md";
import axios from "../../utils/axios";

import "./deleteoffer.scss";

const DeleteOffer = ({ open, onClose, onSubmit, active }) => {
  const [offer, setOffer] = useState([]);
  const [offerId, setOfferId] = useState("");
  const handleChange = event => {
    const { name, value } = event.target;
    setOfferId(value);
  };

  const onBtnClick = async event => {
    event.preventDefault();
    const response = await axios.delete(`offer/${offerId}`);
    onSubmit(response);
    onClose();
  };

  const fetchOffer = async () => {
    try {
      const response = await axios.get("offer/");
      console.log("offer:", response);
      const re = response.data.offer.map(item => {
        return { value: item._id, label: item.offerName };
      });
      setOffer(re);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  console.log("setOffer:", offer);

  useEffect(() => {
    fetchOffer();
  }, []);

  return (
    <div className="deleteOffer active">
      <div className="form-container">
        <div className="close-button iconDiv flex">
          <MdOutlineClose className="icon" onClick={onClose} />
        </div>

        <h2>Select Offer</h2>
        <form onSubmit={onBtnClick}>
          <div className="fromDiv homeCard grid">
            <div className="locDiv">
              {offer && (
                <select
                  id="select"
                  name="select"
                  onChange={handleChange}
                  className="slt"
                >
                  <option key="blankKey" hidden value>
                    Please select
                  </option>
                  {offer.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              )}
              <button type="submit" className="btn">
                Delete
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DeleteOffer;
