import React from "react";
import member3 from "./images/hargun.jpg";
import arnvh from "./images/arnvh.jpg";
import adityabhaskar from "./images/Adityabhaskar.jpg";
import Prabhav from "./images/prabhav.jpg";
import Tanmay from "./images/tanmay.jpg";
import Vibhash from "./images/Vibhashsingh.jpg";
import Brahmjot from "./images/bjosh.jpg";
import Aman from "./images/amansriv.jpg";
import amar from "./images/amardeep.jpg";
import Anjli from "./images/anjli.jpg";
import kanak from "./images/kanakjpg.jpg";
import kanishk from "./images/kanishk.jpg";

function Member() {
  return (
    <div className="Member">
      <center>   
      <div style={{borderBottom: '2px solid black', width: '300px', marginTop: '5px', marginBottom: '15px'}}> 
      <h2 style={{fontWeight: '200'}}>Alumini</h2>
      </div>
      </center>
      <div style={{width: '100%'}}>
       <center>
        <img src={arnvh} width="200px" height="200px" style={{borderRadius: '50%'}}/>
        <p>Arnvh Sharma <br/> President</p>
       </center>
      </div>
      <div style={{width: '100%', background: '#D3D3D3'}}>
      <br/>
       <center>
        <img src={adityabhaskar} width="200px" height="200px" style={{borderRadius: '50%'}}/>
        <p>Aditya Bhaskar <br/> Vice President</p>
       </center>
      </div>
      <div style={{width: '100%'}}>
       <center>
        <img src={kanak} width="200px" height="200px" style={{borderRadius: '50%'}}/>
        <p>Kanak <br/>  General Secretary</p>
       </center>
      </div>
      <div style={{width: '100%', background: '#D3D3D3'}}>
      <br/>
       <center>
        <img src={Brahmjot} width="200px" height="200px" style={{borderRadius: '50%'}}/>
        <p>Brahmjot Singh <br/> Content Head</p>
       </center>
      </div>
      <div style={{width: '100%'}}>
       <center>
        <img src={Aman} width="200px" height="200px" style={{borderRadius: '50%'}}/>
        <p>Aman Kumar <br/> Content Head</p>
       </center>
      </div>
      <div style={{width: '100%', background: '#D3D3D3'}}>
      <br/>
       <center>
        <img src={amar} width="200px" height="200px" style={{borderRadius: '50%'}}/>
        <p>Amardeep <br/>  Design Head</p>
       </center>
      </div>
      <div style={{width: '100%'}}>
       <center>
        <img src={Anjli} width="200px" height="200px" style={{borderRadius: '50%'}}/>
        <p>Anjli <br/> Design Head</p>
       </center>
      </div>
      <div style={{width: '100%', background: '#D3D3D3'}}>
      <br/>
       <center>
        <img src={Vibhash} width="200px" height="200px" style={{borderRadius: '50%'}}/>
        <p>Vibhash <br/> Event Head</p>
       </center>
      </div>
      <div style={{width: '100%'}}>
       <center>
        <img src={Prabhav} width="200px" height="200px" style={{borderRadius: '50%'}}/>
        <p>Prabhav <br/> Event Head</p>
       </center>
      </div>
      <div style={{width: '100%', background: '#D3D3D3'}}>
      <br/>
       <center>
        <img src={kanishk} width="200px" height="200px" style={{borderRadius: '50%'}}/>
        <p> Kanishk <br/>  Public Relations & Sponsorship Head</p>
       </center>
      </div>
      <div style={{width: '100%'}}>
       <center>
        <img src={Tanmay} width="200px" height="200px" style={{borderRadius: '50%'}}/>
        <p>Tanmay Khandelwal <br/> Public Relations & Sponsorship Head</p>
       </center>
      </div>
    </div>
  );
}

export default Member;
