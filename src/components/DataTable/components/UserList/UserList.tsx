import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import Navbar from "../AppBar/Navbar";
import { Footer } from "../Footer/Footer";
import "./userlist.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import MultipleSelectCheckmarks from "../MultipleSelectComponent/MultipleSelectComponent";
import BaseModal from "../ModalPopout/BaseModal";
import DataTable from "../DataTable/DataTable";

type UserListProps = {
  auth: any;
  setAuth: any;
};

export const UserList = ({ auth, setAuth }: UserListProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  const tgl = () => {
    return null;
  };
  const [search, setSearch]: [string, (search: string) => void] =
    React.useState("");

  const handleChange = (e: { target: { value: string } }) => {
    setSearch(e.target.value);
  };
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
              value={search}
              sx={{
                width: "500px",
                paddingBottom: "10px",
              }}
              onChange={handleChange}
            />
            <MultipleSelectCheckmarks
              roles={["Admin", "Staff", "Manager"]}
              tag="Roles"
            />
            <MultipleSelectCheckmarks
              roles={["Active", "Pending", "Suspended"]}
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
            </Box>
          </Box>
        </FormControl>
        <Button
          variant="outlined"
          color="secondary"
          sx={{
            height: "50px",
            marginTop: "10px",
            width: "136px",
          }}
          onClick={toggleModal}
        >
          {isModalVisible ? "Close" : "Create User"}
        </Button>
        <BaseModal isModalVisible={isModalVisible} onBackDropClick={tgl} toggleModal={toggleModal} />
      </div>
      <br />
      <DataTable />
      <Footer />
    </>
  );
};
