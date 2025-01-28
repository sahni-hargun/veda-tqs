import React from 'react';
import './Practice.css';
import triv13 from './images/13triv.jpg';
import epsq from './images/epsq.jpg';
import chaturq from './images/chaturq.jpg';
import neural from "./images/neural.jpg"

function Practice() {
  return (
    <div className="Practice">
      <center>   
      <div style={{borderBottom: '2px solid black', width: '300px', marginTop: '5px', marginBottom: '15px'}}> 
      <h2 style={{fontWeight: '200'}}>Recent Events</h2>
      </div>
      </center>
      <div>
       <center><div className="titlediv"><span style={{fontSize: '25px'}}>The Neural Challenge 'Avensis 2025' </span></div></center>
       <center>
       <div className="picdiv">
        <img src={neural} style={{height: '500px'}}/>
       
       </div>
       </center>
      </div>  
      <div>
       <center><div className="titlediv"><span style={{fontSize: '25px'}}>13th Trivia Trials A General Quiz</span></div></center>
       <center>
       <div className="picdiv">
        <img src={triv13} style={{height: '500px'}}/>
       
       </div>
       </center>
      </div>  
      <div>
       <center><div className="titlediv"><span style={{fontSize: '25px'}}>Epstein's Little Quizlet The General Quiz </span></div></center>
       <center>
       <div className="picdiv">
        <img src={epsq} style={{height: '500px'}}/>
       
       </div>
       </center>
      </div>  
      <div>
       <center><div className="titlediv"><span style={{fontSize: '25px'}}>Chaturya Pariksha 'Genesis 2024' </span></div></center>
       <center>
       <div className="picdiv">
        <img src={chaturq} style={{height: '500px'}}/>
       
       </div>
       </center>
      </div>      <div>
       <center><div className="titlediv"><span style={{fontSize: '25px'}}>Tech Trivia with IIC MSIT</span></div></center>
       <center>
       <div className="pptdiv">
       <iframe src="https://onedrive.live.com/embed?resid=AA055C90E45906A7%21113&amp;authkey=%21AHpWBGmivLU8pWQ&amp;em=2&amp;wdAr=1.7777777777777777" width="100%" height="325px" frameborder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> presentation, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>
       </div>
       </center>
      </div>
      <br />
      <div>
       <center><div className="titlediv"><span style={{fontSize: '25px'}}>Recruitment Quiz 2021</span></div></center>
       <center>
       <div className="pptdiv">
       <iframe src="https://onedrive.live.com/embed?cid=025C04578EBDCF7A&amp;resid=25C04578EBDCF7A%211912&amp;authkey=AH-JxvvuSn6Rdko&amp;em=2&amp;wdAr=1.7777777777777777" width="100%" height="325px" frameborder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> presentation, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>
       </div>
       </center>
      </div>
      <br />
      <div>
       <center><div className="titlediv"><span style={{fontSize: '25px'}}>BizTech Prelims</span></div></center>
       <center>
       <div className="pptdiv">
       <iframe src="https://onedrive.live.com/embed?cid=025C04578EBDCF7A&amp;resid=25C04578EBDCF7A%211897&amp;authkey=AD77EX767YJGNxs&amp;em=2&amp;wdAr=1.7777777777777777" width="100%" height="325px" frameBorder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> presentation, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>
       </div>
       </center>
      </div>
      <br />
      <div>
       <center><div className="titlediv"><span style={{fontSize: '25px'}}>BizTech Finals</span></div></center>
       <center>
       <div className="pptdiv">
       <iframe src="https://onedrive.live.com/embed?cid=025C04578EBDCF7A&amp;resid=25C04578EBDCF7A%211899&amp;authkey=APmlNrU8Ie_Dchk&amp;em=2&amp;wdAr=1.7777777777777777" width="100%" height="325px" frameBorder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> presentation, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>
       </div>
       </center>
      </div>
      <br />
      <div>
       <center><div className="titlediv"><span style={{fontSize: '25px'}}>Pop It Like Its Hot Prelims</span></div></center>
       <center>
       <div className="pptdiv">
       <iframe src="https://onedrive.live.com/embed?cid=025C04578EBDCF7A&amp;resid=25C04578EBDCF7A%211889&amp;authkey=AAKFI3HopVkbzNo&amp;em=2&amp;wdAr=1.3333333333333333" width="100%" height="325px" frameBorder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> presentation, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>
       </div>
       </center>
      </div>
      <br />
      <div>
       <center><div className="titlediv"><span style={{fontSize: '25px'}}>Pop It Like Its Hot Finals</span></div></center>
       <center>
       <div className="pptdiv">
       <iframe src="https://onedrive.live.com/embed?cid=025C04578EBDCF7A&amp;resid=25C04578EBDCF7A%211891&amp;authkey=AIyJyXnqOySlTYI&amp;em=2&amp;wdAr=1.3333333333333333" width="100%" height="325px" frameBorder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> presentation, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>
       </div>
       </center>
      </div>
      <br />
    </div>
  );
}

export default Practice;
