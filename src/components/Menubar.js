import { useState, useContext } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardList, faIdCard } from "@fortawesome/free-solid-svg-icons";

import Icon from "./Icon";

import ColourContext from "../store/ColourContext";

import "./Menubar.css";
import gitHub from "../img/github.svg";
import linkedin from "../img/linkedin.svg";

const Menubar = (props) => {
  const ctx = useContext(ColourContext);
  const [linkedInClass, setLinkedInClass] = useState("main-bottom__unClick");
  const [githubClass, setGithubClass] = useState("main-bottom__unClick");
  const [aboutClass, setAboutClass] = useState("main-bottom__unClick");
  const [cargoSchedulerClass, setCargoSchedulerClass] = useState(
    "main-bottom__unClick"
  );

  const linkedInClickHandler = () => {
    setLinkedInClass("main-bottom__click");
    setTimeout(() => {
      setGithubClass("main-bottom__unClick");
      setAboutClass("main-bottom__unClick");
      setCargoSchedulerClass("main-bottom__unClick");
      props.setType("LinkedIn");
    }, 1200);
  };

  const githubClickHandler = () => {
    setGithubClass("main-bottom__click");
    setTimeout(() => {
      setLinkedInClass("main-bottom__unClick");
      setAboutClass("main-bottom__unClick");
      setCargoSchedulerClass("main-bottom__unClick");
      props.setType("GitHub");
    }, 1200);
  };

  const aboutClickHandler = () => {
    setAboutClass("main-bottom__click");
    setTimeout(() => {
      setLinkedInClass("main-bottom__unClick");
      setGithubClass("main-bottom__unClick");
      setCargoSchedulerClass("main-bottom__unClick");
      props.setType("About-me");
    }, 1200);
  };

  const cargoSchedulerClickHandler = () => {
    setCargoSchedulerClass("main-bottom__click");
    setTimeout(() => {
      setLinkedInClass("main-bottom__unClick");
      setGithubClass("main-bottom__unClick");
      setAboutClass("main-bottom__unClick");
      props.setType("CargoScheduler");
    }, 1200);
  };

  return (
    <div
      className={
        ctx.colourMode === "light" ? "main-bottom" : "main-bottom-dark"
      }
    >
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
        <FontAwesomeIcon
          className="main-bottom__profile-icon"
          icon={faIdCard}
        />
      </Icon>
      <Icon
        className={cargoSchedulerClass}
        type="bottom"
        onClick={cargoSchedulerClickHandler}
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
