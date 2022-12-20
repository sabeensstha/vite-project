import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../AppBar/Navbar";
import { Footer } from "../Footer/Footer";

type SettingsProps = {
  auth: any;
  setAuth: any;
};

export const Settings = ({ auth, setAuth }: SettingsProps) => {
  const settings = [
    {
      name: "User",
      img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      path: "/userList",
    },
    {
      name: "Department",
      img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      path: "/department",
    },
    {
      name: "Designation",
      img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      path: "/designation",
    },
  ];
  return (
    <div>
      <Navbar auth={auth} setAuth={setAuth} />
      <br />
      <br />
      <br />
      <h1>Settings page</h1>
      <div
        style={{
          display: "flex",
        }}
      >
        {settings.map((setting) => {
          return (
            <Box
              key={setting.name}
              sx={{
                width: "177px",
                height: "138px",
                border: "1px solid grey",
                margin: 3,
                backgroundColor: "#D9D9D9",
              }}
            >
              <div
                style={{
                  marginLeft: "25%",
                  marginTop: "10%",
                }}
              >
                <img
                  src={setting.img}
                  style={{
                    height: "80px",
                    width: "80px",
                    borderRadius: "50%",
                    alignContent: "center",
                    display: "flex",
                  }}
                />
                <Link
                  to={setting.path}
                  style={{
                    textDecoration: "none",
                    color: "black",
                    marginTop: "10px",
                    display: "flex",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  {setting.name}
                </Link>
              </div>
            </Box>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};
