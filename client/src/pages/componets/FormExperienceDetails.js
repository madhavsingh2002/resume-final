import { Grid, TextField, Typography } from  "@mui/material";

const FormExperienceDetails = ({  formValues, setFormValues  }) => {
 
  return (

    <div>
      <Typography variant="h6" style={{textAlign:'center'}}>Experience Details</Typography>
            <Grid container spacing={2} alignItems="center" lg={12}>
              <Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="company1"
                  label="Company 1"
                  style={{ width: "80%" }}
                  required
                  value={formValues.company1}
                  onChange={(e) => {
                    setFormValues({ ...formValues, company1: e.target.value });
                  }}
                />
              </Grid>
              <Grid item md={4} sm={6} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="company1fromyear1"
                  type="date"
                  style={{ width: "80%" }}
                  required
                  value={formValues.company1fromyear1}
                  onChange={(e) => {
                    setFormValues({ ...formValues, company1fromyear1: e.target.value });
                  }}
                />
              </Grid>

              <Grid item md={4} sm={6} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="company1toyear1"
                  type="date"
                  // label="To Year"
                  style={{ width: "80%" }}
                  required
                  value={formValues.company1toyear1}
                  onChange={(e) => {
                    setFormValues({ ...formValues, company1toyear1: e.target.value });
                  }}
                />
              </Grid>

              <Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  label="Designation"
                  variant="outlined"
                  style={{ width: "80%" }}
                  name="company1designation"
                  required
                  value={formValues.company1designation}
                  onChange={(e) => {
                    setFormValues({ ...formValues, company1designation: e.target.value });
                  }}
                />
              </Grid>

              <Grid item md={8} sm={12} xs={12} lg={8}>
                <TextField
                  margin="dense"
                  label="Description"
                  variant="outlined"
                  style={{ width: "90%" }}
                  name="companydescription1"
                  required
                  value={formValues.companydescription1}
                  onChange={(e) => {
                    setFormValues({ ...formValues, companydescription1: e.target.value });
                  }}
                />
              </Grid>
            </Grid>
            <br />
            
            <br />
            <Grid container spacing={2} alignItems="center" lg={12}>
              <Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="Company2"
                  label="Company 2"
                  style={{ width: "80%" }}
                  required
                  value={formValues.company2}
                  onChange={(e) => {
                    setFormValues({ ...formValues, company2: e.target.value });
                  }}
                />
              </Grid>
              <Grid item md={4} sm={6} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="company2fromyear2"
                  // label="From Year"
                  type="date"
                  style={{ width: "80%" }}
                  required
                  value={formValues.company2fromyear2}
                  onChange={(e) => {
                    setFormValues({ ...formValues, company2fromyear2: e.target.value });
                  }}
                />
              </Grid>

              <Grid item md={4} sm={6} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="company2toyear2"
                  // label="To Year"
                  type="date"
                  style={{ width: "80%" }}
                  required
                  value={formValues.company2toyear2}
                  onChange={(e) => {
                    setFormValues({ ...formValues, company2toyear2: e.target.value });
                  }}
                />
              </Grid>

              <Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  label="Designation"
                  variant="outlined"
                  style={{ width: "80%" }}
                  name="companyqualification2"
                  required
                  value={formValues.company2designation}
                  onChange={(e) => {
                    setFormValues({ ...formValues, company2designation: e.target.value });
                  }}
                />
              </Grid>

              <Grid item md={8} sm={8} xs={8} lg={8}>
                <TextField
                  margin="dense"
                  label="Description"
                  variant="outlined"
                  style={{ width: "90%" }}
                  name="companydescription2"
                  required
                  value={formValues.companydescription2}
                  onChange={(e) => {
                    setFormValues({ ...formValues, companydescription2: e.target.value });
                  }}
                />
              </Grid>
            </Grid>
  </div>
  );
};

export default FormExperienceDetails;
