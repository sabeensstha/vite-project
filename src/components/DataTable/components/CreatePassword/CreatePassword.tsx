import React from 'react'
import { Footer } from '../Footer/Footer'
import './createPassword.css'
import Navbar from '../AppBar/Navbar'
import Button from '@mui/material/Button';
import { Box } from '@mui/system';

type CreatePasswordProps = {
    auth: any;
    setAuth: any;
};

const CreatePassword = ({ auth, setAuth }: CreatePasswordProps) => {
    return (
        <div>
            <Navbar auth={auth} setAuth={setAuth} /><br /><br /><br /><br />
            <Box sx={{
                border: "1px solid grey",
                width: "20vw",
                height: "20vh",
                textAlign: "center",
                display: "flex",
                marginLeft: "40vw"
            }}>
                <form className="formForPassword">
                    <label className="labelCss">Enter Password</label><br />
                    <input type="password" className="inputPassword" /><br />
                    <label className="labelCss">Retype Password</label><br />
                    <input type="password" className="inputPassword" /><br />
                    <Button variant="outlined" sx={{
                        marginTop: "10px"
                    }}>Submit</Button>
                </form>
            </Box>
            <Footer />
        </div>
    )
}

export default CreatePassword
