const generateResumeHTML = ({
  firstName,
  lastName,
  email,
  address,
  website,
  linkedin,
  number,
  github,
  college,
  collegefromyear1,
  collegetoyear1,
  collegequalification1,
  collegedescription1,
  school,
  schoolfromyear2,
  schooltoyear2,
  schoolqualification2,
  schooldescription2,
  company1,
  company1fromyear1,
  company1toyear1,
  company1designation,
  companydescription1,
  company2,
  company2fromyear2,
  company2toyear2,
  company2designation,
  companydescription2,
  project1,
  project1fromyear1,
  project1toyear1,
  project1designation,
  projectdescription1,
  project2,
  project2fromyear2,
  project2toyear2,
  project2designation,
  projectdescription2,
  skill1,
  skilldescription1,
  skill2,
  skilldescription2,
  skill3,
  skilldescription3,
  skill4,
  skilldescription4,
}) => {
  return `
          <!doctype html>
          <html>
              <head>
                  <!-- Font Awesome -->
                  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css">
                  <!-- Bootstrap core CSS -->
                  <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet">
                  <!-- Material Design Bootstrap -->
                  <link href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.7.5/css/mdb.min.css" rel="stylesheet">
      
                  <style>
                    html{
                        zoom: 0.55;
                    }    
                    .rule{
                      border-bottom: 1px solid black;
                      width:80%;
                    }
                    .mobile{
                      margin-top:-10px;
                    }
                    .email{
                      margin-bottom: 0;    
                    }
                    body{
                      font-family: 'Garamond';
                    }
                  </style>
              
              </head>
              <body>
      
              <div  style={{border:'1px solid #f5f0f0',borderRadius:"10px", width:"100%"}}>
        
        <div className="row text-center">
            <div className=" flex" style={{display:'flex',flexDirection:"column",width:'100%'}}>
                  <div>
                <h1><b>${firstName}  ${lastName}</b></h1>
                </div>
                <div style={{display:'flex',justifyContent:'space-around'}}>
                <p className="lead email"><strong>Email:</strong> ${email}</p>
                <p className="lead"><strong>Contact:</strong> (+92)${number}</p><br />
                
                </div>
                <div style={{display:'flex',justifyContent:'flex-start',gap:'2rem'}}>
                <p className="lead mx-5"><strong>LinkedIn:</strong> ${linkedin}</p>
                <p className="lead"><strong>Github:</strong>  ${github}</p>
                
                </div>
               
            </div>    
        </div>
      
        <hr/>
        <div className="col-lg-12  bg-light">
              <h3><b>Skills</b></h3>
        </div>
        <div className="col-lg-12 row ">
            <p className="lead mx-3"> <b>${skill1}</b></p>
        </div>
        <div className="col-lg-12 row ">
            <p className="mx-3"> <b>${skilldescription1}</b></p>
        </div>
        <div className="col-lg-12 row ">
            <p className="lead mx-3"> <b>${skill2}</b></p>
        </div>
        <div className="col-lg-12 row ">
            <p className="mx-3"> <b>${skilldescription2}</b></p>
        </div>
        <div className="col-lg-12 row ">
            <p className="lead mx-3"> <b>${skill3}</b></p>
        </div>
        <div className="col-lg-12 row ">
            <p className="mx-3"> <b>${skilldescription3}</b></p>
        </div>
        <div className="col-lg-12 row ">
            <p className="lead mx-3"> <b>${skill4}</b></p>
        </div>
        <div className="col-lg-12 row ">
            <p className="mx-3"> <b>${skilldescription4}</b></p>
        </div>
        <div className="col-lg-12 mx-auto bg-light">
              <h3><b>Experience</b></h3>
        </div>
        <div className="col-lg-12 mx-auto">
              <p className="lead"><b>${company1},- ${company1designation}</b> (${company1fromyear1}-${company1toyear1})</p>
              <p className="mt-0">{companydescription1}</p>
        </div>
        <div className="col-lg-12 mx-auto">
              <p className="lead"><b>${company2},${company2designation}</b> (${company2fromyear2}-${company2toyear2})</p>
              <p className="mt-0">${companydescription2}</p>
        </div>

        
        <div className="col-lg-12 mx-auto bg-light">
              <h3><b>Projects</b></h3>
        </div>
        <div className="col-lg-12 mx-auto">
              <p className="lead"><b>${project1}</b>(${project1fromyear1}-${project1toyear1})</p>
              <p className="mt-0">${project1designation}</p>
              <p className="mt-0">${projectdescription1}</p>
        </div>
        <div className="col-lg-12 mx-auto">
              <p className="lead"><b>${project2}</b>(${project2fromyear2}-${project2toyear2})</p>
              <p className="mt-0">${project2designation}</p>
              <p className="mt-0">${projectdescription2}</p>
        </div>


        <div className="col-lg-12 mx-auto">
        <p className="lead"><b>${college}</b> (${collegequalification1}, ${collegefromyear1}-${collegetoyear1})</p>
        <p className="mt-0">${collegedescription1}</p>
  </div>
  <div className="col-lg-12 mx-auto">
        <p className="lead"><b>${school}</b> (${schoolqualification2}, ${schoolfromyear2}-${schooltoyear2})</p>
        <p className="mt-0">${schooldescription2}</p>
  </div>

        
        </div>
                  <!-- JQuery -->
                  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
                  <!-- Bootstrap tooltips -->
                  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.4/umd/popper.min.js"></script>
                  <!-- Bootstrap core JavaScript -->
                  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js"></script>
                  <!-- MDB core JavaScript -->
                  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.7.5/js/mdb.min.js"></script>
              </body>
          </html> 
        `;
};
export default generateResumeHTML;
