import { Box, Typography } from "@mui/material";
import React from "react";
import "./welcome.css";

const Welcome = () => {
  const welcomeUsers = [
    {
      id: 1,
      img: "sabeen.jpg",
      name: "Sabeen Shrestha",
      country: "Nepal",
      position: "Frontend Developer Intern",
      date: "October 10,2022",
    },
    {
      id: 2,
      img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      name: "Rabeen Shrestha",
      country: "Morocco",
      position: "Junior Frontend Developer",
      date: "January 10,2022",
    },
    {
      id: 3,
      img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      name: "Nabeen Shrestha",
      country: "India",
      position: "Senior Frontend Developer",
      date: "October 1,2022",
    },
  ];
  return (
    <div>
      <Typography variant="h4" align="left">
        Welcome To Darse Technologies
      </Typography>
      {welcomeUsers.map((users) => {
        return (
          <Box
            key={users.id}
            display="flex"
            paddingTop={1}
            paddingBottom={2}
            borderBottom="0.1px solid grey"
          >
            <img
              style={{
                borderRadius: "50%",
                height: "55px",
                width: "45px",
                marginLeft: "20px",
                marginTop: "5px",
              }}
              src={users.img}
              alt="imgg"
            />
            <Box paddingLeft={3}>
              <Typography align="left" variant="body2">
                {users.name}
              </Typography>

              <Typography variant="body2">{users.country}</Typography>
            </Box>
            <Box
              sx={{
                marginLeft: "auto",
                paddingRight: "10px",
              }}
            >
              <Typography align="right" variant="body2">
                {users.position}
              </Typography>

              <Typography variant="body2" align="right">
                {users.date}
              </Typography>
            </Box>
          </Box>
        );
      })}
    </div>
  );
};

export default Welcome;
