import { useState } from "react";
import {
  TextField,
  Stack,
  Typography,
  Box,
  Alert,
} from "@mui/material";

import axios from "axios";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import authImg from "../images/register.webp";
import Grid from "@mui/material/Grid";
import Util from "../util/Util.js";
import swal from "sweetalert";
import { apis,baseUrl } from "../util/api.js";
function Register() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:4000/signup', {
        fullname,
        email,
        password,
      });
      if(res.status==201){
        swal({
          text: "Successfully Login.",
          icon: "success",
          button: "Ok",
        });
        navigate("/login");
      }
    } catch (err) {
      swal({
        text:`${err.response.data.message}`,
        icon: "error",
        button: "Ok",
      });
      console.log(err.response);
    }
  };

  return (
    <div>
      <Box
        component="main"
        sx={{
          display: "flex",
          flex: "1 1 auto",
        }}
      >
        <Grid container sx={{ flex: "1 1 auto" }}>
          <Grid
            xs={12}
            lg={6}
            sx={{
              backgroundColor: "background.paper",
              display: "flex",
              flexDirection: "column",
              position: "relative",
            }}
          >
            <Box
              component="header"
              sx={{
                left: 0,
                p: 3,
                position: "fixed",
                top: 0,
                width: "100%",
              }}
            ></Box>
            <Box
              sx={{
                backgroundColor: "background.paper",
                flex: "1 1 auto",
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  maxWidth: 550,
                  px: 3,
                  py: "100px",
                  width: "100%",
                }}
              >
                <div>
                  <Stack spacing={1} sx={{ mb: 3 }}>
                    <Typography variant="h4">Register</Typography>
                    <Typography color="text.secondary" variant="body2">
                      Already have a account &nbsp;
                      <Link
                        to="/login"
                        style={{ textDecoration: "none" }}
                        underline="hover"
                        variant="subtitle2"
                      >
                        Login
                      </Link>
                    </Typography>
                  </Stack>

                  <form
                    onSubmit={handleSubmit}
                  >
                    <Stack spacing={3}>
                      <TextField
                        label="Full Name"
                        margin="normal"
                        fullWidth
                        inputProps={{ minLength: 3 }}
                        required
                        name="fullname"
                        value={fullname}
                        onChange={(e) => setFullname(e.target.value)}
                      />
                      {fullname.length > 0  && fullname.length < 3  && (
                        <Alert severity="error">
                          Name should be more than 2 characters.
                        </Alert>
                      )}
                      <TextField
                        label="Email"
                        margin="normal"
                        fullWidth
                        required
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      {email.length > 0  && !Util.emailRegex.test(email)   && (
                        <Alert severity="error">Invalid email address.</Alert>
                      )}
                      <TextField
                        label="Password"
                        margin="normal"
                        fullWidth
                        required
                        type="password"
                        inputProps={{ minLength:8  }}
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      {password.length > 0  && 
                        !Util.passwordRegex.test(password) &&
                        (
                          <Alert severity="error">
                            Password requirements: 8+ characters, with at least one uppercase letter, one lowercase letter, one number, and one special character.
                          </Alert>
                        )}
                      <TextField
                        label="Confirm Password"
                        margin="normal"
                        fullWidth
                        required
                        sx={{mb:3}}
                        type="password"
                        inputProps={{minLength: 8  }}
                        error={password !== confirmPassword}
                        // helperText={
                        //   password !== confirmPassword && "Passwords do not match."
                        // }
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                      {password !== confirmPassword && (
                        <Alert severity="error">
                          Password and Confirm password should be same.
                        </Alert>
                      )}
                    </Stack>

                    <Box sx={{ mt: 2 }}>
                    <button
                      type="submit"
                      className="btn-primary"
                    >
                      Register
                    </button>
                    </Box>
                  </form>
                </div>
              </Box>
            </Box>
          </Grid>
          <Grid
            xs={12}
            lg={6}
            sx={{
              alignItems: "center",
              background:
                "radial-gradient(50% 50% at 50% 50%, #122647 0%, #090E23 100%)",
              color: "white",
              display: "flex",
              justifyContent: "center",
              "& img": {
                maxWidth: "100%",
              },
              height: '100vh'
            }}
          >
            <Box sx={{ p: 3 }}>
              <Typography
                align="center"
                color="inherit"
                sx={{
                  fontSize: "24px",
                  lineHeight: "32px",
                  mb: 1,
                }}
                variant="h1"
              >
                Welcome to{" "}
                <Box component="a" sx={{ color: "#15B79E" }} target="_blank">
                  Resume-Builder
                </Box>
              </Typography>
              <Typography align="center" sx={{ mb: 3 }} variant="subtitle1">
                A professional Application for creating resume.
              </Typography>
              <img alt="" src={authImg} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Register;