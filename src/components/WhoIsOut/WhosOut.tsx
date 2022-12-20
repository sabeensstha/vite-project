import { Typography } from "@mui/material";
import React from "react";
import { Celebrations } from "./Celebrations";
import './whosOut.css'

export const WhosOut = () => {
  return (
    <>
    <div style={{
      borderBottom: "1px solid black",
      overflowY: "scroll",
      height: "350px",
      width: "440px"
    }}>
      <Typography
        align="left"
        variant="h4"
      >
        Who's Out
      </Typography>
      <Typography
        align="center"
        variant="h6"
        
      >
        Today
      </Typography>
        <span style={{
            display: 'contents'
        }}>
            <img className="leaveAvatar" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
            <img className="leaveAvatar" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
            <img className="leaveAvatar" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
            <img className="leaveAvatar" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
            <img className="leaveAvatar" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
            <img className="leaveAvatar" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
            <img className="leaveAvatar" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
            <img className="leaveAvatar" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
            <img className="leaveAvatar" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
        </span>
      <Typography
        align="center"
        marginTop={3}
        variant="h6"
      >
        Tommorow
      </Typography>
        <span style={{
            display: 'contents',
            marginRight: "10px"
        }}>
            <img className="leaveAvatar" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
            <img className="leaveAvatar" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
            <img className="leaveAvatar" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
            <img className="leaveAvatar" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
            <img className="leaveAvatar" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
            <img className="leaveAvatar" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
            <img className="leaveAvatar" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
            <img className="leaveAvatar" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
        </span>
      <Typography
        align="center"
        marginTop={3}
        variant="h6"
      >
        Sunday, February 1
      </Typography>
        <span style={{
            display: 'contents',
            marginRight: "10px"
        }}>
            <img className="leaveAvatar" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
            <img className="leaveAvatar" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
            <img className="leaveAvatar" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
            <img className="leaveAvatar" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
            <img className="leaveAvatar" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
        </span>
    </div>
        <Celebrations />
    </>
  );
};
