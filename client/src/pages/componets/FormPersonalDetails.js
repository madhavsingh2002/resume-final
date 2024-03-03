import { Grid, TextField, Typography } from  "@mui/material";

const FormPersonalDetails = ({  formValues, setFormValues  }) => {

  return (
        <div>
      <Typography variant="h6" style={{textAlign:'center'}}>Education Information</Typography>
            <Grid container spacing={2} alignItems="center" lg={12}>
              <Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="college"
                  label="College/Unviersity"
                  style={{ width: "80%" }}
                  required
                  value={formValues.college}
                  onChange={(e) => {
                    setFormValues({ ...formValues, college: e.target.value });
                  }}
                />
              </Grid>
              <Grid item md={4} sm={6} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="collegefromyear1"
                  
                  type="date"
                  style={{ width: "80%" }}
                  required
                  value={formValues.collegefromyear1}
                  onChange={(e) => {
                    setFormValues({ ...formValues, collegefromyear1: e.target.value });
                  }}
                />
              </Grid>

              <Grid item md={4} sm={6} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="collegetoyear1"
                  type="date"
                  // label="To Year"
                  style={{ width: "80%" }}
                  required
                  value={formValues.collegetoyear1}
                  onChange={(e) => {
                    setFormValues({ ...formValues, collegetoyear1: e.target.value });
                  }}
                />
              </Grid>

              <Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  label="Qualification"
                  variant="outlined"
                  style={{ width: "80%" }}
                  name="collegequalification1"
                  required
                  value={formValues.collegequalification1}
                  onChange={(e) => {
                    setFormValues({ ...formValues, collegequalification1: e.target.value });
                  }}
                />
              </Grid>

              <Grid item md={8} sm={12} xs={12} lg={8}>
                <TextField
                  margin="dense"
                  label="Description"
                  variant="outlined"
                  style={{ width: "90%" }}
                  name="collegedescription1"
                  required
                  value={formValues.collegedescription1}
                  onChange={(e) => {
                    setFormValues({ ...formValues, collegedescription1: e.target.value });
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
                  name="school"
                  label="School"
                  style={{ width: "80%" }}
                  required
                  value={formValues.school}
                  onChange={(e) => {
                    setFormValues({ ...formValues, school: e.target.value });
                  }}
                />
              </Grid>
              <Grid item md={4} sm={6} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="schoolfromyear2"
                  // label="From Year"
                  type="date"
                  style={{ width: "80%" }}
                  required
                  value={formValues.schoolfromyear2}
                  onChange={(e) => {
                    setFormValues({ ...formValues, schoolfromyear2: e.target.value });
                  }}
                />
              </Grid>

              <Grid item md={4} sm={6} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="schooltoyear2"
                  // label="To Year"
                  type="date"
                  style={{ width: "80%" }}
                  required
                  value={formValues.schooltoyear2}
                  onChange={(e) => {
                    setFormValues({ ...formValues, schooltoyear2: e.target.value });
                  }}
                />
              </Grid>

              <Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  label="Qualification"
                  variant="outlined"
                  style={{ width: "80%" }}
                  name="schoolqualification2"
                  required
                  value={formValues.schoolqualification2}
                  onChange={(e) => {
                    setFormValues({ ...formValues, schoolqualification2: e.target.value });
                  }}
                />
              </Grid>

              <Grid item md={8} sm={8} xs={8} lg={8}>
                <TextField
                  margin="dense"
                  label="Description"
                  variant="outlined"
                  style={{ width: "90%" }}
                  name="schooldescription2"
                  required
                  value={formValues.schooldescription2}
                  onChange={(e) => {
                    setFormValues({ ...formValues, schooldescription2: e.target.value });
                  }}
                />
              </Grid>
            </Grid>
          </div>
  );
};

export default FormPersonalDetails;
