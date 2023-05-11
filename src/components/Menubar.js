import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardList, faIdCard } from "@fortawesome/free-solid-svg-icons";

import Icon from "./Icon";

import "./Menubar.css";
import gitHub from "../img/github.svg";
import linkedin from "../img/linkedin.svg";

const Menubar = (props) => {
  const [linkedInClass, setLinkedInClass] = useState("main-bottom__unClick");
  const [githubClass, setGithubClass] = useState("main-bottom__unClick");
  const [aboutClass, setAboutClass] = useState("main-bottom__unClick");

  const linkedInClickHandler = () => {
    setLinkedInClass("main-bottom__click");
    setTimeout(() => {
      setGithubClass("main-bottom__unClick");
      setAboutClass("main-bottom__unClick");
      props.setType("LinkedIn");
    }, 1200);
  };

  const githubClickHandler = () => {
    setGithubClass("main-bottom__click");
    setTimeout(() => {
      setLinkedInClass("main-bottom__unClick");
      setAboutClass("main-bottom__unClick");
      props.setType("GitHub");
    }, 1200);
  };

  const aboutClickHandler = () => {
    setAboutClass("main-bottom__click");
    setTimeout(() => {
      setLinkedInClass("main-bottom__unClick");
      setGithubClass("main-bottom__unClick");
      props.setType("about-me");
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
        className={aboutClass}
        type="bottom"
        onClick={aboutClickHandler}
        name="About-Me.js"
      >
        <FontAwesomeIcon className="main-bottom__profile-icon" icon={faIdCard} />
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
