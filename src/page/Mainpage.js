import { useState, useEffect } from "react";

import Icon from "../components/Icon";
import Menubar from "../components/Menubar";

import "./Mainpage.css";
import startApp from "../img/start.png";

const firstLine = "Hi! I am Keanu Keem!";
const firstName = "Keonwoo Kim!";
const secondLine = "The developer!";

const Mainpage = () => {
  const [textType, setTextType] = useState("home");
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
    if (secondIndex === secondLine.length) {
      setSecondLineDone(true);
    }
  }, [
    firstText,
    firstIndex,
    secondText,
    secondIndex,
    firstLineDone,
    firstActual,
  ]);

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
          {textType === "home" && (
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
      {secondLineDone && <Menubar />}
    </div>
  );
};

export default Mainpage;
