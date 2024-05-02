import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Registration.css";

function Registration() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    checked: false,
  });

  const [error, setError] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    checked: "",
  });

  const validate = () => {
    setError({
      name: data.name.trim() === "" ? "Name is required" : "",
      username: data.username.trim() === "" ? "Username is required" : "",
      email: data.email.trim() === "" ? "Email is required" : "",
      mobile: data.mobile.trim() === "" ? "Mobile is required" : "",
      checked: !data.checked ? "Please accept the terms and conditions" : "",
    });
  };

  const savedata = (e) => {
  e.preventDefault();
  validate();
  if (
    !error.name &&
    !error.username &&
    !error.email &&
    !error.mobile &&
    !error.checked
  ) {
    
  }else{
    localStorage.setItem("userinfo", JSON.stringify(data));
    navigate("/category");
  }
};

  return (
    <>
      <div className="container">
        <div className="head">Super app</div>
        <p
          style={{
            position: "relative",
            fontSize: "18px",
            top: "20%",
            right: "23%",
            marginBottom: "20px",
          }}
        >
          Create your new account
        </p>
        <form className="form">
          <input
            style={{ marginTop: "10px" }}
            type="text"
            name="name"
            placeholder="Name"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
            autoComplete="off"
          />
          <span style={{ color: "red" }}>{error.name}</span>
          <input
            type="text"
            name="username"
            placeholder="UserName"
            value={data.username}
            onChange={(e) => setData({ ...data, username: e.target.value })}
            autoComplete="off"
          />
          <span style={{ color: "red" }}>{error.username}</span>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            autoComplete="off"
          />
          <span style={{ color: "red" }}>{error.email}</span>
          <input
            type="tel"
            name="mobile"
            placeholder="Mobile"
            value={data.mobile}
            onChange={(e) => setData({ ...data, mobile: e.target.value })}
            autoComplete="off"
          />
          <span style={{ color: "red" }}>{error.mobile}</span>
          <label htmlFor="check">
            <input
              className="check"
              type="checkbox"
              name="checked"
              checked={data.checked}
              onChange={(e) => setData({ ...data, checked: e.target.checked })}
            />{" "}
            Share my registration data with Superapp
          </label>
          <span style={{ color: "red" }}>{error.checked}</span>
          <button type="submit" onClick={savedata}>
            SIGN UP
          </button>
          <p>
            By clicking on Sign up. you agree to Superapp{" "}
            <a href="#">Terms and Conditions of Use</a>
          </p>
          <p>
            To learn more about how Superapp collects, uses, shares and protects
            your personal data please head Superapp <a href="#">Privacy Policy</a>
          </p>
        </form>
      </div>
    </>
  );
}

export default Registration;
