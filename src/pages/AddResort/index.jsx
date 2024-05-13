import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import axios from "../../utils/axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./addresort.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddResort = () => {
  const [resort, setResort] = useState({
    name: "",
    description: "",
    email: "",
    location: "",
    address: "",
    network: "",
    transportation: "",
    images: [],
  });
  const navigate = useNavigate();
  const [image, setImage] = useState([]);
  const onInputChange = (e, key) => {
    console.log(key, e.target.value);
    setResort({ ...resort, [key]: e.target.value });
  };

  const onImageUpload = e => {
    console.log(e);
    if (e.file.status === "done" && e.file.response) {
      const newImages = e.fileList.map(file => file.response.url); // Extract URLs
      setImage([...image, ...newImages]); // Update image state with all URLs
      setResort({ ...resort, images: image }); // Update resort state with images
    } else {
      // Handle cases where the upload is still in progress or failed
      console.log("Upload in progress or failed");
    }
  };

  const onAddClick = async () => {
    console.log("resort data", resort);
    try {
      const response = await axios.post("resort/add-resort", resort);
      console.log("response", response);
      toast.success("Resort added successfully");
      navigate("/admin-home");
    } catch (e) {
      toast.error("Please try again");
    }
  };
  return (
    <div className="addResort">
      <div className="nav-div">
        <Navbar />
      </div>
      <div className="offerContainer">
        <ToastContainer />
        <div className="greet">
          <h1>Add Resort</h1>
        </div>
        <div className="details">
          <div className="nameDiv inputComm">
            <label htmlFor="name">Name</label>
            <input
              name={resort.name}
              type="text"
              onChange={e => {
                onInputChange(e, "name");
              }}
            />
          </div>
          <div className="descDiv inputComm">
            <label htmlFor="description">Description</label>
            <textarea
              name={resort.description}
              type="text"
              onChange={e => {
                onInputChange(e, "description");
              }}
            />
          </div>
          <div className="emailDiv inputComm">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name={resort.email}
              placeholder="someone@example.com"
              onChange={e => {
                onInputChange(e, "email");
              }}
            />
          </div>
          <div className="locationDiv inputComm">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              name={resort.location}
              onChange={e => {
                onInputChange(e, "location");
              }}
            />
          </div>
          <div className="addressDiv inputComm">
            <label htmlFor="address">Address</label>
            <textarea
              type="text"
              name={resort.address}
              className="formInput"
              onChange={e => {
                onInputChange(e, "address");
              }}
            />
          </div>
          <div className="imgDiv">
            <Upload
              action="http://localhost:8080/upload"
              listType="picture-card"
              onChange={onImageUpload}
            >
              <button
                style={{
                  border: 0,
                  background: "none",
                }}
                type="button"
              >
                <PlusOutlined />
                <div
                  style={{
                    marginTop: 8,
                  }}
                >
                  Upload
                </div>
              </button>
            </Upload>
          </div>
          <div className="networkDiv inputComm">
            <label htmlFor="network">Network</label>
            <input
              type="text"
              name={resort.network}
              onChange={e => {
                onInputChange(e, "network");
              }}
            />
          </div>
          <div className="transportationDiv inputComm">
            <label htmlFor="transportation">Transportation</label>
            <input
              type="text"
              name={resort.transportation}
              onChange={e => {
                onInputChange(e, "transportation");
              }}
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

export default AddResort;
