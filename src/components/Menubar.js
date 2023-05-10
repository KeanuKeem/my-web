import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";

import Icon from "./Icon";

import "./Menubar.css";
import gitHub from "../img/github.svg";
import linkedin from "../img/linkedin.svg";

const Menubar = (props) => {
  const [linkedInClass, setLinkedInClass] = useState("main-bottom__unClick");
  const [githubClass, setGithubClass] = useState("main-bottom__unClick");

  const linkedInClickHandler = () => {
    setLinkedInClass("main-bottom__click");
    setTimeout(() => {
      setGithubClass("");
      props.setGithubText("");
      props.setGithubIndex(0);
      props.setType("LinkedIn");
    }, 1200);
  };

  const githubClickHandler = () => {
    setGithubClass("main-bottom__click");
    setTimeout(() => {
      setLinkedInClass("");
      props.setLinkedInText("");
      props.setLinkedInIndex(0);
      props.setType("GitHub");
    }, 1200);
  };

  return (
    <div className="main-bottom">
      <Icon
        type="bottom"
        className={linkedInClass}
        onClick={linkedInClickHandler}
        name="LinkedIn.js"
      >
        <img
          className="main-bottom__icon linkedin"
          src={linkedin}
          alt="linedin"
        />
      </Icon>
      <Icon
        type="bottom"
        className={githubClass}
        onClick={githubClickHandler}
        name="Github.js"
      >
        <img className="main-bottom__icon" src={gitHub} alt="github" />
      </Icon>
      <Icon
        className="main-bottom__unClick"
        type="bottom"
        name="Cargo-Scheduler.js"
      >
        <FontAwesomeIcon
          className="main-bottom__fa-icon"
          icon={faClipboardList}
        />
      </Icon>
    </div>
  );
};

export default Menubar;
