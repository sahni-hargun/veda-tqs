import React from 'react';

function Footer() {
  return (
  	<center>
    <footer id="footer">
     <div className="footer">
       <a className="facebook" href="https://www.facebook.com/vedaqs/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
       <a className="slideshare" href="https://www.slideshare.net/QuizSocMSI" style={{marginLeft: '20px'}} target="_blank" rel="noopener noreferrer"><i className="fab fa-slideshare"></i></a>
       <a className="instagram" href="https://www.instagram.com/vedaquiz" style={{marginLeft: '20px'}} target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
       <p style={{color: 'white'}}>Copyright © 2021 All Rights Reserved by Veda-The Quiz Society.</p>
     </div>
    </footer>
    </center>
  );
}

export default Footer;