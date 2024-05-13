import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import axios from "../../utils/axios";
import { useState, useEffect } from "react";
import { Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./addamenity.scss";
import { useNavigate } from "react-router-dom";

const AddAmenity = () => {
  const [resort, setResort] = useState();
  const [resortId, setResortId] = useState("");
  const [amenity, setAmenity] = useState({
    roomType: "",
    roomCount: "",
    availableRooms: "",
    bedType: "",
    restroomType: "",
    price: "",
    image: [],
  });
  const [images, setImages] = useState([""]);
  const navigate = useNavigate();

  const handleChange = event => {
    const { name, value } = event.target;
    setResortId(value);
    setAmenity({ ...amenity, resort: value });
  };
  const onInputChange = (e, key) => {
    console.log(key, e.target.value);
    setAmenity({ ...amenity, [key]: e.target.value });
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

  const onImageUpload = e => {
    if (e.file.status === "done" && e.file.response) {
      const newImages = e.fileList.map(file => file.response.url); // Extract URLs
      setImages([...images, ...newImages]); // Update image state with all URLs
      setAmenity({ ...amenity, image: newImages }); // Update resort state with images
    } else {
      // Handle cases where the upload is still in progress or failed
      console.log("Upload in progress or failed");
    }
  };

  const onAddClick = async () => {
    try {
      const response = await axios.post("resort/add-aminity", amenity);
      if (response) {
        toast.success("Resort added successfully");
      } else {
        toast.error("Please try again");
      }

      navigate("/admin-home");
    } catch (e) {
      toast.error(e);
    }
  };

  useEffect(() => {
    fetchResort();
  }, []);

  console.log("amenity", amenity);
  return (
    <div className="addAmenity">
      <div className="nav-div">
        <Navbar />
      </div>

      <div className="amenityContainer">
        <ToastContainer />
        <div className="resortsDiv">
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
        <div className="nameDiv inputComm">
          <label htmlFor="roomType">Room Type</label>
          <input
            name={amenity.roomType}
            type="text"
            onChange={e => {
              onInputChange(e, "roomType");
            }}
          />
        </div>
        <div className="nameDiv inputComm">
          <label htmlFor="roomCount">Room Count</label>
          <input
            name={amenity.roomCount}
            type="Number"
            onChange={e => {
              onInputChange(e, "roomCount");
            }}
          />
        </div>
        <div className="nameDiv inputComm">
          <label htmlFor="availableRooms">Available Rooms</label>
          <input
            name={amenity.availableRooms}
            type="Number"
            onChange={e => {
              onInputChange(e, "availableRooms");
            }}
          />
        </div>
        <div className="nameDiv inputComm">
          <label htmlFor="bedType">Bed Type</label>
          <input
            name={amenity.bedType}
            type="text"
            onChange={e => {
              onInputChange(e, "bedType");
            }}
          />
        </div>
        <div className="nameDiv inputComm">
          <label htmlFor="restroomType">Restroom Type</label>
          <input
            name={amenity.restroomType}
            type="text"
            onChange={e => {
              onInputChange(e, "restroomType");
            }}
          />
        </div>
        <div className="nameDiv inputComm">
          <label htmlFor="price">Price</label>
          <input
            name={amenity.price}
            type="text"
            onChange={e => {
              onInputChange(e, "price");
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
        <button className="btn" onClick={onAddClick}>
          Add
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default AddAmenity;
