import { useState, useEffect } from "react";
import { MdOutlineClose } from "react-icons/md";
import axios from "../../utils/axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./deleteresortpopup.scss";

const DeleteResortPopUp = ({ open, onClose, onSubmit, active }) => {
  const [resort, setResort] = useState();
  const [resortId, setResortId] = useState("");
  const handleChange = event => {
    const { name, value } = event.target;
    setResortId(value);
  };

  const onBtnClick = async event => {
    event.preventDefault();
    const response = await axios.delete(`resort/${resortId}`);
    onSubmit(response);
    onClose();
  };

  const fetchResort = async () => {
    try {
      const response = await axios.get("resort/");
      const re = response.data.resort.map(item => {
        return { value: item._id, label: item.name };
      });
      setResort(re);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchResort();
  }, []);

  return (
    <div className="deleteResort active">
      <div className="form-container">
        <div className="close-button iconDiv flex">
          <MdOutlineClose className="icon" onClick={onClose} />
        </div>

        <h2>Select Resort</h2>
        <form onSubmit={onBtnClick}>
          <div className="fromDiv homeCard grid">
            <div className="locDiv">
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
              <button type="submit" className="btn">
                Delete
              </button>
            </div>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default DeleteResortPopUp;
