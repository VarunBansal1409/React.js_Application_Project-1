import React, { useState } from "react";
import "./style.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, Zoom } from "react-toastify";

const Create = () => {
  let [name, setName] = useState("");
  let [id, setId] = useState();
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");
  let [company, setCompany] = useState("");
  let [website, setWebsite] = useState("");
  let [street, setStreet] = useState("");
  let [city, setCity] = useState("");
  let [pin, setPin] = useState("");

  let navigate = useNavigate();

  let createData = (e) => {
    e.preventDefault();
    let payload = {
      id,
      name,
      email,
      phone,
      company,
      website,
      address: {
        street,
        city,
        pin,
      },
    };
    console.log(payload);
    axios.post("http://localhost:8080/users", payload).then(() => {
      console.log("Data sent successfully");
      navigate("/");
      toast.success("User Created Successfully!", {
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
    });
  };

  return (
    <div>
      <h1>Create a New User</h1>
      <form action="" onSubmit={createData}>
        <table cellPadding="10px">
          <thead>
            <tr>
              <th>Labels</th>
              <th></th>
              <th>Information</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <label htmlFor="id">ID</label>
              </td>
              <td>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </td>
              <td>
                <input
                  type="number"
                  name="id"
                  id="id"
                  placeholder="e.g:- 1"
                  onChange={(e) => {
                    setId(e.target.value);
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="name">Name</label>
              </td>
              <td>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </td>
              <td>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="e.g:- Vishal"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="email">Email</label>
              </td>
              <td>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </td>
              <td>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="e.g:- vishal@gmail.com"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="phone">Phone Number</label>
              </td>
              <td>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </td>
              <td>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="e.g:- 993xxxx422"
                  maxLength={10}
                  minLength={10}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="company">Company</label>
              </td>
              <td>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </td>
              <td>
                <input
                  type="text"
                  name="company"
                  id="company"
                  placeholder="e.g:- ExcelR"
                  onChange={(e) => {
                    setCompany(e.target.value);
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="website">Website</label>
              </td>
              <td>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </td>
              <td>
                <input
                  type="url"
                  name="website"
                  id="website"
                  placeholder="e.g:- https://www.excelr.com"
                  onChange={(e) => {
                    setWebsite(e.target.value);
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="street">Street</label>
              </td>
              <td>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </td>
              <td>
                <input
                  type="text"
                  name="street"
                  id="street"
                  placeholder="e.g:- R.P Road"
                  onChange={(e) => {
                    setStreet(e.target.value);
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="city">City</label>
              </td>
              <td>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </td>
              <td>
                <input
                  type="text"
                  name="city"
                  id="city"
                  placeholder="e.g:- Hyderabad"
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="pin">Pincode</label>
              </td>
              <td>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </td>
              <td>
                <input
                  type="tel"
                  name="pin"
                  id="pin"
                  placeholder="e.g:- 503029"
                  maxLength={6}
                  minLength={6}
                  onChange={(e) => {
                    setPin(e.target.value);
                  }}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button className="uni">Submit</button>
      </form>
    </div>
  );
};

export default Create;
