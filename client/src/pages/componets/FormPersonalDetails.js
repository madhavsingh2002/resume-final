import {
  Checkbox,
  FormControlLabel,
  Grid,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";
const FormPersonalDetails = ({ formValues, setFormValues }) => {
  const [collegeFromYearOnGoing, setCollegeFromYearOnGoing] = useState(false);
  const [schoolFromYearOnGoing, setSchoolFromYearOnGoing] = useState(false);

  const handleCollegeCheckboxChange = (e) => {
    const checked = e.target.checked;
    setCollegeFromYearOnGoing(checked);

    if (checked) {
      setFormValues({
        ...formValues,
        collegetoyear1: 'present',
      });
    }
  };

  const handleSchoolCheckboxChange = (e) => {
    const checked = e.target.checked;
    setSchoolFromYearOnGoing(checked);

    if (checked) {
      setFormValues({
        ...formValues,
        schooltoyear2: 'present',
      });
    }
  };
  console.log(formValues.collegefromyear1);
  return (
    <div>
      <Typography variant="h6" style={{ textAlign: "center" }}>
        Education Information
      </Typography>
      <Grid container spacing={2} alignItems="center" lg={12}>
        <Grid item md={4} sm={12} xs={12} lg={4}>
          <TextField
            margin="dense"
            variant="outlined"
            name="college"
            label="College/University"
            style={{ width: "80%" }}
            value={formValues.college}
            onChange={(e) => {
              setFormValues({ ...formValues, college: e.target.value });
            }}
          />
        </Grid>
        <Grid item md={4} sm={6} xs={12} lg={4}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
           
              <DatePicker
                name="collegefromyear1"
                label="From Year"
                
                // view=""
                value={formValues.collegefromyear1}
                onChange={(date) => {
                  const formattedDate = `${date.format('MMM')} ${date.date()} ${date.year()}`
                  setFormValues({
                    ...formValues,
                    collegefromyear1: formattedDate,
                  });
                  console.log(date);
                }}
                disableFuture={true}
              />
            
            </DemoContainer>
          </LocalizationProvider>
         
        </Grid>

        <Grid item md={4} sm={6} xs={12} lg={4} sx={{ mt: "44px" }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker
                name="collegetoyear1"
                type="date"
                label="To Year"
                value={formValues.collegetoyear1}
                onChange={(date) => {
                  const formattedDate = `${date.format('MMM')} ${date.date()} ${date.year()}`
                  setFormValues({ ...formValues, collegetoyear1: formattedDate });
                }}
                // maxDate={new Date()} 
                disabled={collegeFromYearOnGoing}
                disableFuture={true}
              />
            </DemoContainer>
          </LocalizationProvider>
          <FormControlLabel
            control={
              <Checkbox
                name="collegeFromYearOnGoing"
                color="primary"
                checked={collegeFromYearOnGoing}
                onChange={handleCollegeCheckboxChange}
              />
            }
            label="On-going"
          />
        </Grid>
        

        <Grid item md={4} sm={12} xs={12} lg={4}>
          <TextField
            margin="dense"
            label="Qualification"
            variant="outlined"
            style={{ width: "80%" }}
            name="collegequalification1"
            value={formValues.collegequalification1}
            onChange={(e) => {
              
              setFormValues({
                ...formValues,
                collegequalification1: e.target.value,
              });
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
            value={formValues.collegedescription1}
            onChange={(e) => {
              setFormValues({
                ...formValues,
                collegedescription1: e.target.value,
              });
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
            value={formValues.school}
            onChange={(e) => {
              setFormValues({ ...formValues, school: e.target.value });
            }}
          />
        </Grid>
        <Grid item md={4} sm={6} xs={12} lg={4} >
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker
                name="schoolfromyear2"
                type="date"
                label="From Year"
                value={formValues.schoolfromyear2}
                onChange={(date) => {
                  const formattedDate = `${date.format('MMM')} ${date.date()} ${date.year()}`
                  setFormValues({
                    ...formValues,
                    schoolfromyear2: formattedDate,
                  });
                  console.log(date);
                }}
                disableFuture={true}
              />
            </DemoContainer>
          </LocalizationProvider>
          
        </Grid>

        <Grid item md={4} sm={6} xs={12} lg={4} sx={{mt:"44px"}}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker
                name="schooltoyear2"
                type="date"
                label="To Year"
                value={formValues.schooltoyear2}
                onChange={(date) => {
                  const formattedDate = `${date.format('MMM')} ${date.date()} ${date.year()}`
                  setFormValues({
                    ...formValues,
                    schooltoyear2: formattedDate,
                  });
                  
                }}
                disableFuture={true}
                disabled={schoolFromYearOnGoing}
                  
              />
            </DemoContainer>
          </LocalizationProvider>
          <FormControlLabel
            control={<Checkbox
              name="schoolFromYearOnGoing"
              color="primary"
              checked={schoolFromYearOnGoing}
              onChange={handleSchoolCheckboxChange}
            />}
            label="On-going"
          />
        </Grid>

        <Grid item md={4} sm={12} xs={12} lg={4}>
          <TextField
            margin="dense"
            label="Qualification"
            variant="outlined"
            style={{ width: "80%" }}
            name="schoolqualification2"
            value={formValues.schoolqualification2}
            onChange={(e) => {
              setFormValues({
                ...formValues,
                schoolqualification2: e.target.value,
              });
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
            value={formValues.schooldescription2}
            onChange={(e) => {
              setFormValues({
                ...formValues,
                schooldescription2: e.target.value,
              });
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default FormPersonalDetails;
