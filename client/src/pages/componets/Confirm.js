import {
  Button,
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
    const allProjectEmpty=
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
    const allEducationEmpty=
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
          border: "1px solid #f5f0f0",
          borderRadius: "10px",
          width: "100%",
        }}
      >
        <div className="row text-center">
          <div
            className=" flex"
            style={{ display: "flex", flexDirection: "column", width: "100%" }}
          >
            <div>
              <h1>
                <b>
                  {formValues.firstName} {formValues.lastName}
                </b>
              </h1>
            </div>
            <div
              style={{
                display: "flex",
                //     border: "1px solid red",
                justifyContent: "flex-start",
              }}
            >
              <div
                style={{
                  // border: "1px solid blue",
                  width: "50%",
                  textAlign: "flex-start",
                }}
              >
                <p className="lead email">
                  <strong>Email:</strong> {formValues.email}
                </p>
              </div>
              <div>
                <p className="lead">
                  <strong>Contact:</strong> (+92) {formValues.number}
                </p>
              </div>
            
              <br />
            </div>
            <div style={{textAlign:"start",paddingLeft:"2.5rem"}}>
                <p className="lead">
                  <strong>Address:</strong> (+92){formValues.address}
                </p>
              </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                // paddingLeft: "rem",
                width: "100%",
              }}
            >
              {formValues.website && (
                <p className="lead mx-5">
                  <strong>Website:</strong> {formValues.website}
                </p>
              )}
              {formValues.linkedin && (
                <p className="lead mx-5">
                  <strong>LinkedIn:</strong> {formValues.linkedin}
                </p>
              )}
              {formValues.github && (
                <p className="lead">
                  <strong>Github:</strong> {formValues.github}
                </p>
              )}
            </div>
          </div>
        </div>

        <hr />
        {!allSkillsEmpty && (
          <div className="col-lg-12  bg-light">
            <h3>
              <b>Skills</b>
            </h3>
          </div>
        )}
        {formValues.skill1 && (
          <div className="col-lg-12 row ">
            <p className="lead mx-3">
              <b>{formValues.skill1}</b>
            </p>
          </div>
        )}
        {formValues.skilldescription1 && (
          <div className="col-lg-12 row ">
            <p className="mx-3">
              <b>{formValues.skilldescription1}</b>
            </p>
          </div>
        )}
        {formValues.skill2 && (
          <div className="col-lg-12 row ">
            <p className="lead mx-3">
              <b>{formValues.skill2}</b>
            </p>
          </div>
        )}
        {formValues.skilldescription2 && (
          <div className="col-lg-12 row ">
            <p className="mx-3">
              <b>{formValues.skilldescription2}</b>
            </p>
          </div>
        )}
        {formValues.skill3 && (
          <div className="col-lg-12 row ">
            <p className="lead mx-3">
              <b>{formValues.skill3}</b>
            </p>
          </div>
        )}
        {formValues.skilldescription3 && (
          <div className="col-lg-12 row ">
            <p className="mx-3">
              <b>{formValues.skilldescription3}</b>
            </p>
          </div>
        )}
        {formValues.skill4 && (
          <div className="col-lg-12 row ">
            <p className="lead mx-3">
              <b>{formValues.skill4}</b>
            </p>
          </div>
        )}
        {formValues.skilldescription4 && (
          <div className="col-lg-12 row ">
            <p className="mx-3">
              <b>{formValues.skilldescription4}</b>
            </p>
          </div>
        )}

        {!allExperienceEmpty && (
          <div className="col-lg-12 mx-auto bg-light">
            <h3>
              <b>Experience</b>
            </h3>
          </div>
        )}
        {formValues.company1 && (
           <div className="col-lg-12 mx-auto">
           <p className="lead">
             <b>
               {formValues.company1}
             </b>  {" "}
             {formValues.company1designation}{" "}
             {formValues.company1fromyear1} - {formValues.company1toyear1}
           </p>{" "}
           {formValues.companydescription1
           &&( <p className="mt-0">{formValues.companydescription1}</p>)}
         </div>
        )} 
       {formValues.company2 && ( <div className="col-lg-12 mx-auto">
          <p className="lead">
            <b>
              {formValues.company2} 
            </b>{" "}
            {formValues.company2designation}{" "}
             {formValues.company2fromyear2} - {formValues.company2toyear2} 
          </p>
          <p className="mt-0">{formValues.companydescription2}</p>
        </div>
)}
       {!allProjectEmpty && (
        <div className="col-lg-12 mx-auto bg-light">
          <h3>
            <b>Projects</b>
          </h3>
        </div>)}
        {formValues.project1 && (
        <div className="col-lg-12 mx-auto">
          <p className="lead">
            <b>{formValues.project1}</b> {" "}{formValues.project1fromyear1} - {formValues.project1toyear1}
          </p>
          <p className="mt-0">{formValues.project1designation}</p>
          <p className="mt-0">{formValues.projectdescription1}</p>
        </div>
        )}
        {formValues.project2 && (
        <div className="col-lg-12 mx-auto">
          <p className="lead">
            <b>{formValues.project2} </b>{formValues.project2fromyear2} -
             {formValues.project2toyear2}
          </p>
          <p className="mt-0">{formValues.project2designation}</p>
          <p className="mt-0">{formValues.projectdescription2}</p>
        </div>
          )}
          {!allEducationEmpty && (
        <div className="col-lg-12 mx-auto bg-light">
          <h3>
            <b>Education</b>
          </h3>
        </div>)}
        {formValues.college && (
        <div className="col-lg-12 mx-auto">
          <p className="lead">
            <b>{formValues.college}</b> {formValues.collegequalification1} {" "}
            {formValues.collegefromyear1} - {formValues.collegetoyear1}
          </p>
          <p className="mt-0">{formValues.collegedescription1}</p>
        </div>
        )
        }
        {formValues.school && (
        <div className="col-lg-12 mx-auto">
          <p className="lead">
            <b>{formValues.school}</b> {formValues.schoolqualification2} {" "}
            {formValues.schoolfromyear2} - {formValues.schooltoyear2}
          </p>
          <p className="mt-0">{formValues.schooldescription2}</p>
        </div>
        )}
        {/* <div className="col-lg-12 mx-auto bg-light">
              <h3><b>Extra-Curriculars/Activities</b></h3>
        </div>
        <div className="col-lg-12 mx-3">
              <ul>
                <li><p className="lead"><b>Languages: </b>extra_1 </p></li>
                <li><p className="lead"><b>Hobbies: </b>extra_2 </p></li>
              </ul>
              
        </div> */}
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
