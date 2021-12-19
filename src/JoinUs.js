import React from 'react';

function JoinUs() {
  return (
    <div className="JoinUs">
      <center>   
      <div style={{borderBottom: '2px solid black', width: '300px', marginTop: '5px', marginBottom: '15px'}}> 
      <h2 style={{fontWeight: '200'}}>Join Us</h2>
      </div>
      </center>
      <div className="container">
      <form action="https://formspree.io/f/xlezevbv" method="POST">
       <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input type="text" className="form-control" id="name" placeholder="Enter your name" name="name"/>
       </div>
       <div className="mb-3">
       <label htmlFor="college" className="form-label">College</label>
       <select className="form-control form-control-sm" id="college" name="college">
        <option>Choose your college</option>
        <option>MSI</option>
        <option>MSIT</option>
       </select>
       </div>
       <div className="mb-3">
       <label htmlFor="department" className="form-label">Department</label>
       <select className="form-control form-control-sm" id="department" name="department">
        <option>Choose Department</option>
        <option>Quizzing</option>
        <option>Technical</option>
        <option>Social Media</option>
        <option>Question/Content Writing</option>
        <option>Sponsorship</option>
       </select>
       </div>
       <div className="mb-3">
        <label htmlFor="phone" className="form-label">Contact</label>
        <input type="text" className="form-control" id="phone" placeholder="Enter your phone number" name="phone"/>
       </div>
       <div className="mb-3">
        <label htmlFor="hiring" className="form-label">Why should we hire you for the department that you chose?</label>
        <textarea className="form-control" id="hiring" rows="5" name="hiring"></textarea>
       </div>
       <center>
       <button type="submit" className="btn btn-primary">Submit</button>
       </center>
      </form>
      <br />
     </div>
    </div>
  );
}

const sendEmail=(e)=>{
    e.preventDefault();
	var name=document.getElementById('name').value;
	var college=document.getElementById('college').value;
	var department=document.getElementById('department').value;
	var hiring=document.getElementById('hiring').value;
	document.getElementById('name').value="";
	document.getElementById('college').value="";
	document.getElementById('department').value="";
	document.getElementById('hiring').value="";
	window.open(`mailto:thequizsociety@gmail.com?subject=Hiring&body=Name: ${name}%0d%0aCollege: ${college}%0d%0aDepartment: ${department}%0d%0aWhy should we hire you?%0d%0aAnswer: ${hiring}`);
}

export default JoinUs;