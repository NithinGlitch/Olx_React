import React, { useState } from 'react'
import axios from 'axios';
import { Routes, Route, useNavigate, BrowserRouter } from "react-router-dom";
import '../../App.css';
import './Login.css';
import Product from './Products';
import { Link } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const validate = (event) => {
    let login = { email: email, password: pwd };
    console.log(login);
    axios
      .post(`http://localhost:57240/api/User/Login`, login)
      .then((res) => {
        console.log(res);
        console.log(res.data);

         //set token in local storage
         localStorage["token"] = res.data.token;
         console.log(localStorage["token"]);
         if (res.data.role === "Admin") {
           navigate("/home"); //navigate to items component
         }
         
      });
    event.preventDefault();
    alert("Welcome Back!!");
    
  };

  return (

    <div className='main'>
      <div className="sub-main">
        <div>
          <div>
            <h1>LOG IN</h1>
          </div>
          <div className="imgs">
            <div className="container-image">
              <img src="/images/aa.webp" alt="profile" className="profile" />
            </div>
          </div><br/>
          <form onSubmit={validate}>

            <div className="second-input">
              {/* <img src="/images/email.jpg" alt="email" className="email"/> */}
              <input
                type="text"
                onChange={(event) => setEmail(event.target.value)} placeholder="Enter Your Email"></input>
            </div><br/>
            <div className="second-input">
              {/* <img src="/images/pass.png" alt="pass" className="email"/> */}
              <input
                type="Password"
                onChange={(event) => setPwd(event.target.value)} placeholder="Enter Your Password"></input>
            </div>
            
              <button className='login-button'>Login</button>
            
          </form>
          <br />
          <p className="link">
            <Link to="#">Forgot password ?</Link> Or <Link to="/sign-up">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
    
  )
}




















