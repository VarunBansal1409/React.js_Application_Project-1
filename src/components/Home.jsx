import React, { use, useEffect, useRef, useState } from "react";
import "./home.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast, Zoom } from "react-toastify";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { IoGlobeOutline } from "react-icons/io5";
import { BiStreetView } from "react-icons/bi";
import { PiCityBold } from "react-icons/pi";
import { TbMapPinCode } from "react-icons/tb";
import { FaRegBuilding } from "react-icons/fa";
import { GoNumber } from "react-icons/go";
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";
import { MdOutlineCreateNewFolder } from "react-icons/md";

const Home = () => {
  let [state, setState] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/users").then((res) => {
      console.log(res);
      let { data } = res;
      console.log(data);
      setState(data);
    });
  }, []);

  let deleteData = (id) => {
    console.log(id);
    axios.delete(`http://localhost:8080/users/${id}`).then(() => {
      console.log("Data deleted successfully");
      toast.error(`Data Deleted Successfully!`, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
      });
      setTimeout(() => {
        window.location.reload()
      } , 1500)
    });
  };

  return (
    <div>
      <div className="main">
        {state.map((value) => {
          let input = `https://api.dicebear.com/9.x/adventurer/svg?seed=${value.name}`;
          return (
            <main key={value.id}>
              <div className="img">
                <img src={input} />
              </div>
              <ol className="info">
                <li className="name">{value.name}</li>
                <li>ID &nbsp; {value.id}</li>
                <li>
                  <MdOutlineEmail /> &nbsp; {value.email}
                </li>
                <li>
                  <FiPhone /> &nbsp; {value.phone}
                </li>
                <li>
                  <FaRegBuilding /> &nbsp; {value.company}
                </li>
                <li>
                  <IoGlobeOutline /> &nbsp; {value.website}
                </li>
                <li>
                  <BiStreetView /> &nbsp; {value.address.street}
                </li>
                <li>
                  <PiCityBold /> &nbsp; {value.address.city}
                </li>
                <li>
                  <TbMapPinCode /> &nbsp; {value.address.pin}
                </li>
              </ol>
              <div className="btn">
                <button className="btn1">
                  <Link to={`/edit/${value.id}`}>Edit &nbsp; <CiEdit className="icon" /></Link>
                </button>
                <button className="btn2"
                  onClick={() => {
                    deleteData(value.id);
                  }}
                >
                  Delete &nbsp; <MdDeleteForever className="icon" />
                </button>
              </div>
            </main>
          );
        })}
      </div>
      <Link to="/create">
        <button className="create">
          Create a New User &nbsp; <MdOutlineCreateNewFolder className="icon" />
        </button>
      </Link>
    </div>
  );
};

export default Home;
