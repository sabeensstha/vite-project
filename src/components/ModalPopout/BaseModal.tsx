import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Modal from "./Modal";
import "./Modalpopup.css";
import AccountCircle from "@mui/icons-material/AccountCircle";
import InputAdornment from "@mui/material/InputAdornment";
import Grid from "@mui/material/Grid";
import EmailIcon from "@mui/icons-material/Email";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import axios from "axios";

// import {
//   Button,
//   InputLabel,
//   MenuItem,
//   Select,
//   Typography,
// } from "@mui/material";
// import axios from "axios";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? "#1A2027" : "rgb(213, 201, 156)",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  boxShadow: "none",
  textWeight: 3,
}));

interface BaseModalProps {
  isModalVisible: boolean;
  onBackDropClick: () => void;
}

export interface IValues {
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  roles: any;
}

const defaultValues: IValues = {
  firstName: "",
  middleName: "",
  lastName: "",
  email: "",
  roles: [
    { value: "Admin", label: "Admin" },
    { value: "Manager", label: "Manager" },
    { value: "Staff", label: "Staff" },
  ],
};

const BaseModal: React.FC<BaseModalProps> = ({
  onBackDropClick,
  isModalVisible,
}) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  // const [firstNameErrorMessage, setFirstNameErrorMessage] = useState("");
  // const [lastNameErrorMessage, setLastNameErrorMessage] = useState("");
  // const [emailErrorMessage, setEmailErrorMessage] = useState("");
  // const [rolesErrorMessage, setRolesErrorMessage] = useState("");
  const [data, setData] = useState(defaultValues as IValues);
  const handleChange = (event: any) => {
    event.preventDefault();
    setData((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };
  // const validate = () => {
  //   if (data.firstName === "") {
  //     setFirstNameErrorMessage("First Name cannot be empty.");
  //     return false;
  //   } else if (data.firstName.length > 50) {
  //     setFirstNameErrorMessage("First Name should be less than 50 wrods");
  //     return false;
  //   }
  //   if (data.lastName === "") {
  //     setLastNameErrorMessage("Last Name cannot be empty.");
  //     return false;
  //   } else if (data.lastName.length > 50) {
  //     setLastNameErrorMessage("Last Name should be less than 50 wrods");
  //     return false;
  //   }
  //   var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  //   if (data.email.match(mailformat)) {
  //     setEmailErrorMessage("Valid email address!");
  //   } else {
  //     setEmailErrorMessage("You have entered an invalid email address!");
  //     return false;
  //   }
  //   if (data.roles.length <= 0) {
  //     setRolesErrorMessage("Select atleast one role");
  //     return false;
  //   }
  // };
  // const handleSubmitt = (event: any) => {
  //   event.persist();

  //   console.log(data);
  // };

  if (!isModalVisible) {
    return null;
  }
  return (
    <Modal onBackDropClick={onBackDropClick}>
      <div className="DesktopModalContainer ModalContainer">
        <h3 className="h3">Add new User</h3>
        {/* <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <Box sx={{ width: "100%", alignItems: "left" }}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={6}>
                <Item>
                  <TextField
                    label="First Name"
                    name="firstName"
                    type="text"
                    defaultValue={data.firstName}
                    onChange={handleChange}
                    required
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountCircle />
                        </InputAdornment>
                      ),
                    }}
                    variant="outlined"
                  />
                  <Typography sx={{ color: "red" }}>
                    {firstNameErrorMessage}
                  </Typography>
                  <TextField
                    label="Middle Name"
                    name="middleName"
                    type="text"
                    defaultValue={data.middleName}
                    onChange={handleChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountCircle />
                        </InputAdornment>
                      ),
                    }}
                    variant="outlined"
                  />

                  <TextField
                    label="Last Name"
                    name="lastName"
                    type="text"
                    defaultValue={data.lastName}
                    onChange={handleChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountCircle />
                        </InputAdornment>
                      ),
                    }}
                    variant="outlined"
                  />
                  <Typography sx={{ color: "red" }}>
                    {lastNameErrorMessage}
                  </Typography>
                </Item>
              </Grid>
              <Grid item xs={6}>
                <Item>
                  {" "}
                  <TextField
                    label="Email"
                    name="email"
                    type="text"
                    defaultValue={data.email}
                    onChange={handleChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <EmailIcon />
                        </InputAdornment>
                      ),
                    }}
                    variant="outlined"
                  />
                  <Typography sx={{ color: "red" }}>
                    {emailErrorMessage}
                  </Typography>
                  <InputLabel id="demo-simple-select-label">Roles</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    defaultValue={data.roles}
                    label="Roles"
                    name="roles"
                    onChange={handleChange}
                    sx={{
                      width: "200px",
                    }}
                    multiple
                  >
                    <MenuItem value="Admin">Admin</MenuItem>
                    <MenuItem value="Manager">Manager</MenuItem>
                    <MenuItem value="Staff">Staff</MenuItem>
                  </Select>
                  <Typography sx={{ color: "red" }}>
                    {rolesErrorMessage}
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      marginTop: 1,
                      marginLeft: "10px",
                      color: "black",
                      border: "1px solid black",
                      backgroundColor: "rgb(213, 201, 156)",
                    }}
                    onClick={handleSubmit}
                  >
                    Add User
                  </Button>
                </Item>
              </Grid>
            </Grid>
          </Box>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "left",
            }}
          ></div>
        </Box> */}
        <form
          onSubmit={handleSubmit((data) => {
            axios.post(`http://localhost:3000/users`, data);
          })}
        >
          <input
            {...register("firstName", { required: true, maxLength: 50 })}
            placeholder="First Name"
            className="inputForUserCreate"
            value={data.firstName}
            onChange={handleChange}
          />
          {errors.firstName && errors.firstName.type === "required" && (
            <span style={{ color: "red" }}>This is required</span>
          )}
          {errors.firstName && errors.firstName.type === "maxLength" && (
            <span style={{ color: "red" }}>Max length exceeded</span>
          )}
          <input
            {...register("middleName", { maxLength: 50 })}
            placeholder="Middle Name"
            className="inputForUserCreate"
            value={data.middleName}
            onChange={handleChange}
          />
          <input
            {...register("lastName", {
              required: true,
              maxLength: 50,
            })}
            placeholder="Last Name"
            className="inputForUserCreate"
            value={data.lastName}
            onChange={handleChange}
          />
          {errors.lastName && errors.lastName.type === "required" && (
            <span style={{ color: "red" }}>This is required</span>
          )}
          {errors.lastName && errors.lastName.type === "maxLength" && (
            <span style={{ color: "red" }}>Max length exceeded</span>
          )}
          <input
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            placeholder="Email"
            className="inputForUserCreate"
            value={data.email}
            onChange={handleChange}
          />
          {errors.email && errors.email.type === "required" && (
            <span style={{ color: "red" }}>This is required</span>
          )}
          {errors.email && errors.email.type === "pattern" && (
            <span style={{ color: "red" }}>Not and email pattern</span>
          )}
          <Controller
            control={control}
            defaultValue={data.roles.map((c: any) => c.value)}
            name="roles"
            render={({ field: { onChange, value } }) => (
              <Select
                value={data.roles.filter((c: any) => value.includes(c.value))}
                onChange={(val) => onChange(val.map((c) => c.value))}
                options={data.roles}
                isMulti
              />
            )}
          />

          {/* <select
            {...(register("roles"), { required: true, multiple: true })}
            className="inputForUserCreate"
            defaultValue={undefined || data.roles}
            onChange={handleChange}
            name="roles"
          >
            <option value="Admin">Admin</option>
            <option value="Manager">Manager</option>
            <option value="Staff">Staff</option>
          </select> */}
          {/* <Select
            {...(register("roles"), { required: true, multiple: true })}
            defaultValue={data.roles ?? ""}
            onChange={handleChange}
            name="roles"
          >
            <MenuItem value="Admin">Admin</MenuItem>
            <MenuItem value="Manager">Manager</MenuItem>
            <MenuItem value="Staff">Staff</MenuItem>
          </Select> */}
          <input type="submit" />
        </form>
      </div>
    </Modal>
  );
};

export default BaseModal;
