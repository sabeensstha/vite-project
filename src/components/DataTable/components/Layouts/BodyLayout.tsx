import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Details } from "../PersonDetails/Details";
import { WhosOut } from "../WhoIsOut/WhosOut";
import Notice from "../Notice/Notice";
import Welcome from "../Welcome/Welcome";
import Navbar from "../AppBar/Navbar";
import { Footer } from "../Footer/Footer";
import { useNavigate } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  border: "0.5px solid black",
  color: theme.palette.text.secondary,
}));

type AuthProps = {
  auth: any;
  setAuth: any;
};

export default function BodyLayout({ auth, setAuth }: AuthProps) {
  let navigate = useNavigate();
  const click = () => {
    setAuth(!auth);
    navigate("/");
  };
  return (
    <>
      <Navbar auth={auth} setAuth={setAuth} />
      <br />
      <br />
      <br />
      <br />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Item sx={{ height: "73vh" }}>
              <Details />
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item sx={{ height: "80vh" }}>
              <WhosOut />
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item sx={{ height: "80vh" }}>
              <Grid item xs={12}>
                <Item sx={{ height: "36vh" }}>
                  <Notice />
                </Item>
              </Grid>
              <Grid item xs={12}>
                <Item
                  sx={{ height: "37vh" }}
                  style={{
                    marginTop: "10px",
                    padding: 0,
                  }}
                >
                  <Welcome />
                </Item>
              </Grid>
            </Item>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  );
}
