import React from "react";
import member3 from "./images/hargun.jpg";
import arnvh from "./images/arnvh.jpg";
import adityabhaskar from "./images/Adityabhaskar.jpg";
import Prabhav from "./images/prabhav.jpg";
import Tanmay from "./images/tanmay.jpg";
import Vibhash from "./images/Vibhashsingh.jpg";
import Brahmjot from "./images/bjosh.jpg";
import Aman from "./images/amansriv.jpg";


function Member() {
  return (
    <div className="Member">
      <center>
        <div
          style={{
            borderBottom: "2px solid black",
            width: "300px",
            marginTop: "5px",
            marginBottom: "15px",
          }}
        >
          <h2 style={{ fontWeight: "200" }}>Core Members</h2>
        </div>
      </center>
      <div style={{ width: "100%" }}>
        <center>
          <img
            src={arnvh}
            
            height="200px"
            style={{ borderRadius: "25%" }}
          />
          <p>President <br/> Arnvh Sharma</p>
        </center>
      </div>
      
      <div style={{ width: "100%" }}>
        <center>
          <img
            src={adityabhaskar}
            
            height="200px"
            style={{ borderRadius: "25%" }}
          />
          <p>Vice President <br/> Aditya Bhaskar</p>
        </center>
      </div>
      <div style={{ width: "100%" }}>
        <center>
          <img
            src={Brahmjot}
            
            height="200px"
            style={{ borderRadius: "25%" }}
          />
          <p>Content Head <br/> Brahmjot Singh</p>
        </center>
      </div>
      <div style={{ width: "100%" }}>
        <center>
          <img
            src={Aman}
            
            height="200px"
            style={{ borderRadius: "25%" }}
          />
          <p>Content Head <br/> Aman Kumar</p>
        </center>
      </div>
      <div style={{ width: "100%" }}>
        <center>
          <img
            src={Vibhash}
            
            height="200px"
            style={{ borderRadius: "25%" }}
          />
          <p>Event Head <br/> Vibhash</p>
        </center>
      </div>
      <div style={{ width: "100%" }}>
        <center>
          <img
            src={Prabhav}
            
            height="200px"
            style={{ borderRadius: "25%" }}
          />
          <p>Event Head <br/> Prabhav</p>
        </center>
      </div>
      <div style={{ width: "100%" }}>
        <center>
          <img
            src={Tanmay}
            
            height="200px"
            style={{ borderRadius: "25%" }}
          />
          <p>Public Relations & Sponsorship Head <br/> Tanmay Khandelwal</p>
        </center>
      </div>
      
    </div>
  );
}

export default Member;
