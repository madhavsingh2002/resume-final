import { AppBar, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router";

const TopAppBar = ({ step }) => {
  const navigate = useNavigate();
  function logout (){
    localStorage.setItem('login',false);
    navigate('/login')
  }
  return (
    <AppBar style={{background:"black"}} position="fixed">
      <Toolbar style={{ justifyContent:'space-between' }}>
        <Typography variant="h6" >
          Resume Builder
        </Typography>
        <button style={{color:"white",background:'none',border:'none',fontSize:'20px',cursor:'pointer'}} onClick={logout}  >
          Logout
        </button>
      </Toolbar>
    </AppBar>
  );
};

export default TopAppBar;
