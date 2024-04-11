import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import axios from "../../utils/axios";
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort, BsHouseFill } from "react-icons/bs";
import { MdBathtub, MdBed } from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa";

import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import { useNavigate, useParams } from "react-router-dom";
import PopupForm from "../../components/PoppupForm";

import "./resortdetails.scss";

const ResortDetails = () => {
  const [data, setData] = useState(null);
  const [amenity, setAmenity] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [bookingData, setBookingData] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();
  console.log("id", id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`resort/${id}`);
        console.log(response);
        setData(response.data.resort);
        const rooms = await axios.get(`resort/aminity/${id}`);
        console.log(rooms);
        setAmenity(rooms.data.aminity);
        setLoading(false);
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

  const handleClickOpen = aminity => {
    // const aminity = id;
    setBookingData({ ...bookingData, aminity });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async data => {
    if (localStorage.getItem("id")) {
      const user = localStorage.getItem("id");
      const resort = id;
      setBookingData({ ...bookingData, ...data, resort, user });
      try {
        const bookingResponse = await axios.post("/book", bookingData);

        toast.info(bookingResponse.data.message);
      } catch (e) {
        toast.error("Unable to book now. please try again.");
      }
    } else {
      toast.info("Please login for booking!");
    }

    //console.log("Form data:", data); // You can process the form data here
  };
  console.log("booking data:", bookingData);
  return (
    <div className="resort-details">
      <div className="nav-div">
        <Navbar />
      </div>
      <div className="image-div">
        <div className="homeText">
          <h1 className="title">{data && data.name}</h1>
          <p className="subTitle">{data && data.description}</p>
        </div>
      </div>
      <div className="aminityListDiv">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <>
            {amenity.map((item, index) => {
              return (
                <div className="singleDestination">
                  <h2>{item.name}</h2>
                  <div className="destImage">
                    <img
                      src={item.image[selectedIndex]}
                      alt={`Image ${selectedIndex}`}
                    />
                  </div>
                  <div className="image-navigation iconDiv flex">
                    <BsArrowLeftShort
                      className="icon leftIcon"
                      onClick={() => prevImage(item.image.length)}
                    />

                    <BsArrowRightShort
                      className="icon"
                      onClick={() => nextImage(item.image.length)}
                    />
                  </div>
                  <div className="grid">
                    <div className="roomFacilities location flex">
                      <BsHouseFill className="smicon" />
                      <small>{item.roomType}</small>
                    </div>
                    <div className="roomFacilities location flex">
                      <MdBed className="smicon" />
                      <small>{item.bedType}</small>
                    </div>
                    <div className="roomFacilities location flex">
                      <MdBathtub className="smicon" />
                      <small>{item.restroomType}</small>
                    </div>
                    <div className="roomFacilities location flex">
                      <FaRupeeSign className="smicon" />
                      <small>{item.price}</small>
                    </div>
                  </div>

                  <button
                    className=" btn flex"
                    onClick={() => handleClickOpen(item._id)}
                  >
                    Book Now
                    <BsArrowRightShort className="icon" />
                  </button>
                  <div className="bookingModel">
                    {open && ( // Ensure conditional rendering
                      <PopupForm
                        open={open}
                        onClose={handleClose}
                        onSubmit={handleSubmit}
                        className={open ? "active" : ""}
                      />
                    )}
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>

      <ToastContainer />
      <Footer />
    </div>
  );
};

export default ResortDetails;
