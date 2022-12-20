import React from "react";
import Navbar from "../AppBar/Navbar";
import { Footer } from "../Footer/Footer";
import BodyLayout from "../Layouts/BodyLayout";

type RequestProps = {
  auth: any;
  setAuth: any;
};

export const Requests = ({ auth, setAuth }: RequestProps) => {
  return (
    <div>
      <Navbar auth={auth} setAuth={setAuth} />
      <br />
      <br />
      <br />
      <p> Requests page</p>
      <Footer />
    </div>
  );
};
