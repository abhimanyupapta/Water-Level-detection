import React from "react";
import pic from "../homeImg.png"

function Home() {
  return (
    <div className="home">
      <div className="title">
       <h1>Water Level Detection App</h1>
       <p>An app created to detect real time water level</p>
      </div>
      <div className="names">
          <h1>Developed By :-</h1>
          <h1>Abhimanyu Papta</h1>
          <h1>Ritwik Duggal</h1>
      </div>
      <img src = {pic} className="hImg"></img>
      
    </div>
  );
}

export default Home;