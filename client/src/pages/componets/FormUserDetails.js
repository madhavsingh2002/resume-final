import { Grid, TextField, Typography, Alert } from "@mui/material";
import { useState } from "react";

const FormUserDetails = ({ formValues, setFormValues }) => {
  console.log(formValues);
  const [error, setError] = useState("");

  const handleNumberChange = (e) => {
    let value = e.target.value;
    value = value.replace(/[^0-9]/g, ""); // Remove non-numeric characters
    if (value.length > 12) {
      value = value.slice(0, 12); // Limit length to 12 characters
    }
    setFormValues({ ...formValues, number: value });
  };

  const handleScroll = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Typography variant="h6" style={{ textAlign: "center" }}>
        Personal Information
      </Typography>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ width: "100%" }}
      >
        {/* First container */}
        <Grid item xs={6}>
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
        <Grid item xs={6}>
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
                  if (inputValue.length <= 12 && /^[0-9]*$/.test(inputValue)) {
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
