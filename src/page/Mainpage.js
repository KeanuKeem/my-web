import { useState, useEffect } from "react";

import Icon from "../components/Icon";
import Menubar from "../components/Menubar";

import "./Mainpage.css";
import startApp from "../img/start.png";

const firstLine = "Hi! I am Keanu Keem!";
const firstName = "Keonwoo Kim!";
const secondLine = "The developer!";

const linkedInLine = "You will be redirected to my LinkedIn page :)";
const githubLine = "You will be redirected to my GitHub page :)";

const Mainpage = (props) => {
  const [firstText, setFirstText] = useState("");
  const [firstNickName, setFirstNickName] = useState(false);
  const [firstActual, setFirstActual] = useState(false);
  const [firstIndex, setFirstIndex] = useState(0);
  const [firstNameIndex, setFirstNameIndex] = useState(0);
  const [firstActualDone, setFirstActualDone] = useState(false);
  const [firstLineDone, setFirstLineDone] = useState(false);
  const [secondText, setSecondText] = useState("");
  const [secondIndex, setSecondIndex] = useState(0);
  const [secondLineDone, setSecondLineDone] = useState(false);
  const [linkedInText, setLinkedInText] = useState("");
  const [linkedInIndex, setLinkedInIndex] = useState(0);
  const [githubText, setGithubText] = useState("");
  const [githubIndex, setGithubIndex] = useState(0);

  useEffect(() => {
    if (props.type === "home") {
      if (firstIndex === firstLine.length && !firstNickName) {
        setTimeout(() => {
          setFirstNickName(true);
        }, 1000);
      }
      if (firstIndex === 9 && firstNickName) {
        setTimeout(() => {
          setFirstActual(true);
        }, 800);
      }
      if (firstIndex < firstLine.length && !firstNickName) {
        setTimeout(() => {
          setFirstText(firstText + firstLine[firstIndex]);
          setFirstIndex(firstIndex + 1);
        }, 100);
      }
      if (firstIndex > 9 && firstNickName) {
        setTimeout(() => {
          setFirstText(firstText.substring(0, firstText.length - 1));
          setFirstIndex(firstIndex - 1);
        }, 100);
      }
      if (firstNameIndex < firstName.length && firstActual) {
        setTimeout(() => {
          setFirstText(firstText + firstName[firstNameIndex]);
          setFirstNameIndex(firstNameIndex + 1);
        }, 100);
      }
    }
  }, [
    props.type,
    firstText,
    firstIndex,
    firstNameIndex,
    firstNickName,
    firstActual,
  ]);

  useEffect(() => {
    if (props.type === "home") {
      if (firstText.length === 21 && firstActual) {
        setFirstActualDone(true);
        setTimeout(() => {
          setFirstLineDone(true);
        }, 2000);
      }
      if (secondIndex < secondLine.length && firstLineDone) {
        setTimeout(() => {
          setSecondText(secondText + secondLine[secondIndex]);
          setSecondIndex(secondIndex + 1);
        }, 100);
      }
    }
    if (secondIndex === secondLine.length) {
      setSecondLineDone(true);
    }
  }, [
    props.type,
    firstText,
    firstIndex,
    secondText,
    secondIndex,
    firstLineDone,
    firstActual,
  ]);

  useEffect(() => {
    if (props.type === "LinkedIn") {
      setTimeout(() => {}, 1000);
      if (linkedInIndex < linkedInLine.length) {
        setTimeout(() => {
          setLinkedInText(linkedInText + linkedInLine[linkedInIndex]);
          setLinkedInIndex(linkedInIndex + 1);
        }, 100);
      }
      if (linkedInIndex === linkedInLine.length) {
        setTimeout(() => {
          window.open("https://www.linkedin.com/in/keonwook1m/", "_blank");
        }, 2000);
      }
    }
    if (props.type === "GitHub") {
      setTimeout(() => {}, 1000);
      if (githubIndex < githubLine.length) {
        setTimeout(() => {
          setGithubText(githubText + githubLine[githubIndex]);
          setGithubIndex(githubIndex + 1);
        }, 100);
      }
      if (githubIndex === githubLine.length) {
        setTimeout(() => {
          window.open("https://github.com/KeanuKeem", "_blank");
        }, 2000);
      }
    }
  }, [props.type, linkedInIndex, linkedInText, githubIndex, githubText]);

  return (
    <div className="main">
      <div className="main-top">
        <div className="main-top__icon">
          <Icon className="main-top__icon__left" name="start.js">
            <img
              className="main-top__icon__start"
              src={startApp}
              alt="startIcon"
            />
          </Icon>
        </div>
        <div className="main-top__text">
          {props.type === "LinkedIn" && (
            <h1>
              <span>{linkedInText}</span>
              <span className="main-top__text__cursor">|</span>
            </h1>
          )}
          {props.type === "GitHub" && (
            <h1>
              <span>{githubText}</span>
              <span className="main-top__text__cursor">|</span>
            </h1>
          )}
          {props.type === "home" && (
            <>
              <h1>
                <span>{firstText}</span>
                {!firstActualDone && (
                  <span className="main-top__text__cursor">|</span>
                )}
              </h1>
              <h1 className="main-top__text__first">
                <span>{secondText}</span>
                {firstActualDone && (
                  <span className="main-top__text__cursor">|</span>
                )}
              </h1>
            </>
          )}
        </div>
      </div>
      {secondLineDone && (
        <Menubar
          setType={props.setType}
          setLinkedInText={setLinkedInText}
          setLinkedInIndex={setLinkedInIndex}
          setGithubText={setGithubText}
          setGithubIndex={setGithubIndex}
        />
      )}
    </div>
  );
};

export default Mainpage;
