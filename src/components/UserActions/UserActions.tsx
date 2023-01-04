import React, { useState } from 'react'
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import LockResetIcon from '@mui/icons-material/LockReset';
import PersonOffIcon from '@mui/icons-material/PersonOff';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box } from '@mui/material';

type UserActionProps = {
    params: any,
    rowId: any,
    setRowId: any
}

const UserActions = ({ params, rowId, setRowId }: UserActionProps) => {
    return (
        <Box sx={{
            height: "20px",
            width: "10px",
            display: "flex",
            marginRight: "100px"
        }}>
            <ModeEditIcon color="primary" />
            <LockResetIcon color="primary" />
            <PersonOffIcon color="primary" />
            <DeleteIcon color="primary" />
        </Box>
    )
}

export default UserActions
