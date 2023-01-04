import { Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import "./details.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  textAlign: "left",
  height: "80px",
  borderRadius: "0.1px",
  padding: theme.spacing(1),
}));
const ItemRequest = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  textAlign: "left",
  height: "80px",
  borderRadius: "0.1px",
  borderBottom: "0.1px solid black",
  padding: theme.spacing(1),
}));

export const Details = () => {
  const requests = [
    {
      id: 1,
      img: "https://pixlr.com/images/index/remove-bg.webp",
      date: "2022/02/14",
      request: "Pending",
    },
    {
      id: 2,
      img: "https://pixlr.com/images/index/remove-bg.webp",
      date: "2022/02/14",
      request: "Approved",
    },
    {
      id: 3,
      img: "https://pixlr.com/images/index/remove-bg.webp",
      date: "2022/02/14",
      request: "Rejected",
    },
    {
      id: 4,
      img: "https://pixlr.com/images/index/remove-bg.webp",
      date: "2022/02/14",
      request: "Rejected",
    },
  ];
  return (
    <div>
      <img
        className="avatar"
        src="https://pixlr.com/images/index/remove-bg.webp"
      />
      <Typography variant="h5">ABC DEF</Typography>
      <Typography variant="body2">Frontend developer</Typography>
      <Grid container item xs={12}>
        <Grid item xs={6}>
          <Item style={{ border: "0.1px solid black" }}>
            <Typography sx={{ paddingLeft: "5px" }}>Personal Leave</Typography>
            <span style={{ display: "flex" }}>
              <img
                className="leaveAvatar"
                src="https://pixlr.com/images/index/remove-bg.webp"
              />
              <Typography
                sx={{
                  paddingTop: "10px",
                  paddingLeft: "15px",
                }}
              >
                2 Days
              </Typography>
            </span>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item
            style={{
              borderTop: "0.1px solid black",
              borderBottom: "0.1px solid black",
              borderRight: "0.1px solid black",
              marginBottom: "15px",
            }}
          >
            <Typography sx={{ paddingLeft: "5px" }}>Sick Leave</Typography>
            <span style={{ display: "flex" }}>
              <img
                className="leaveAvatar"
                src="https://pixlr.com/images/index/remove-bg.webp"
              />
              <Typography
                sx={{
                  paddingTop: "10px",
                  paddingLeft: "15px",
                }}
              >
                2 Days
              </Typography>
            </span>
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              border: "0.1px solid black",
              width: "auto",
              height: "345px",
              overflowY: "scroll",
            }}
          >
            {requests.map((request) => {
              return (
                <ItemRequest key={request.id}>
                  <span style={{ display: "flex" }}>
                    <img className="leaveAvatar" src={request.img} />
                    <Typography
                      sx={{
                        marginTop: "15px",
                        marginLeft: "20px",
                      }}
                    >
                      {request.date}
                    </Typography>
                    <Button
                      variant="outlined"
                      sx={{
                        marginLeft: "50px",
                        marginTop: "10px",
                        width: "150px",
                        color: "darkblue",
                        border: "0.1px solid black",
                      }}
                    >
                      {request.request}
                    </Button>
                  </span>
                </ItemRequest>
              );
            })}
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};
