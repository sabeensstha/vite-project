import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Navbar from "../AppBar/Navbar";
import { Footer } from "../Footer/Footer";
import "./userlist.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MultipleSelectCheckmarks from "../MultipleSelectComponent/MultipleSelectComponent";

type UserListProps = {
  auth: any;
  setAuth: any;
};

export const UserList = ({ auth, setAuth }: UserListProps) => {
  return (
    <>
      <Navbar auth={auth} setAuth={setAuth} />
      <br />
      <br />
      <br />
      <br />
      <hr />
      <Typography variant="h4" color="black">
        Users
      </Typography>
      <hr />
      <div
        style={{
          height: "100%",
          width: "100%",
        }}
      >
        {/* <form className="form nosubmit">
          <input
            className="input nosubmit"
            type="search"
            placeholder="Search..."
          />
          <label
            style={{
              textDecoration: "underline",
              paddingBottom: "10px",
            }}
          >
            Roles
          </label>
        </form> */}
        <FormControl variant="standard">
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <SearchOutlinedIcon
              fontSize="large"
              sx={{ color: "action.active", mr: 1, my: 0.5, height: "30px" }}
            />
            <TextField
              id="input-with-sx"
              label="Search"
              variant="filled"
              sx={{
                width: "500px",
              }}
            />
            <MultipleSelectCheckmarks
              roles={["Admin", "Staff", "Manager"]}
              tag="Roles"
            />
            <MultipleSelectCheckmarks
              roles={["Active", "Deactive"]}
              tag="Status"
            />
            <Box
              style={{
                marginLeft: "520px",
                display: "flex",
              }}
            >
              <MultipleSelectCheckmarks
                roles={["Delete", "Edit"]}
                tag="More Action"
              />
              <Button
                variant="outlined"
                color="secondary"
                sx={{
                  height: "50px",
                  marginTop: "10px",
                }}
              >
                Create User
              </Button>
            </Box>
          </Box>
        </FormControl>
      </div>
      <Footer />
    </>
  );
};
