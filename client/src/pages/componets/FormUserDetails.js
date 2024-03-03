import { Grid, TextField, Typography } from "@mui/material";

const FormUserDetails = ({ formValues, setFormValues }) => {
  console.log(formValues);
  return (
    <>
    <Typography variant="h6" style={{textAlign:'center'}}>Personal Information</Typography>
    <Grid container justifyContent="center" alignItems="center"  style={{ width:'100%'}}>
      {/* First container */}
      
      <Grid item xs={6} >
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item sx={{ mt: 3, width: 300 }}>
            <TextField
              label="First Name"
              name="firstName"
              value={formValues.firstName}
              fullWidth
              onChange={(e) => {
                setFormValues({ ...formValues, firstName: e.target.value });
              }}
            />
          </Grid>
          <Grid item sx={{ mt: 3, width: 300 }}>
            <TextField
              label="Last Name"
              name="lastName"
              value={formValues.lastName}
              fullWidth
              onChange={(e) => {
                setFormValues({ ...formValues, lastName: e.target.value });
              }}
            />
          </Grid>
          <Grid item sx={{ mt: 3, width: 300 }}>
            <TextField
              type="email"
              label="Email"
              name="email"
              value={formValues.email}
              fullWidth
              onChange={(e) => {
                setFormValues({ ...formValues, email: e.target.value });
              }}
            />
          </Grid>
          <Grid item sx={{ mt: 3, width: 300 }}>
            <TextField
              label="Address (Optional)"
              name="address"
              value={formValues.address}
              fullWidth
              onChange={(e) => {
                setFormValues({ ...formValues, address: e.target.value });
              }}
            />
          </Grid>
        </Grid>
      </Grid>

      {/* Second container */}
      <Grid item xs={6} >
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item sx={{ mt: 3, width: 300 }}>
            <TextField
              label="Website (Optional)"
              name="website"
              value={formValues.website}
              fullWidth
              onChange={(e) => {
                setFormValues({ ...formValues, website: e.target.value });
              }}
            />
          </Grid>
          <Grid item sx={{ mt: 3, width: 300 }}>
            <TextField
              label="Linkedin (Optional)"
              name="linkedin"
              value={formValues.linkedin}
              fullWidth
              onChange={(e) => {
                setFormValues({ ...formValues, linkedin: e.target.value });
              }}
            />
          </Grid>
          <Grid item sx={{ mt: 3, width: 300 }}>
            <TextField
              type="number"
              label="Number"
              name="number"
              required
              value={formValues.number}
              fullWidth
              onChange={(e) => {
                setFormValues({ ...formValues, number: e.target.value });
              }}
            />
          </Grid>
          <Grid item sx={{ mt: 3, width: 300 }}>
            <TextField
              label="Github (Optional)"
              name="github"
              value={formValues.github}
              fullWidth
              onChange={(e) => {
                setFormValues({ ...formValues, github: e.target.value });
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
   </>
  );
};

export default FormUserDetails;
