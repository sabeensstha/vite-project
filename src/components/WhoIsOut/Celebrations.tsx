import { Box, Typography } from "@mui/material";
import React from "react";
import "./whosOut.css";

export const Celebrations = () => {
  const celebDetails = [
    {
      img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      name: "Rumi Amatya",
      details: "22nd Feb, 1st Anniversary",
    },
    {
      img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      name: "Simon Sahani",
      details: "22nd Feb, 1st Anniversary",
    },
    {
      img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      name: "Simon Sahani1",
      details: "22nd Feb, 1st Anniversary",
    },
  ];
  return (
    <div
      style={{
        height: "300px",
        overflowY: "auto",
      }}
    >
      <Typography align="left" variant="h4">
        Celebrations
      </Typography>
      {celebDetails.map((details) => {
        return (
          <Box
            key={details.name}
            display="flex"
            paddingTop={1}
            paddingBottom={2}
            borderBottom="0.1px solid grey"
          >
            <img className="leaveAvatar" src={details.img} alt="imgg" />
            <Box paddingLeft={3}>
              <Typography align="left" variant="body2">
                {details.name}
              </Typography>

              <Typography variant="body2">{details.details}</Typography>
            </Box>
          </Box>
        );
      })}
    </div>
  );
};
