import { Grid, TextField, Typography, Alert } from "@mui/material";
import { useState } from "react";

const FormUserDetails = ({ formValues, setFormValues }) => {
  console.log(formValues);
  

  return (
    <>
      <Typography variant="h6" style={{ textAlign: "center" }}>
        Personal Information
      </Typography>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={3} // Adjust spacing between items
      >
        {/* First container */}
        <Grid item xs={12} md={6}> {/* Use half of the width on small screens, full width on medium screens and up */}
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12} sx={{ mt: 3, width: "100%" }}> {/* Make each item full width */}
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
            <Grid item xs={12} sx={{ mt: 3, width: "100%" }}>
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
            <Grid item xs={12} sx={{ mt: 3, width: "100%" }}>
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
              {formValues.email.length > 0 &&
                !/^\S+@\S+\.\S+$/.test(formValues.email) && (
                  <Alert severity="error" sx={{ mt: 1 }}>
                    Please enter a valid email address.
                  </Alert>
                )}
            </Grid>
            <Grid item xs={12} sx={{ mt: 3, width: "100%" }}>
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
        <Grid item xs={12} md={6}> {/* Use half of the width on small screens, full width on medium screens and up */}
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12} sx={{ mt: 3, width: "100%" }}>
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
            <Grid item xs={12} sx={{ mt: 3, width: "100%" }}>
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
            <Grid item xs={12} sx={{ mt: 3, width: "100%" }}>
              <TextField
                type="text"
                label="Number"
                name="number"
                fullWidth
                inputProps={{
                  min: 0,
                  maxLength: 12,
                }}
                value={formValues.number}
                onChange={(e) => {
                  const inputValue = e.target.value;
                  if (inputValue.length < 13 && /^[0-9]*$/.test(inputValue)) {
                    setFormValues({ ...formValues, number: inputValue });
                  }
                }}
              />
              {formValues.number.length > 0 &&
                (formValues.number.length < 10 ||
                  formValues.number.length > 12 ||
                  formValues.number < 0) && (
                  <Alert severity="error" sx={{ mt: 1 }}>
                    Contact number should be between 10 to 12 digits and
                    non-negative.
                  </Alert>
                )}
            </Grid>
            <Grid item xs={12} sx={{ mt: 3, width: "100%" }}>
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
