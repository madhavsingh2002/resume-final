import { Button, List, ListItem, ListItemText, Typography } from "@mui/material";

import { useRef } from 'react';
import { useReactToPrint } from "react-to-print";
const Confirm = ({ formValues, setFormValues }) => {
      const componentRef = useRef();
//   console.log(formValues.at(0));
      const handlePrint =useReactToPrint({
            content: ()=>componentRef.current,
            documentTitle: 'Resume',
            onAfterPrint: ()=>alert("Print Success")
      })
  return (
<>
      <h2>Preview</h2>
        <div ref={componentRef}  style={{border:'1px solid #f5f0f0',borderRadius:"10px", width:"100%"}}>
        
        <div className="row text-center">
            <div className=" flex" style={{display:'flex',flexDirection:"column",width:'100%'}}>
                  <div>
                <h1><b>{formValues.firstName}  {formValues.lastName}</b></h1>
                </div>
                <div style={{display:'flex',justifyContent:'space-around'}}>
                <p className="lead email"><strong>Email:</strong> {formValues.email}</p>
                <p className="lead"><strong>Contact:</strong> (+92){formValues.number}</p><br />
                
                </div>
                <div style={{display:'flex',justifyContent:'flex-start',gap:'2rem'}}>
                <p className="lead mx-5"><strong>LinkedIn:</strong> {formValues.linkedin}</p>
                <p className="lead"><strong>Github:</strong>  {formValues.github}</p>
                
                </div>
               
            </div>    
        </div>
      
        <hr/>
        <div className="col-lg-12  bg-light">
              <h3><b>Skills</b></h3>
        </div>
        <div className="col-lg-12 row ">
            <p className="lead mx-3"> <b>{formValues.skill1}</b></p>
        </div>
        <div className="col-lg-12 row ">
            <p className="mx-3"> <b>{formValues.skilldescription1}</b></p>
        </div>
        <div className="col-lg-12 row ">
            <p className="lead mx-3"> <b>{formValues.skill2}</b></p>
        </div>
        <div className="col-lg-12 row ">
            <p className="mx-3"> <b>{formValues.skilldescription2}</b></p>
        </div>
        <div className="col-lg-12 row ">
            <p className="lead mx-3"> <b>{formValues.skill3}</b></p>
        </div>
        <div className="col-lg-12 row ">
            <p className="mx-3"> <b>{formValues.skilldescription3}</b></p>
        </div>
        <div className="col-lg-12 row ">
            <p className="lead mx-3"> <b>{formValues.skill4}</b></p>
        </div>
        <div className="col-lg-12 row ">
            <p className="mx-3"> <b>{formValues.skilldescription4}</b></p>
        </div>
        <div className="col-lg-12 mx-auto bg-light">
              <h3><b>Experience</b></h3>
        </div>
        <div className="col-lg-12 mx-auto">
              <p className="lead"><b>{formValues.company1},- {formValues.company1designation}</b> ({formValues.company1fromyear1}-{formValues.company1toyear1})</p>
              <p className="mt-0">{formValues.companydescription1}</p>
        </div>
        <div className="col-lg-12 mx-auto">
              <p className="lead"><b>{formValues.company2},{formValues.company2designation}</b> ({formValues.company2fromyear2}-{formValues.company2toyear2})</p>
              <p className="mt-0">{formValues.companydescription2}</p>
        </div>

        
        <div className="col-lg-12 mx-auto bg-light">
              <h3><b>Projects</b></h3>
        </div>
        <div className="col-lg-12 mx-auto">
              <p className="lead"><b>{formValues.project1}</b>({formValues.project1fromyear1}-{formValues.project1toyear1})</p>
              <p className="mt-0">{formValues.project1designation}</p>
              <p className="mt-0">{formValues.projectdescription1}</p>
        </div>
        <div className="col-lg-12 mx-auto">
              <p className="lead"><b>{formValues.project2}</b>({formValues.project2fromyear2}-{formValues.project2toyear2})</p>
              <p className="mt-0">{formValues.project2designation}</p>
              <p className="mt-0">{formValues.projectdescription2}</p>
        </div>


        <div className="col-lg-12 mx-auto bg-light">
              <h3><b>Education</b></h3>
        </div>
        <div className="col-lg-12 mx-auto">
              <p className="lead"><b>{formValues.college}</b> ({formValues.collegequalification1}, {formValues.collegefromyear1}-{formValues.collegetoyear1})</p>
              <p className="mt-0">{formValues.collegedescription1}</p>
        </div>
        <div className="col-lg-12 mx-auto">
              <p className="lead"><b>{formValues.school}</b> ({formValues.schoolqualification2}, {formValues.schoolfromyear2}-{formValues.schooltoyear2})</p>
              <p className="mt-0">{formValues.schooldescription2}</p>
        </div>

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
        <div style={{textAlign:"end",marginTop:"2rem"}}>
        <Button sx={{m:"auto"}} color="success" variant="contained" onClick={handlePrint}>Download</Button> 
        </div>
     
        </>
           )
  };
export default Confirm;
