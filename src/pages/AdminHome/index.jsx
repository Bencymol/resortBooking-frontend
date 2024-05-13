import { useEffect, useState } from "react";
import axios from "../../utils/axios";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { toast, ToastContainer } from "react-toastify";
import DeleteResortPopUp from "../../components/DeleteResortPopUp";
import { useNavigate } from "react-router-dom";
import DeleteOffer from "../../components/DeleteOffer";

import "react-toastify/dist/ReactToastify.css";
import "./adminhome.scss";

const AdminHome = () => {
  const [admin, setAdmin] = useState([]);
  // const id = localStorage.getItem("id");
  const [open, setOpen] = useState(false);
  const [openOffer, setOpenOffer] = useState(false);
  const navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleDeletePopoUpOpen = () => {
    setOpenOffer(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOfferClose = () => {
    setOpenOffer(false);
  };

  const handleOfferSubmit = response => {
    if (response.data) {
      try {
        toast.success("Offer deleted");
      } catch (e) {
        toast.error("Unable to delete now. please try again.");
      }
    } else {
      toast.info("Please try again!");
    }
  };

  const handleSubmit = response => {
    if (response.data) {
      try {
        toast.success("Resort deleted");
      } catch (e) {
        toast.error("Unable to delete now. please try again.");
      }
    } else {
      toast.info("Please try again!");
    }
  };

  const handleDelete = () => {};

  useEffect(() => {
    const id = localStorage.getItem("id");
    const getAdmin = async () => {
      const response = await axios.get(`admin/${id}`);
      setAdmin(response.data.admin);
    };
  }, []);
  console.log(admin);
  return (
    <div className="adminHome">
      <ToastContainer />
      <div className="nav-div">
        <Navbar />
      </div>
      <div className="adminContainer">
        <div className="greet">
          <h1>Hello {localStorage.getItem("name")},</h1>
        </div>
        <div
          className="adminOps"
          onClick={() => {
            navigate("/add-resort");
          }}
        >
          <h3>Add resort</h3>
        </div>
        <div className="adminOps" onClick={handleClickOpen}>
          <h3>Delete resort</h3>
        </div>
        <div
          className="adminOps"
          onClick={() => {
            navigate("/add-amenity");
          }}
        >
          <h3>Add Aimenity</h3>
        </div>

        <div
          className="adminOps"
          onClick={() => {
            navigate("/add-offer");
          }}
        >
          <h3>Add Offer</h3>
        </div>
        <div className="adminOps" onClick={handleDeletePopoUpOpen}>
          <h3>Delete Offer</h3>
        </div>
      </div>
      <div className="bookingModel">
        {open && ( // Ensure conditional rendering
          <DeleteResortPopUp
            open={open}
            onClose={handleClose}
            onSubmit={handleSubmit}
            className={open ? "active" : ""}
          />
        )}
      </div>
      <div className="offerModel">
        {openOffer && ( // Ensure conditional rendering
          <DeleteOffer
            open={openOffer}
            onClose={handleOfferClose}
            onSubmit={handleOfferSubmit}
            className={openOffer ? "active" : ""}
          />
        )}
      </div>

      <Footer />
    </div>
  );
};

export default AdminHome;
