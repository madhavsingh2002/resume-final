import { Button, Grid } from "@mui/material";

// Buttons Components for more organized code.
const StepButtons = ({ nextStep, prevStep, submitHandle, currentStep }) => {
  const gridStyle = {
    width: currentStep === 1 && "100%"
  };

  return (
    <Grid container spacing={2} justifyContent="space-between" style={{ width:'40%',margin:'auto'}}>
      {currentStep > 1 && currentStep < 7 && (
        <Grid item >
          <Button style={{background:"black"}} variant="contained" onClick={prevStep}>
            Prev
          </Button>
        </Grid>
      )}
      {currentStep < 6 && (
        <Grid item style={gridStyle}>
          <Button
            
            color="primary"
            style={{background:"black"}}
            variant="contained"
            onClick={nextStep}
          >
            Next
          </Button>
        </Grid>
      )}

      
    </Grid>
  );
};

export default StepButtons;
