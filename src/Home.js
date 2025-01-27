import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import image0 from './images/slide_0.jpg';
import image1 from './images/EPSall.jpg';
import image2 from './images/epscore.jpg';
import image3 from './images/msiori24.jpg';
import './Home.css';

const slideImages = [
  image1,
  image2,
  image3
];

function Home() {
  return (
    <div className="Home">
      <div class="p-5 text-black" style={{backgroundColor: '#E9ECEF'}}>
       <h1 style={{fontSize: '40px', fontWeight: 400}}>Veda-The Quiz Society</h1>
       <p style={{fontSize: '20px', fontWeight: 200}}>Everyone loves sport. And everyone loves a quiz. - Sue Barker</p>
      </div>
      <center>
      <div className="slide-container">
        <Slide>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
            </div>
            <span>Pop It Like Its Hot 2020</span>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            </div>
            <span>BizTech 2020</span>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
            </div>
            <span>Best Event Award</span>
          </div>
        </Slide>
      </div>
      </center>
      <center>
      <div style={{background: 'black', color: 'white', width: '100%'}}>
       <div className="container" style={{padding: '10px'}}>
        <center>
         <p style={{fontSize: '30px'}}>About Us</p>
         <p>A mob of intrigued intellectuals, Veda is the ‘crème-de-la-crème’ of interactive societies where a diverse group of individuals, with a huge armamentarium of niche interests, work towards a common goal, which is to gain more knowledge.</p>
         <p>Beginning as a small group of people interested in quizzing, we’ve grown to become a recognized and successful society whose events are attended and appreciated by quizzers across Delhi.</p>
         <p>We have had numerous experiences worth mentioning as we have won a staggering 100+ podiums since the advent of our society including the hat trick we achieved in 2018 of winning a podium at the IPU Anugoonj Annual Quiz Competition. It’s really tough to emerge victorious among 120-130 teams and we did it thrice in a row, and that is something we will always cherish.</p>
         <br />       
        </center> 
       </div>
      </div>
      </center>
      <center>
      <div style={{background: '#D3D3D3', color: 'black', width: '100%'}}>
       <div className="container" style={{padding: '10px'}}>
        <center>
         <p style={{fontSize: '30px'}}>Aim</p>
         <p>Our aim is to develop an interest in quizzing among the students and create a platform that fosters an environment for all quizzing enthusiasts to grow and learn. The members of our society bond over their curiosity and their shared passion for quizzing. Even the most fleeting of looks at our Whatsapp group will prove this statement. Students are constantly sharing questions relating to their favourite genres and others are busy geeking out on its details. This interaction between the curious, and the intellectuals, allows for a highly intuitive environment which in turn allows for collective growth among society members.</p>
         <br />       
        </center> 
       </div>
      </div>
      </center>
      <center>
      <div style={{background: 'black', color: 'white', width: '100%'}}>
       <div className="container" style={{padding: '10px'}}>
        <center>
         <p style={{fontSize: '30px'}}>Event Updates</p>
         <center>
          <img src={image0} height="300" width="300"/>
         </center> 
         <br />       
        </center> 
       </div>
      </div>
      </center>
      <center>
      <div style={{background: '#D3D3D3', color: 'black', width: '100%'}}>
       <div className="container" style={{padding: '10px'}}>
        <center>
         <p style={{fontSize: '30px'}}>For Future Members</p>
         <p>Our society welcomes any and every kind of knowledge. Be it a Movie/TV shows fanatic, a Sports enthusiast, a Marvel/DC geek, a Biz fiend, an Information junkie, a Literature aficionado, a tech expert or a History buff, Veda is the society that is open for all who are curious. You will gain knowledge and will learn how to apply that knowledge in quizzing or in real life.</p>
         <br />       
        </center> 
       </div>
      </div>
      </center>
    </div>
  );
}

export default Home;
