import React, { useState } from "react";
import "./Registration.css";

function Registration() {
  const [data, setdata] = useState({
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
    setError(() => {
      return {
        name: "",
        username: "",
        email: "",
        mobile: "",
        checked: "",
      };
    });
    if (data.name.trim().length === 0) {
      setError((error)=>{return{ ...error, name: "Name is required" }});
    }

    if (data.email.trim().length === 0) {
      setError((error)=>{return{ ...error, email: "Email is required" }});
    }

    if (data.username.trim().length === 0) {
      setError((error)=>{return{ ...error, username: "Username is required" }});
    }

    if (data.mobile.trim().length === 0) {
      setError((error)=>{return{ ...error, mobile: "Mobile is required" }});
    }

    if (!data.checked) {
      setError((error)=>{return{ ...error, checked: "Please accept the terms and conditions" }});
    }
    
  };

  const savedata=()=>{
    validate();
    if(error.name==="" && error.username==="" && error.email==="" && error.mobile==="" && error.checked===""){
      console.log(data);
    }
  }

  return (
    <>
    <div className="container">
      <div className="head">Super app</div> 
      <p style={{fontSize:'18px',fontWeight:'0', marginTop:'10px',marginBottom:'40px'}}>Create your new account</p>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          validate();
          savedata();
        }}
      >
        <input style={{marginTop:'10px'}} type="text" name="name" placeholder="Name" value={data.name} onChange={(e)=>setdata({...data, name:e.target.value})} />
        <span style={{ color: "red" }}>{error.name}</span>
        <input
          type="text"
          name="username"
          placeholder="UserName"
          value={data.username}
          onChange={(e)=>setdata({...data, username:e.target.value})}
        />
        <span style={{ color: "red" }}>{error.username}</span>
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={data.email}
          onChange={(e)=>setdata({...data, email:e.target.value})}
        />
        <span style={{ color: "red" }}>{error.email}</span>
        <input
          type="tel"
          name="mobile"
          placeholder="Mobile"
          value={data.mobile}
          onChange={(e)=>setdata({...data, mobile:e.target.value})}
        />
        <span style={{ color: "red" }}>{error.mobile}</span>
        <label htmlFor="check">
          <input className="check" type="checkbox" name="checked" value={data.checked} onChange={(e)=>setdata({...data, checked:e.target.value})} /> Share my
          registration data with Superapp
        </label>
        <span style={{ color: "red" }}>{error.checked}</span>
        <button type="submit">SIGN UP</button>
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
