import { useEffect, useState } from "react";
import axios from "../../utils/axios";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./adminhome.scss";

const AdminHome = () => {
  const [admin, setAdmin] = useState([]);
  const id = localStorage.getItem("id");
  const [open, setOpen] = useState(false);
  const getAdmin = async () => {
    const response = await axios.get(`admin/${id}`);
    setAdmin(response.data.admin);
  };
  const handleClickOpen = aminity => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async data => {
    if (localStorage.getItem("id")) {
      try {
        // const bookingResponse = await axios.post("/book", resortBooking);
        // toast.info(bookingResponse.data.message);
      } catch (e) {
        toast.error("Unable to book now. please try again.");
      }
    } else {
      toast.info("Please login for booking!");
    }
  };

  useEffect(() => {
    const userId = localStorage.getItem("id");
    getAdmin();
  }, []);
  console.log(admin);
  return (
    <div className="adminHome">
      <div className="nav-div">
        <Navbar />
      </div>
      <div className="adminContainer">
        <div className="greet">
          <h1>Hello {localStorage.getItem("name")},</h1>
        </div>
        <div className="adminOps">
          <a href="#" onClick={() => handleClickOpen(item._id)}>
            Add resort
          </a>
        </div>
        <div className="adminOps">
          <a href="#">Delete resort</a>
        </div>
        <div className="adminOps">
          <a href="#">Add Aimenity</a>
        </div>
        <div className="adminOps">
          <a href="#">Delete Aimenity</a>
        </div>
        <div className="adminOps">
          <a href="#">Add Offer</a>
        </div>
        <div className="adminOps">
          <a href="#">Delete Offer</a>
        </div>
      </div>
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
      <ToastContainer />
      <Footer />
    </div>
  );
};

export default AdminHome;
