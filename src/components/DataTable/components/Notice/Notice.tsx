import { Box, Typography } from "@mui/material";
import React from "react";
import './notice.css'

const Notice = () => {
  const notices = [
    {
      img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      title: "Changes in it policy",
      contents:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
    {
      img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      title: "Changes in it policy1",
      contents:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
    {
      img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      title: "Changes in it policy2",
      contents:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
  
  ];
  return (
    <div style={{
        height: "300px",
        overflowY: "auto"
    }}>
      <Typography variant="h4" align="left" >
        Notice Board
      </Typography>
      {notices.map((notice) => {
        return (
            <Box display="flex" key={notice.title} borderBottom={1}>
                <img style={{
                   borderRadius: "50%",
                   height: "55px",
                   width: "45px",
                  marginLeft: "20px",
                  marginTop: "5px"
                }} src={notice.img} alt="notice" />
                <span>
                    <Typography variant="h6" align="left" paddingLeft={2}>{notice.title}</Typography>
                    <Typography variant="body2">{notice.contents}</Typography>
                </span>
            </Box>
        )
      })}
    </div>
  );
};

export default Notice;
