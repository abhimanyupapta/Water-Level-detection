import React, { useState } from "react";
import newRecord from "./data";
import axios from 'axios';

const RegForm = () => {
  const [userRegistration, setUserRegistration] = useState({
    username: "",
    email: "",
    tankHT: "",
    tankRadii: "",
    password: "",
  });

  const [records, setRecords] = useState([]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserRegistration({ ...userRegistration, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newRecordC = { ...userRegistration, id: new Date().getTime().toString };

    Object.assign(newRecord, newRecordC);

    setRecords([...records, newRecord]);
    setUserRegistration({
      username: "",
      email: "",
      tankHT: "",
      tankRadii: "",
      password: "",
    });

    delete newRecord.id;

    // let newRecordSend = {"proxy": "http://localhost:8080/waterTank/registration", ...newRecord};

    fetch("http://localhost:8080/waterTank/addNew", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRecord)
    });

    // axios.post("http://localhost:8080/waterTank/registration", JSON.stringify(newRecord))
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

    console.log(JSON.stringify(newRecord));
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <div id="field" className="info form">
          <label htmlFor="username">username</label>
          <input
            type="text"
            autoComplete="off"
            value={userRegistration.username}
            onChange={handleInput}
            name="username"
            id="username"
          />
        </div>
        <div id="field" className="info form">
          <label htmlFor="email">email</label>
          <input
            type="email"
            autoComplete="off"
            value={userRegistration.email}
            onChange={handleInput}
            name="email"
            id="email"
          />
        </div>
        <div id="field" className="info form">
          <label htmlFor="tankHT">Tank Height (in cm)</label>
          <input
            type="number"
            autoComplete="off"
            value={userRegistration.tankHT}
            onChange={handleInput}
            name="tankHT"
            id="tankHT"
          />
        </div>
        <div id="field" className="info form">
          <label htmlFor="tankRadii">Tank Radius (in cm)</label>
          <input
            type="number"
            autoComplete="off"
            value={userRegistration.tankRadii}
            onChange={handleInput}
            name="tankRadii"
            id="tankRadii"
          />
        </div>
        <div id="field" className="info form">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            autoComplete="off"
            value={userRegistration.password}
            onChange={handleInput}
            name="password"
            id="password"
          />
        </div>

        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default RegForm;
