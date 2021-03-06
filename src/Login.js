import React from "react";
import { useState } from "react";
import axios from "axios";
import habitImg from "./image/habits.jpg";
import Nav from "./Nav";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = ({ password, setPassword, userName, setUserName }) => {
  const navigate = useNavigate();
  const click = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://myhabitsproject.herokuapp.com/userLogin/login",

        {
          username: userName,
          password: password,
        }
      )
      .then((res) => {
        // console.log(res);
        navigate("/home", { replace: true });
      });
  };

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const backgroundImageStyle = {
    backgroundImage: `url("${habitImg}")`,
    backgroundSize: "cover",
    width: "100vw",
  };

  return (
    <div className="App" style={backgroundImageStyle}>
      <Nav />
      {/* under nav bar  */}
      <h1 className="text-5xl text-slate-700 font-bold">Login</h1>
      <div className="formContainer">
        <div className="form block p-6 rounded-lg shadow-lg bg-white max-w-md">
          <form onSubmit={click}>
            <div className="form-group mb-6">
              <input
                onChange={handleUserNameChange}
                type="text"
                className="form-control block
w-full
px-3
py-1.5
text-base
font-normal
text-gray-700
bg-white bg-clip-padding
border border-solid border-gray-300
rounded
transition
ease-in-out
m-0
focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput125"
                placeholder="User Name"
              />
            </div>
            <div className="form-group mb-6">
              <input
                onChange={handlePasswordChange}
                type="password"
                className="form-control block
w-full
px-3
py-1.5
text-base
font-normal
text-gray-700
bg-white bg-clip-padding
border border-solid border-gray-300
rounded
transition
ease-in-out
m-0
focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput126"
                placeholder="Password"
              />
            </div>
            <button
              type="submit"
              className="
w-full
px-6
py-2.5
bg-blue-600
text-white
font-medium
text-xs
leading-tight
uppercase
rounded
shadow-md
hover:bg-blue-700 hover:shadow-lg
focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
active:bg-blue-800 active:shadow-lg
transition
duration-150
ease-in-out"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
