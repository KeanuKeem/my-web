import { useState, useEffect } from "react";

import About from "../components/About";
import Icon from "../components/Icon";
import Menubar from "../components/Menubar";
import GitHub from "../components/Github";
import LinkedIn from "../components/LinkedIn";

import "./Mainpage.css";
import "../components/FontColour.css";
import startApp from "../img/start.png";

const firstLine = "Hi! I am Keanu Keem!";
const firstName = "Keonwoo Kim!";
const secondLine = "The developer!";

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

  useEffect(() => {
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
  }, [firstText, firstIndex, firstNameIndex, firstNickName, firstActual]);

  useEffect(() => {
    if (secondIndex < secondLine.length && firstLineDone) {
      setTimeout(() => {
        setSecondText(secondText + secondLine[secondIndex]);
        setSecondIndex(secondIndex + 1);
      }, 100);
    }
  }, [secondIndex, firstLineDone, secondText]);

  useEffect(() => {
    if (firstText.length === 21 && firstActual) {
      setFirstActualDone(true);
      setFirstText(
        <>
          <span className="tag">Hi</span>
          <span>! </span>
          <span className="attribute">I am </span>
          <span className="value">Keonwoo </span>
          <span className="value">Kim</span>
          <span>!</span>
        </>
      );
      setTimeout(() => {
        setFirstLineDone(true);
      }, 2000);
    }
  }, [firstText, firstLineDone, firstActual]);

  useEffect(() => {
    if (secondIndex === secondLine.length) {
      setSecondLineDone(true);
      setSecondText(
        <>
          <span className="tag">The </span>
          <span className="attribute">developer</span>
          <span>!</span>
        </>
      );
    }
  }, [secondIndex]);

  return (
    <div className="main">
      {props.type !== "about-me" && (
        <div className="main-top">
          <div className="main-top__icon">
            <Icon className="main-top__icon__left" name="village.js">
              <img
                className="main-top__icon__start"
                src={startApp}
                alt="startIcon"
              />
            </Icon>
          </div>
          <div className="main-top__text">
            {props.type === "LinkedIn" && <LinkedIn />}
            {props.type === "GitHub" && <GitHub />}
            {props.type === "home" && (
              <>
                <h1>
                  <span className="main-top__message">{firstText}</span>
                  {!firstActualDone && (
                    <span className="main-top__text__cursor">|</span>
                  )}
                </h1>
                <h1 className="main-top__text__first">
                  <span className="main-top__message">{secondText}</span>
                  {firstActualDone && (
                    <span className="main-top__text__cursor">|</span>
                  )}
                </h1>
              </>
            )}
          </div>
        </div>
      )}
      {props.type === "about-me" && <About />}
      {secondLineDone && <Menubar setType={props.setType} />}
    </div>
  );
};

export default Mainpage;
