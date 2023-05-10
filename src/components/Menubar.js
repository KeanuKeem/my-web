import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";

import Icon from "./Icon";

import "./Menubar.css";
import gitHub from "../img/github.svg";
import linkedin from "../img/linkedin.svg";

const Menubar = (props) => {
  const [linkedInClass, setLinkedInClass] = useState("");

  return (
    <div className="main-bottom">
      <Icon name="LinkedIn.js">
        <img
          className="main-bottom__icon linkedin"
          src={linkedin}
          alt="linedin"
        />
      </Icon>
      <Icon name="Github.js">
        <img className="main-bottom__icon" src={gitHub} alt="github" />
      </Icon>
      <Icon name="Cargo-Scheduler.js">
        <FontAwesomeIcon
          className="main-bottom__fa-icon"
          icon={faClipboardList}
        />
      </Icon>
    </div>
  );
};

export default Menubar;
