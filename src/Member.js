import React from 'react';
import member1 from './images/dhananjay.jpg';
import member2 from './images/ritesh.jpg';
import member3 from './images/hargun.jpg';
import member4 from './images/naman.jpg';
import member5 from './images/sanskar.jpg';
import member6 from './images/aditya.jpg';
import member7 from './images/anmol.jpg';
import member8 from './images/lakshit.jpg';

function Member() {
  return (
    <div className="Member">
      <center>   
      <div style={{borderBottom: '2px solid black', width: '300px', marginTop: '5px', marginBottom: '15px'}}> 
      <h2 style={{fontWeight: '200'}}>Core Members</h2>
      </div>
      </center>
      <div style={{width: '100%'}}>
       <center>
        <img src={member1} width="200px" height="200px" style={{borderRadius: '50%'}}/>
        <p>Dhananjay Sachdeva</p>
       </center>
      </div>
      <div style={{width: '100%', background: '#D3D3D3'}}>
       <center>
        <img src={member2} width="200px" height="200px" style={{borderRadius: '50%'}}/>
        <p>Ritesh Dutta</p>
       </center>
      </div>
      <div style={{width: '100%'}}>
       <center>
        <img src={member3} width="200px" height="200px" style={{borderRadius: '50%'}}/>
        <p>Hargun Singh Sahni</p>
       </center>
      </div>
      <div style={{width: '100%', background: '#D3D3D3'}}>
       <center>
        <img src={member4} width="200px" height="200px" style={{borderRadius: '50%'}}/>
        <p>Naman Jain</p>
       </center>
      </div>
      <div style={{width: '100%'}}>
       <center>
        <img src={member5} width="200px" height="200px" style={{borderRadius: '50%'}}/>
        <p>Sanskar Jain</p>
       </center>
      </div>
      <div style={{width: '100%', background: '#D3D3D3'}}>
       <center>
        <img src={member6} width="200px" height="200px" style={{borderRadius: '50%'}}/>
        <p>Aditya Malhotra</p>
       </center>
      </div>
      <div style={{width: '100%'}}>
       <center>
        <img src={member7} width="200px" height="200px" style={{borderRadius: '50%'}}/>
        <p>Anmol Sharma</p>
       </center>
      </div>
      <div style={{width: '100%', background: '#D3D3D3'}}>
       <center>
        <img src={member8} width="200px" height="200px" style={{borderRadius: '50%'}}/>
        <p>Lakshit Sharma</p>
       </center>
      </div>
    </div>
  );
}

export default Member;