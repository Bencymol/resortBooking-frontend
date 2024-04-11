import { useEffect } from "react";
import axios from "../../utils/axios";
import "./userhome.css";
import HomePage from "../HomePage";

const UserHome = () => {
  const id = localStorage.getItem("id");
  const getUser = async () => {
    const response = await axios.get(`user/${id}`);
  };
  useEffect(() => {
    const userId = localStorage.getItem("id");
    console.log(id);
    getUser();
  }, []);
  return (
    <div className="userHome">
      <HomePage />
    </div>
  );
};

export default UserHome;
