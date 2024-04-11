import { useState } from "react";
import PopupForm from "../../components/PoppupForm";

import "./sapmle.scss";

const SampleBookBtn = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    console.log(open);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = data => {
    console.log("Form data:", data); // You can process the form data here
  };
  return (
    <div className="resort-details">
      <button className="btn flex" onClick={handleClickOpen}>
        Book Now
      </button>
      {open && ( // Ensure conditional rendering
        <PopupForm
          open={open}
          onClose={handleClose}
          onSubmit={handleSubmit}
          className={open ? "active" : ""}
        />
      )}
    </div>
  );
};

export default SampleBookBtn;
