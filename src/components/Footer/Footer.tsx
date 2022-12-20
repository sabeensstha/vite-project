import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const Footer = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "55px",
        borderTop: "3px solid grey",
        position: "fixed",
        left: 0,
        bottom: 0,
      }}
    >
      <span style={{
        display: 'flex',
        margin: 10
      }}>
        <Typography color='primary'>Privacy Policy</Typography>&nbsp; &nbsp;&nbsp;&nbsp;
        <Typography color='primary'>Terms of service</Typography>
        <Typography sx={{
            color: "grey",
            marginLeft: "600px"
        }}>© 2022 Darse Technologies All rights reserved </Typography>
      </span>
    </Box>
  );
};
