import React, { Fragment, useState } from "react";
import { NavBar } from "./NavBar";
import { TinyButton, InputBox } from "../Styles/Style";

export const Tname = () => {
  const [tname, setTname] = useState("");
  const [screen, setScreen] = useState(false);
  const [trainData, setTData] = useState({});

  const handleChange = e => {
    setTname(e.target.value);
  };

  const handleSubmit = async e => {
    const resp = await fetch("/api/getTrainDet", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name: tname })
    });
    const data = await resp.json();
    setTData(data);
    setScreen(true);
  };

  return (
    <Fragment>
      <NavBar />
      <div id="Form">
        <br />
        <br />
        <InputBox placeholder="Train Name or Number." onChange={handleChange} />
        <br />
        <br />
        <TinyButton onClick={handleSubmit}>Submit</TinyButton>
        <br />
        <br />
        <br />
        <hr />
        {screen === true && (
          <div>
            <strong>
              {" "}
              <h3>
                Train Number <h2>{trainData.train.number}</h2>
              </h3>
              <br />
              <h3>
                Train Name <h2>{trainData.train.name}</h2>
              </h3>
            </strong>
            <br />
            <br />
            <h3> Running Days.</h3>
            {trainData.train.days.map((el, elInd) => {
              if (el.runs === "Y") {
                return (
                  <div>
                    <li>{el.code}</li>
                    <br />
                  </div>
                );
              }
              console.log(el);
            })}
          </div>
        )}
      </div>
    </Fragment>
  );
};
