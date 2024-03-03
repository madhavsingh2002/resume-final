import { Grid, TextField, Typography } from  "@mui/material";

const FormProjectsDetails = ({  formValues, setFormValues  }) => {
  
  return (

    <div>
      <Typography variant="h6" style={{textAlign:'center'}}>Projects Details</Typography>
            <Grid container spacing={2} alignItems="center" lg={12}>
              <Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="project1"
                  label="Project1"
                  style={{ width: "80%" }}
                  required
                  value={formValues.project1}
                  onChange={(e) => {
                    setFormValues({ ...formValues, project1: e.target.value });
                  }}
                />
              </Grid>
              <Grid item md={4} sm={6} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="project1fromyear1"
                  
                  type="date"
                  style={{ width: "80%" }}
                  required
                  value={formValues.project1fromyear1}
                  onChange={(e) => {
                    setFormValues({ ...formValues, project1fromyear1: e.target.value });
                  }}
                />
              </Grid>

              <Grid item md={4} sm={6} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="project1toyear1"
                  type="date"
                  // label="To Year"
                  style={{ width: "80%" }}
                  required
                  value={formValues.project1toyear1}
                  onChange={(e) => {
                    setFormValues({ ...formValues, project1toyear1: e.target.value });
                  }}
                />
              </Grid>

              <Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  label="Designation"
                  variant="outlined"
                  style={{ width: "80%" }}
                  name="project1designation"
                  required
                  value={formValues.project1designation}
                  onChange={(e) => {
                    setFormValues({ ...formValues, project1designation: e.target.value });
                  }}
                />
              </Grid>

              <Grid item md={8} sm={12} xs={12} lg={8}>
                <TextField
                  margin="dense"
                  label="Description"
                  variant="outlined"
                  style={{ width: "90%" }}
                  name="projectdescription1"
                  required
                  value={formValues.projectdescription1}
                  onChange={(e) => {
                    setFormValues({ ...formValues, projectdescription1: e.target.value });
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
                  name="project2"
                  label="Project 2"
                  style={{ width: "80%" }}
                  required
                  value={formValues.project2}
                  onChange={(e) => {
                    setFormValues({ ...formValues, project2: e.target.value });
                  }}
                />
              </Grid>
              <Grid item md={4} sm={6} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="project2fromyear1"
                  // label="From Year"
                  type="date"
                  style={{ width: "80%" }}
                  required
                  value={formValues.project2fromyear2}
                  onChange={(e) => {
                    setFormValues({ ...formValues, project2fromyear2: e.target.value });
                  }}
                />
              </Grid>

              <Grid item md={4} sm={6} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="project2fromyear2"
                  // label="To Year"
                  type="date"
                  style={{ width: "80%" }}
                  required
                  value={formValues.project2toyear2}
                  onChange={(e) => {
                    setFormValues({ ...formValues, project2toyear2: e.target.value });
                  }}
                />
              </Grid>

              <Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  label="Designation"
                  variant="outlined"
                  style={{ width: "80%" }}
                  name="project2designation"
                  required
                  value={formValues.project2designation}
                  onChange={(e) => {
                    setFormValues({ ...formValues, project2designation: e.target.value });
                  }}
                />
              </Grid>

              <Grid item md={8} sm={8} xs={8} lg={8}>
                <TextField
                  margin="dense"
                  label="Description"
                  variant="outlined"
                  style={{ width: "90%" }}
                  name="projectdescription2"
                  required
                  value={formValues.projectdescription2}
                  onChange={(e) => {
                    setFormValues({ ...formValues, projectdescription2: e.target.value });
                  }}
                />
              </Grid>
            </Grid>
          </div>
  );
};

export default FormProjectsDetails;
