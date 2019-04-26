import React, { Fragment, useState } from "react";
import { ButtonD } from "./Styles/Style";
import { NavBar } from "./Components/NavBar";
import Styling from "./Styles/Styling.css";
import { Pnr } from "./Components/Pnr";
import { Tname } from "./Components/Tname";

export const App = () => {
  // Hooks.
  const [state, setState] = useState("");

  // Change Screen From Home.
  const handleClick = e => {
    setState(e.target.value);
  };

  // Conditional Rendering.
  if (state === "pnr") return <Pnr />;
  else if (state === "tname") return <Tname />;
  else {
    return (
      <Fragment>
        <NavBar />
        <div id="introBox">
          <ButtonD value="pnr" id="pnr" onClick={handleClick}>
            PNR Status.
          </ButtonD>
          <br />
          <br />
          <ButtonD value="tname" id="tname" onClick={handleClick}>
            Get Train Name.
          </ButtonD>
        </div>
      </Fragment>
    );
  }
};
