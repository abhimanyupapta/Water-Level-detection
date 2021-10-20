import axios from "axios";
import React, { useState, useEffect } from "react";
import "../index.css";
import newRecord from "./data.js";

const TankInfo = () => {
  const [realHT, setRealHT] = useState([]);
  const [tankHT, setTankHT] = useState([]);
  const [tankRadii, setTankRadii] = useState([]);

  const fetchData = () => {
    const realAPI = "http://localhost:8080/waterTank/getVol";
    const tankAPI = "http://localhost:8080/waterTank/getTankHT";

    const getRealHT = axios.get(realAPI);
    const getTankData = axios.get(tankAPI);
    axios.all([getRealHT, getTankData]).then(
      axios.spread((...allData) => {
        const allRealData = allData[0].data.pop().volume;
        const allTankData = allData[1].data.pop();
        const allTankHT = allTankData.tankHT;
        const allTankRadii = allTankData.tankRadii;

        setRealHT(allRealData);
        setTankHT(allTankHT);
        setTankRadii(allTankRadii);
      })
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  const radius = parseInt(tankRadii);
  const height = parseInt(tankHT);
  let totalVol = 3.14 * height * radius ** 2;
  let currVol = 3.14 * (height - parseInt(realHT)) * radius ** 2;
  let perVol = (currVol / totalVol) * 100;

  const root = document.documentElement;

  root.style.setProperty(
    "--level",
    `${perVol}%` 
    );
  
const handleClick = () => {
    window.location.reload();
  };

  return (
    <div>
      <div className="card">
          <div className="info">
            <div>Filled</div>
            <div>{String(perVol + "%")}</div>
          </div>
          <div className="tank"></div>
          <button className="btn" onClick={handleClick}>
            Refresh
          </button>
        </div>
      )
    </div>
  );
};

export default TankInfo;
