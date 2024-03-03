import { Typography } from "@mui/material";
import { grey, red } from "@mui/material/colors";

const Success = () => {
  return (<>
    <Typography variant="h4" align="center">
        Thank You for Using this application.</Typography>
        <br />
        <Typography color={red} variant="h5" align="center">
        your resume will be download soon
        </Typography>
        </>
  );
};

export default Success;
