import { useState, useContext } from "react";

import ColourContext from "../store/ColourContext";

import "./Icon.css";
import "./FontColour.css";

const Icon = (props) => {
  const ctx = useContext(ColourContext);
  const [showDesc, setShowDesc] = useState(false);

  if (props.type === "bottom") {
    return (
      <>
        <div
          className={props.className}
          onClick={props.onClick}
          onMouseEnter={() => {
            setShowDesc(true);
          }}
          onMouseLeave={() => {
            setShowDesc(false);
          }}
        >
          <div
            className={
              ctx.colourMode === "light" ? "icon__inner" : "icon__inner-dark"
            }
          >
            {props.children}
          </div>
          {showDesc && <p className="icon__desc">{props.name}</p>}
        </div>
      </>
    );
  } else {
    return (
      <div className={props.className} onClick={props.onClick}>
        <div className="icon__inner">{props.children}</div>
        <p className="icon__name">
          <span className={ctx.colourMode === "light" ? "font" : "font-dark"}>
            {props.name}
          </span>
        </p>
      </div>
    );
  }
};

export default Icon;
