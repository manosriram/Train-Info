import React, { Fragment, useState } from "react";
import { NavBar } from "./NavBar";
import { InputBox, TinyButton } from "../Styles/Style";

export const Pnr = () => {
  // Hooks.
  const [pnrNo, setPnrNo] = useState(-1);
  const [data, setData] = useState({});
  const [screen, changeScreen] = useState(false);

  const handleChange = e => {
    setPnrNo(e.target.value);
  };

  const handleSubmit = async () => {
    const resp = await fetch("/api/getPnrStat", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ PNR: pnrNo })
    });
    const data = await resp.json();
    setData(data);
    // if (data.pnr != null)
    changeScreen(true);
  };

  return (
    <Fragment>
      <NavBar />
      <div id="Form">
        <InputBox id="IB" placeholder="PNR No." onChange={handleChange} />
        <br />
        <br />
        <TinyButton onClick={handleSubmit}>Submit</TinyButton>
        <br />
        <br />
        <hr />
        {screen === true && (
          <div>
            <h3>STATUS : {data.pnr}</h3>
            <br />
            <h6>Train No : {data.train.number}</h6>
            <br />
            <h6>From : {data.from_station.name}</h6>
            <br />
            <h6>To : {data.to_station.name} </h6>
            <br />
            <h6>Total Passengers : {data.total_passengers}</h6>
            <br />
            <h6>Chart Prepared : {data.chart_prepared}</h6>
            <br />
          </div>
        )}
      </div>
    </Fragment>
  );
};
