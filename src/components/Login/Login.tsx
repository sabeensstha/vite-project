import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

type LoginProps = {
  auth: any;
  setauth: any;
};

export const Login = ({ auth, setauth }: LoginProps) => {
  const userName = useRef() as React.MutableRefObject<HTMLInputElement>;
  const password = useRef() as React.MutableRefObject<HTMLInputElement>;
  let navigate = useNavigate();
  console.log(auth);
  window.onpopstate = () => {
    navigate("/");
  };
  const handleSubmit = () => {
    setauth(!auth);
    console.log(auth);
    navigate("/userList", { replace: true });

    if (
      userName.current.value === "admin@admin.com" &&
      password.current.value === "12345"
    ) {
      localStorage.setItem("usernameData", "admin@admin.com");
      localStorage.setItem("passwordData", "12345");
      localStorage.setItem("role", "admin");
    }
  };
  return (
    <>
      <div className="app">
        <h3>Login Form</h3>
        <form onSubmit={handleSubmit}>
          <label className="label" htmlFor="username">
            Username
          </label>
          <input className="input" ref={userName} type="text" />
          <br />
          <label className="label" htmlFor="password">
            Password
          </label>
          <input className="input" ref={password} type="password" />
          <br />
          <button type="submit">Log in</button>
        </form>
      </div>
    </>
  );
};
