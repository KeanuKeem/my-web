import { useState } from "react";

import "./Icon.css";

const Icon = (props) => {
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
          <div className="icon__inner">{props.children}</div>
          {showDesc && <p className="icon__desc">{props.name}</p>}
        </div>
      </>
    );
  } else {
    return (
      <div className={props.className} onClick={props.onClick}>
        <div className="icon__inner">{props.children}</div>
        <p className="icon__name">{props.name}</p>
      </div>
    );
  }
};

export default Icon;
