import React from 'react';
import alumini1 from './images/kartik.jpg';
import alumini2 from './images/chaitanya.jpg';
import alumini3 from './images/raspreet.jpg';
import alumini4 from './images/sambhav.jpg';
import alumini5 from './images/yamya.jpg';
import alumini6 from './images/vaishakh.jpg';
import alumini7 from './images/anmol.jpg';
import alumini8 from './images/naman.jpg';
import alumini9 from './images/dhananjay.jpg';
import alumini10 from './images/ritesh.jpg';

function Alumini() {
  return (
    <div className="Alumini">
      <center>   
      <div style={{borderBottom: '2px solid black', width: '300px', marginTop: '5px', marginBottom: '15px'}}> 
      <h2 style={{fontWeight: '200'}}>Alumini</h2>
      </div>
      </center>
      <div style={{width: '100%'}}>
       <center>
        <img src={alumini9} width="200px" height="200px" style={{borderRadius: '50%'}}/>
        <p>Dhananjay Sachdeva</p>
       </center>
      </div>
      <div style={{width: '100%', background: '#D3D3D3'}}>
      <br/>
       <center>
        <img src={alumini10} width="200px" height="200px" style={{borderRadius: '50%'}}/>
        <p>Ritesh Dutta</p>
       </center>
      </div>
      <div style={{width: '100%'}}>
       <center>
        <img src={alumini8} width="200px" height="200px" style={{borderRadius: '50%'}}/>
        <p>Naman Jain</p>
       </center>
      </div>
      <div style={{width: '100%', background: '#D3D3D3'}}>
      <br/>
       <center>
        <img src={alumini7} width="200px" height="200px" style={{borderRadius: '50%'}}/>
        <p>Anmol Sharma</p>
       </center>
      </div>
      <div style={{width: '100%'}}>
       <center>
        <img src={alumini1} width="200px" height="200px" style={{borderRadius: '50%'}}/>
        <p>Kartik Madan</p>
       </center>
      </div>
      <div style={{width: '100%', background: '#D3D3D3'}}>
      <br/>
       <center>
        <img src={alumini2} width="200px" height="200px" style={{borderRadius: '50%'}}/>
        <p>Chaitanya</p>
       </center>
      </div>
      <div style={{width: '100%'}}>
       <center>
        <img src={alumini3} width="200px" height="200px" style={{borderRadius: '50%'}}/>
        <p>Raspreet</p>
       </center>
      </div>
      <div style={{width: '100%', background: '#D3D3D3'}}>
      <br/>
       <center>
        <img src={alumini4} width="200px" height="200px" style={{borderRadius: '50%'}}/>
        <p>Sambhav Sharma</p>
       </center>
      </div>
      <div style={{width: '100%'}}>
       <center>
        <img src={alumini5} width="200px" height="200px" style={{borderRadius: '50%'}}/>
        <p>Yamya Rastogi</p>
       </center>
      </div>
      <div style={{width: '100%', background: '#D3D3D3'}}>
      <br/>
       <center>
        <img src={alumini6} width="200px" height="200px" style={{borderRadius: '50%'}}/>
        <p>Vaishakh Marar</p>
       </center>
      </div>
    </div>
  );
}

export default Alumini;