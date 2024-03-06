import {
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";
import dayjs from "dayjs";
const FormProjectsDetails = ({ formValues, setFormValues }) => {
  const [project1OnGoing, setproject1OnGoing] = useState(false);
  const [project2OnGoing, setproject2OnGoing] = useState(false);

  const handleProject1CheckboxChange = (e) => {
    const checked = e.target.checked;
    setproject1OnGoing(checked);

    if (checked) {
      setFormValues({
        ...formValues,
        project1toyear1: 'present',
      });
    }
  };

  const handleProject2CheckboxChange = (e) => {
    const checked = e.target.checked;
    setproject2OnGoing(checked);

    if (checked) {
      setFormValues({
        ...formValues,
        project2toyear2: 'present',
      });
    }
  };
  return (
    <div>
      <Typography variant="h6" style={{ textAlign: "center" }}>
        Projects Details
      </Typography>
      <Grid container spacing={2} alignItems="center" lg={12}>
      <Grid item md={12} sm={12} xs={12} lg={4} >
          <TextField
            margin="dense"
            variant="outlined"
            name="project1"
            label="Project1"
            style={{ width: "100%" }}
            value={formValues.project1}
            onChange={(e) => {
              setFormValues({ ...formValues, project1: e.target.value });
            }}
          />
        </Grid>
        <Grid item md={12} sm={12} xs={12} lg={4} >
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker
                name="project1fromyear1"
                type="date"
                label="From Year"
                sx={{width:"100%"}}
                value={formValues.project1fromyear1 ? dayjs(formValues.project1fromyear1) : null}
                onChange={(date) => {
                  const formattedDate = date.format("MM-DD-YYYY");
                  setFormValues({
                    ...formValues,
                    project1fromyear1: formattedDate,
                  });
                  console.log(date);
                }}
                disableFuture={true}
              />
            </DemoContainer>
          </LocalizationProvider>
        </Grid>

        <Grid item md={12} sm={12} xs={12} lg={4} sx={{mt:{xs: 0,sm: 0,md: 0,lg: "44px", }}}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker
                name="project1toyear1"
                type="date"
                label="To Year"
                sx={{width:"100%"}}
                value={formValues.project1toyear1 === 'present' ? null : formValues.project1toyear1 ? dayjs(formValues.project1toyear1) : null}
                onChange={(date) => {
                  const formattedDate = date.format("MM-DD-YYYY");
                  setFormValues({
                    ...formValues,
                    project1toyear1: formattedDate,
                  });
                 
                }}
                disableFuture={true}
                disabled={project1OnGoing}
              />
            </DemoContainer>
          </LocalizationProvider>
          <FormControlLabel
            control={
              <Checkbox
                name="project1OnGoing"
                color="primary"
                checked={project1OnGoing}
                onChange={handleProject1CheckboxChange}
              />
            }
            label="On-going"
          />
        </Grid>

        <Grid item md={4} sm={12} xs={12} lg={4}>
          <TextField
            margin="dense"
            label="Designation"
            variant="outlined"
            style={{ width: "100%" }}
            name="project1designation"
            value={formValues.project1designation}
            onChange={(e) => {
              setFormValues({
                ...formValues,
                project1designation: e.target.value,
              });
            }}
          />
        </Grid>

        <Grid item md={8} sm={12} xs={12} lg={8}>
          <TextField
            margin="dense"
            label="Description"
            variant="outlined"
            style={{ width: "100%" }}
            name="projectdescription1"
            value={formValues.projectdescription1}
            onChange={(e) => {
              setFormValues({
                ...formValues,
                projectdescription1: e.target.value,
              });
            }}
          />
        </Grid>
      </Grid>
          <br/>
      <Grid container spacing={2} alignItems="center" lg={12}>
        <Grid item md={12} sm={12} xs={12} lg={4}>
          <TextField
            margin="dense"
            variant="outlined"
            name="project2"
            label="Project 2"
            style={{ width: "100%" }}
            value={formValues.project2}
            onChange={(e) => {
              setFormValues({ ...formValues, project2: e.target.value });
            }}
          />
        </Grid>
        <Grid item md={12} sm={12} xs={12} lg={4} >
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker
                name="project2fromyear2"
                type="date"
                
                label="From Year"
                sx={{ width: "100%" }}
                value={formValues.project2fromyear2 ? dayjs(formValues.project2fromyear2) : null}
                onChange={(date) => {
                  const formattedDate = date.format("MM-DD-YYYY");
                  setFormValues({
                    ...formValues,
                    project2fromyear2: formattedDate,
                  });
                 
                }}
                disableFuture={true}
              />
            </DemoContainer>
          </LocalizationProvider>
        </Grid>

        <Grid item md={12} sm={12} xs={12} lg={4} sx={{mt:{xs: 0,sm: 0,md: 0,lg: "44px", }}}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker
                name="project2toyear2"
                type="date"
                
                label="To Year"
                sx={{width:"100%"}}
                value={formValues.project2toyear2 === 'present' ? null : formValues.project2toyear2 ? dayjs(formValues.project2toyear2) : null}
                onChange={(date) => {
                  const formattedDate = date.format("MM-DD-YYYY");
                  setFormValues({
                    ...formValues,
                    project2toyear2: formattedDate,
                  });
                 
                }}
                disableFuture={true}
                disabled={project2OnGoing}
              />
            </DemoContainer>
          </LocalizationProvider>
          <FormControlLabel
            control={<Checkbox
              name="project2OnGoing"
              color="primary"
              checked={project2OnGoing}
              onChange={handleProject2CheckboxChange}
            />}
            label="On-going"
          />
        </Grid>

        <Grid item md={4} sm={12} xs={12} lg={4}>
          <TextField
            margin="dense"
            label="Designation"
            variant="outlined"
            style={{ width: "100%" }}
            name="project2designation"
            value={formValues.project2designation}
            onChange={(e) => {
              setFormValues({
                ...formValues,
                project2designation: e.target.value,
              });
            }}
          />
        </Grid>

        <Grid item md={8} sm={12} xs={12} lg={8}>
          <TextField
            margin="dense"
            label="Description"
            variant="outlined"
            style={{ width: "100%" }}
            name="projectdescription2"
            value={formValues.projectdescription2}
            onChange={(e) => {
              setFormValues({
                ...formValues,
                projectdescription2: e.target.value,
              });
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default FormProjectsDetails;
