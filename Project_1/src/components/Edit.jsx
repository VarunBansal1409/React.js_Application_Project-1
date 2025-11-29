import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { toast, Zoom } from "react-toastify";

const Edit = () => {
  let { userid } = useParams();

  let navigate = useNavigate();

  let [name, setName] = useState("");
  let [id, setId] = useState();
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");
  let [company, setCompany] = useState("");
  let [website, setWebsite] = useState("");
  let [street, setStreet] = useState("");
  let [city, setCity] = useState("");
  let [pin, setPin] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:8080/users/${userid}`).then((res) => {
      console.log(res);
      let { data } = res;
      console.log(data);
      setName(data.name);
      setId(data.id);
      setEmail(data.email);
      setPhone(data.phone);
      setCompany(data.company);
      setWebsite(data.website);
      setStreet(data.address.street);
      setCity(data.address.city);
      setPin(data.address.pin);
    });
  }, []);

  let editData = (e) => {
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
    axios
      .put(`http://localhost:8080/users/${userid}`, payload)
      .then(() => {
        console.log("data edited successfully");
        toast.info("Data Edited Successfully!", {
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
        navigate("/");
      })
      .catch(() => {
        window.alert("Error Occurred");
      });
  };

  return (
    <div>
      <h1 style={{ marginLeft: "50px" }}>Edit the User</h1>
      <form action="" onSubmit={editData}>
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
                  value={id}
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
                  value={name}
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
                  value={email}
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
                  value={phone}
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
                  value={company}
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
                  value={website}
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
                  value={street}
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
                  value={city}
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
                  value={pin}
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
        <button className="unik">Submit</button>
      </form>
    </div>
  );
};

export default Edit;
