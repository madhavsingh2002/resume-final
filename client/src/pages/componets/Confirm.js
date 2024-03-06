import {
  Box,
  Button,
  Card,
  CardMedia,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

import { useRef } from "react";
// import { useReactToPrint } from react-to-print";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
const Confirm = ({ formValues, setFormValues }) => {
  const reportTemplateRef = useRef();
  //   console.log(formValues.at(0));
  const handleGeneratePdf = async () => {
    const input = reportTemplateRef.current;
    try {
      const canvas = await html2canvas(input);
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        units: "px",
        format: "a4",
      });
      const width = pdf.internal.pageSize.getWidth();
      const height = (canvas.height * width) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, width, height);
      pdf.save("Resume.pdf");
    } catch (e) {
      console.error("Error Generating PDf:", e);
    }
  };
  const allSkillsEmpty =
    !formValues.skill1 &&
    !formValues.skilldescription1 &&
    !formValues.skill2 &&
    !formValues.skilldescription2 &&
    !formValues.skill3 &&
    !formValues.skilldescription3 &&
    !formValues.skill4 &&
    !formValues.skilldescription4;
  const allExperienceEmpty =
    !formValues.company1 &&
    !formValues.company1designation &&
    !formValues.company1fromyear1 &&
    !formValues.company1toyear1 &&
    !formValues.companydescription1 &&
    !formValues.company2 &&
    !formValues.company2designation &&
    !formValues.company2fromyear2 &&
    !formValues.company2toyear2 &&
    !formValues.companydescription2;
  const allProjectEmpty =
    !formValues.project1 &&
    !formValues.project1fromyear1 &&
    !formValues.project1toyear1 &&
    !formValues.project1designation &&
    !formValues.projectdescription1 &&
    !formValues.project2 &&
    !formValues.project2fromyear2 &&
    !formValues.project2toyear2 &&
    !formValues.project2designation &&
    !formValues.projectdescription2;
  const allEducationEmpty =
    !formValues.college &&
    !formValues.collegefromyear1 &&
    !formValues.collegetoyear1 &&
    !formValues.collegequalification1 &&
    !formValues.collegedescription1 &&
    !formValues.school &&
    !formValues.schoolfromyear2 &&
    !formValues.schooltoyear2 &&
    !formValues.schoolqualification2 &&
    !formValues.schooldescription2;
  return (
    <>
      <h2>Preview</h2>
      <div
        ref={reportTemplateRef}
        style={{
          border: "1px solid #c5c5c5",
          borderRadius: "10px",
          width: "100%",
        }}
      >
        
        <Grid container spacing={2} lg={12} display="flex" >
        {formValues.image && (
              <Grid item xs={12} sm={12} md={4} lg={4} sx={{ mt: "1",display:"flex",justifyContent:"flex-end",alignItems:"center",}}>
                <Box sx={{ width: 200, height: 200,marginTop:"14px" }}>
                  <Card>
                    <CardMedia
                      component="img"
                      sx={{border:"none",boxShadow:"none"}}
                      image={formValues.image}
                      alt="Uploaded Image"
                    />
                  </Card>
                </Box>
              </Grid>
            )}
          {formValues.firstName && (
            <Grid item xs={12} sm={12} md={8} lg={8} sx={{ mt: "1",display:"flex",alignItems:"center", justifyContent:"center"}}>
              <Typography variant="h4">
              {formValues.firstName} {formValues.lastName}
              </Typography>
            </Grid>
          )}
          
        </Grid>
        <hr />
        <Grid container spacing={2} lg={12} display="flex" paddingLeft={"5px"}>
          {formValues.email && (
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <Typography variant="body1">
                <strong>Email:</strong> {formValues.email}
              </Typography>
            </Grid>
          )}
          {formValues.number && (
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <Typography variant="body1">
                <strong>Number:</strong> {formValues.number}
              </Typography>
            </Grid>
          )}
          {formValues.address && (
            <Grid item xs={12} sm={6} md={12} lg={4}>
              <Typography variant="body1">
                <strong>Address:</strong> {formValues.address}
              </Typography>
            </Grid>
          )}
        </Grid>
        <br />
        <Grid container spacing={2} lg={12} display="flex" paddingLeft={"5px"}>
          {formValues.website && (
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <Typography variant="body1">
                <strong>Website:</strong> {formValues.website}
              </Typography>
            </Grid>
          )}
          {formValues.linkedin && (
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <Typography variant="body1">
                <strong>LinkedIn:</strong> {formValues.linkedin}
              </Typography>
            </Grid>
          )}
          {formValues.github && (
            <Grid item xs={12} sm={6} md={12} lg={4}>
              <Typography variant="body1">
                <strong>Github:</strong> {formValues.github}
              </Typography>
            </Grid>
          )}
        </Grid>

        <hr />

        {!allSkillsEmpty && (
          <Grid
            item
            lg={12}
            sx={{ bgcolor: "text.primary", paddingLeft: "5px" }}
          >
            <Typography variant="h5" sx={{ color: "white" }}>
              Skills
            </Typography>
          </Grid>
        )}
        {formValues.skill1 && (
          <Grid item lg={12} sx={{ paddingLeft: "5px" }}>
            <Typography variant="h6">
              <strong>{formValues.skill1}</strong>
            </Typography>
          </Grid>
        )}

        {formValues.skilldescription1 && (
          <Grid item lg={12} sx={{ paddingLeft: "5px" }}>
            <Typography variant="body1">
              {formValues.skilldescription1}
            </Typography>
           
          </Grid>
          
        )}
        {formValues.skill2 && (
          <Grid item lg={12} sx={{ paddingLeft: "5px" }}>
            <Typography variant="h6">
              <strong>{formValues.skill2}</strong>
            </Typography>
          </Grid>
        )}

        {formValues.skilldescription2 && (
          <Grid item lg={12} sx={{ paddingLeft: "5px" }}>
            <Typography variant="body1">
              {formValues.skilldescription2}
            </Typography>
          
          </Grid>
          
        )}
        {formValues.skill3 && (
          <Grid item lg={12} sx={{ paddingLeft: "5px" }}>
            <Typography variant="h6">
              <strong>{formValues.skill3}</strong>
            </Typography>
          </Grid>
        )}

        {formValues.skilldescription3 && (
          <Grid item lg={12} sx={{ paddingLeft: "5px" }}>
            <Typography variant="body1">
              {formValues.skilldescription3}
            </Typography>
          </Grid>
          
        )}
        {formValues.skill4 && (
          <Grid item lg={12} sx={{ paddingLeft: "5px" }}>
            <Typography variant="h6">
              <strong>{formValues.skill4}</strong>
            </Typography>
          </Grid>
        )}

        {formValues.skilldescription4 && (
          <Grid item lg={12} sx={{ paddingLeft: "5px" }}>
            <Typography variant="body1">
              {formValues.skilldescription4}
            </Typography>
            
          </Grid>
          
        )}
       
       {!allExperienceEmpty && (
          <Grid
            item
            lg={12}
            sx={{ bgcolor: "text.primary", paddingLeft: "5px" }}
          >
            <Typography variant="h5" sx={{ color: "white" }}>
            Experience
            </Typography>
          </Grid>
        )}
        
        
        {formValues.company1 && (<>
          <Grid container  lg={12} sx={{ paddingInline: "5px",justifyContent:"space-between",  }}>
            <Typography variant="h6" lg={6}>
              <strong>{formValues.company1}</strong>
            </Typography>
            <Typography variant="body1" lg={6}>
            {formValues.company1fromyear1} - {formValues.company1toyear1}
            </Typography>
            
          </Grid>
          <Typography variant="body1" lg={12} sx={{ paddingInline: "5px"}}>
          <strong> {formValues.company1designation}</strong>
          </Typography>
          <Typography variant="body1" lg={12} sx={{ paddingInline: "5px"}}>
          {formValues.companydescription1}
          </Typography>
          </>
        )}
    
        {formValues.company2 && (<>
          <Grid container  lg={12} sx={{ paddingInline: "5px",justifyContent:"space-between",  }}>
            <Typography variant="h6" lg={6}>
              <strong>{formValues.company2}</strong>
            </Typography>
            <Typography variant="body1" lg={6}>
            {formValues.company2fromyear2} - {formValues.company2toyear2}
            </Typography>
            
          </Grid>
          <Typography variant="body1" lg={12} sx={{ paddingInline: "5px"}}>
          <strong> {formValues.company2designation}</strong>
          </Typography>
          <Typography variant="body1" lg={12} sx={{ paddingInline: "5px"}}>
          {formValues.companydescription2}
          </Typography>
          </>
        )}
       
          {!allProjectEmpty && (
          <Grid
            item
            lg={12}
            sx={{ bgcolor: "text.primary", paddingLeft: "5px" }}
          >
            <Typography variant="h5" sx={{ color: "white" }}>
            Projects
            </Typography>
          </Grid>
        )}
        {formValues.project1 && (<>
          <Grid container  lg={12} sx={{ paddingInline: "5px",justifyContent:"space-between",  }}>
            <Typography variant="h6" lg={6}>
              <strong>{formValues.project1}</strong>
            </Typography>
            <Typography variant="body1" lg={6}>
            {formValues.project1fromyear1} - {formValues.project1toyear1}
            </Typography>
            
          </Grid>
          <Typography variant="body1" lg={12} sx={{ paddingInline: "5px"}}>
          <strong> {formValues.project1designation}</strong>
          </Typography>
          <Typography variant="body1" lg={12} sx={{ paddingInline: "5px"}}>
          {formValues.projectdescription1}
          </Typography>
          </>
        )}
         {formValues.project2 && (<>
          <Grid container  lg={12} sx={{ paddingInline: "5px",justifyContent:"space-between",  }}>
            <Typography variant="h6" lg={6}>
              <strong>{formValues.project2}</strong>
            </Typography>
            <Typography variant="body1" lg={6}>
            {formValues.project2fromyear2} - {formValues.project2toyear2}
            </Typography>
            
          </Grid>
          <Typography variant="body1" lg={12} sx={{ paddingInline: "5px"}}>
          <strong> {formValues.project2designation}</strong>
          </Typography>
          <Typography variant="body1" lg={12} sx={{ paddingInline: "5px"}}>
          {formValues.projectdescription2}
          </Typography>
          </>
        )}
         {!allEducationEmpty && (
          <Grid
            item
            lg={12}
            sx={{ bgcolor: "text.primary", paddingLeft: "5px" }}
          >
            <Typography variant="h5" sx={{ color: "white" }}>
            Education
            </Typography>
          </Grid>
        )}
        
        
         {formValues.college && (<>
          <Grid container  lg={12} sx={{ paddingInline: "5px",justifyContent:"space-between",  }}>
            <Typography variant="h6" lg={6}>
              <strong>{formValues.college}</strong>
            </Typography>
            <Typography variant="body1" lg={6}>
            {formValues.collegefromyear1} - {formValues.collegetoyear1}
            </Typography>
            
          </Grid>
          <Typography variant="body1" lg={12} sx={{ paddingInline: "5px"}}>
          <strong> {formValues.collegequalification1}</strong>
          </Typography>
          <Typography variant="body1" lg={12} sx={{ paddingInline: "5px"}}>
          {formValues.collegedescription1}
          </Typography>
          </>
        )}
        {formValues.school && (<>
          <Grid container  lg={12} sx={{ paddingInline: "5px",justifyContent:"space-between",  }}>
            <Typography variant="h6" lg={6}>
              <strong>{formValues.school}</strong>
            </Typography>
            <Typography variant="body1" lg={6}>
            {formValues.schoolfromyear2} - {formValues.schooltoyear2}
            </Typography>
            
          </Grid>
          <Typography variant="body1" lg={12} sx={{ paddingInline: "5px"}}>
          <strong> {formValues.schoolqualification2}</strong>
          </Typography>
          <Typography variant="body1" lg={12} sx={{ paddingInline: "5px"}}>
          {formValues.schooldescription2}
          </Typography>
          </>
        )}
       
      </div>
      <div style={{ textAlign: "end", marginTop: "1rem" }}>
        <Button
          sx={{ m: "auto" }}
          color="success"
          variant="contained"
          onClick={handleGeneratePdf}
        >
          Download
        </Button>
      </div>
    </>
  );
};
export default Confirm;
