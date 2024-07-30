import React, { useState } from 'react';
import './CSS/LoginSignup.css';

const LoginSignup = () => {

  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async () => {
    console.log("Login Function Executed", formData);
    let responseData;
    await fetch("https://trendyworldbackend.onrender.com/login", {
      method: "POST",
      headers: {
        Accept: "application/json", // Corrected to application/json
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    }).then((response) => response.json()).then((data) => responseData = data);

    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.errors);
    }
  };

  const signup = async () => {
    console.log("Signup Function Executed", formData);
    let responseData;
    await fetch("https://trendyworldbackend.onrender.com/signup", {
      method: "POST",
      headers: {
        Accept: "application/json", // Corrected to application/json
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    }).then((response) => response.json()).then((data) => responseData = data);

    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.errors);
    }
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state === "Signup" ? (
            <input
              name="username"
              value={formData.username}
              onChange={changeHandler}
              type="text"
              placeholder="Username" />) : null}
          <input
            name='email' value={formData.email} onChange={changeHandler} type="text" placeholder="Enter your Email" />
          <input
            name='password'
            value={formData.password}
            onChange={changeHandler}
            type="password"
            placeholder="Enter your Password" />
        </div>
        <button onClick={() => (state === "Login" ? login() : signup())}>
          Continue
        </button>

        <p className="loginsignup-login">
          {state === "Login" ? (
            <>
              Don't Have An Account? <a href="#u"> <span onClick={() => setState("Signup")}>Click Here</span></a>
            </>
          ) : (
            <>
              Already have an account? <a href="#u"> <span onClick={() => setState("Login")}>Login Here</span></a>
            </>
          )}
        </p>

        <div className="loginsignup-agree">
          <input type="checkbox" name="agree" id="agree" />
          <p>I agree to the terms of Privacy & Service Policy </p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup;
