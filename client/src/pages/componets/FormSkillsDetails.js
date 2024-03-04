import { Grid, TextField, Typography } from  "@mui/material";

const FormSkillsDetails = ({  formValues, setFormValues }) => {
  

  return (

    <div>
      <Typography variant="h6" style={{textAlign:'center'}}>Skills Details</Typography>
      <Grid container spacing={2} alignItems="center" lg={12}>
              
              <Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  label="Skill 1"
                  variant="outlined"
                  style={{ width: "80%" }}
                  name="skill1"
                  
                  value={formValues.skill1}
                  onChange={(e) => {
                    setFormValues({ ...formValues, skill1: e.target.value });
                  }}
                />
              </Grid>

              <Grid item md={8} sm={12} xs={12} lg={8}>
                <TextField
                  margin="dense"
                  label="Description"
                  variant="outlined"
                  style={{ width: "90%" }}
                  name="skilldescription1"
                  
                  value={formValues.skilldescription1}
                  onChange={(e) => {
                    setFormValues({ ...formValues, skilldescription1: e.target.value });
                  }}
                />
              </Grid>
            </Grid>
            <br />
            
            <Grid container spacing={2} alignItems="center" lg={12}>
              
              <Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  label="Skill 2"
                  variant="outlined"
                  style={{ width: "80%" }}
                  name="skill2"
                  
                  value={formValues.skill2}
                  onChange={(e) => {
                    setFormValues({ ...formValues, skill2: e.target.value });
                  }}
                />
              </Grid>

              <Grid item md={8} sm={12} xs={12} lg={8}>
                <TextField
                  margin="dense"
                  label="Description"
                  variant="outlined"
                  style={{ width: "90%" }}
                  name="description1"
                  
                  value={formValues.skilldescription2}
                  onChange={(e) => {
                    setFormValues({ ...formValues, skilldescription2: e.target.value });
                  }}
                />
              </Grid>
            </Grid>
            <br />
            <Grid container spacing={2} alignItems="center" lg={12}>
              
              <Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  label="Skill 3"
                  variant="outlined"
                  style={{ width: "80%" }}
                  name="skill3"
                  
                  value={formValues.skill3}
                  onChange={(e) => {
                    setFormValues({ ...formValues, skill3: e.target.value });
                  }}
                />
              </Grid>

              <Grid item md={8} sm={12} xs={12} lg={8}>
                <TextField
                  margin="dense"
                  label="Description"
                  variant="outlined"
                  style={{ width: "90%" }}
                  name="description1"
                  
                  value={formValues.skilldescription3}
                  onChange={(e) => {
                    setFormValues({ ...formValues, skilldescription3: e.target.value });
                  }}
                />
              </Grid>
            </Grid>
            <br />
            <Grid container spacing={2} alignItems="center" lg={12}>
              
              <Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  label="Skill 4"
                  variant="outlined"
                  style={{ width: "80%" }}
                  name="skill 4"
                  
                  value={formValues.skill4}
                  onChange={(e) => {
                    setFormValues({ ...formValues, skill4: e.target.value });
                  }}
                />
              </Grid>

              <Grid item md={8} sm={12} xs={12} lg={8}>
                <TextField
                  margin="dense"
                  label="Description"
                  variant="outlined"
                  style={{ width: "90%" }}
                  name="description1"
                  
                  value={formValues.skilldescription4}
                  onChange={(e) => {
                    setFormValues({ ...formValues, skilldescription4: e.target.value });
                  }}
                />
              </Grid>
            </Grid>
          </div>
  );
};

export default FormSkillsDetails;
