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
const FormExperienceDetails = ({ formValues, setFormValues }) => {
  const [company1YearOnGoing, setCompany1YearOnGoing] = useState(false);
  const [company2YearOnGoing, setCompany2YearOnGoing] = useState(false);
  const handleCompany1CheckboxChange = (e) => {
    const checked = e.target.checked;
    setCompany1YearOnGoing(checked);

    if (checked) {
      setFormValues({
        ...formValues,
        company1toyear1: "present",
      });
    }
  };

  const handleCompany2CheckboxChange = (e) => {
    const checked = e.target.checked;
    setCompany2YearOnGoing(checked);

    if (checked) {
      setFormValues({
        ...formValues,
        company2toyear2: "present",
      });
    }
  };
  return (
    <div>
      <Typography variant="h6" style={{ textAlign: "center" }}>
        Experience Details
      </Typography>
      <Grid container spacing={2} alignItems="center" lg={12}>
        <Grid item md={4} sm={12} xs={12} lg={4}>
          <TextField
            margin="dense"
            variant="outlined"
            name="company1"
            label="Company 1"
            style={{ width: "80%" }}
            value={formValues.company1}
            onChange={(e) => {
              setFormValues({ ...formValues, company1: e.target.value });
            }}
          />
        </Grid>
        <Grid item md={4} sm={6} xs={12} lg={4}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker
                name="company1fromyear1"
                type="date"
                label="From Year"
                
                 value={formValues.company1fromyear1 ? dayjs(formValues.company1fromyear1) : null}
                onChange={(date) => {
                 
                  const formattedDate = date.format("MM-DD-YYYY");
                  setFormValues({
                    ...formValues,
                    company1fromyear1: formattedDate,
                  });
                  console.log(formattedDate);
                }}
                disableFuture={true}
                renderInput={(params) => (
                  <TextField {...params} autoFocus={false} />
                )}
              />
            </DemoContainer>
          </LocalizationProvider>
        </Grid>

        <Grid item md={4} sm={6} xs={12} lg={4} sx={{ mt: "44px" }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker
                name="company1toyear1"
                type="date"
                autoFocus={true}
                label="To Year"
                
                value={formValues.company1toyear1 === 'present' ? null : formValues.company1toyear1 ? dayjs(formValues.company1toyear1) : null}
                onChange={(date) => {
                  const formattedDate = date.format("MM-DD-YYYY");
                  setFormValues({
                    ...formValues,
                    company1toyear1: formattedDate,
                  });
                  console.log(date);
                }}
                disabled={company1YearOnGoing}
                disableFuture={true}
              />
            </DemoContainer>
          </LocalizationProvider>
          <FormControlLabel
            control={
              <Checkbox
                name="company1YearOnGoing"
                color="primary"
                checked={company1YearOnGoing}
                onChange={handleCompany1CheckboxChange}
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
            style={{ width: "80%" }}
            name="company1designation"
            value={formValues.company1designation}
            onChange={(e) => {
              setFormValues({
                ...formValues,
                company1designation: e.target.value,
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
            name="companydescription1"
            value={formValues.companydescription1}
            onChange={(e) => {
              setFormValues({
                ...formValues,
                companydescription1: e.target.value,
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
            name="Company2"
            label="Company 2"
            style={{ width: "80%" }}
            value={formValues.company2}
            onChange={(e) => {
              setFormValues({ ...formValues, company2: e.target.value });
            }}
          />
        </Grid>
        <Grid item md={4} sm={6} xs={12} lg={4}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker
                name="company2fromyear2"
                type="date"
                autoFocus={false}
                label="From Year"
                
                value={formValues.company2fromyear2 ? dayjs(formValues.company2fromyear2) : null}
                onChange={(date) => {
                  const formattedDate = date.format("MM-DD-YYYY");
                  setFormValues({
                    ...formValues,
                    company2fromyear2: formattedDate,
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
                name="company2toyear2"
                type="date"
                autoFocus={false}
                label="To Year"
                
                value={formValues.company2toyear2 === 'present' ? null : formValues.company2toyear2 ? dayjs(formValues.company2toyear2) : null}
                onChange={(date) => {
                  const formattedDate = date.format("MM-DD-YYYY");
                  setFormValues({
                    ...formValues,
                    company2toyear2: formattedDate,
                  });
                  console.log(date);
                }}
                disabled={company2YearOnGoing}
                disableFuture={true}
              />
            </DemoContainer>
          </LocalizationProvider>
          <FormControlLabel
            control={
              <Checkbox
                name="company2YearOnGoing"
                color="primary"
                checked={company2YearOnGoing}
                onChange={handleCompany2CheckboxChange}
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
            style={{ width: "80%" }}
            name="companyqualification2"
            value={formValues.company2designation}
            onChange={(e) => {
              setFormValues({
                ...formValues,
                company2designation: e.target.value,
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
            name="companydescription2"
            value={formValues.companydescription2}
            onChange={(e) => {
              setFormValues({
                ...formValues,
                companydescription2: e.target.value,
              });
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default FormExperienceDetails;
