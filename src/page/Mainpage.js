import { useState, useEffect, useContext } from "react";

import About from "../components/About";
import Icon from "../components/Icon";
import Menubar from "../components/Menubar";
import GitHub from "../components/Github";
import LinkedIn from "../components/LinkedIn";
import ColourContext from "../store/ColourContext";

import "./Mainpage.css";
import "../components/FontColour.css";
import startApp from "../img/start.png";

const firstLine = "Hi! I am Keanu Keem!";
const firstName = "Keonwoo Kim!";
const secondLine = "The developer!";

const Mainpage = (props) => {
  const ctx = useContext(ColourContext);
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

  useEffect(() => {
    if (firstActualDone) {
      setFirstText(
        <>
          <span className={ctx.colourMode === "light" ? "tag" : "tag-dark"}>
            Hi
          </span>
          <span className={ctx.colourMode === "light" ? "font" : "font-dark"}>
            !{" "}
          </span>
          <span
            className={
              ctx.colourMode === "light" ? "attribute" : "attribute-dark"
            }
          >
            I am{" "}
          </span>
          <span className={ctx.colourMode === "light" ? "value" : "value-dark"}>
            {"Keonwoo Kim"}
          </span>
          <span className={ctx.colourMode === "light" ? "font" : "font-dark"}>
            !
          </span>
        </>
      );
    }
  }, [ctx.colourMode, firstActualDone]);

  useEffect(() => {
    if (secondLineDone) {
      setSecondText(
        <>
          <span className={ctx.colourMode === "light" ? "tag" : "tag-dark"}>
            The{" "}
          </span>
          <span
            className={
              ctx.colourMode === "light" ? "attribute" : "attribute-dark"
            }
          >
            developer
          </span>
          <span className={ctx.colourMode === "light" ? "font" : "font-dark"}>!</span>
        </>
      );
    }
  }, [ctx.colourMode, secondLineDone]);

  return (
    <div className={ctx.colourMode === "light" ? "main" : "main-dark"}>
      {props.type !== "About-me" && (
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
                  <span
                    className={
                      ctx.colourMode === "dark" && !firstActualDone
                        ? "main-top__message-dark"
                        : "main-top__message"
                    }
                  >
                    {firstText}
                  </span>
                  {!firstActualDone && (
                    <span
                      className={
                        ctx.colourMode === "light"
                          ? "main-top__text__cursor"
                          : "main-top__text__cursor-dark"
                      }
                    >
                      |
                    </span>
                  )}
                </h1>
                <h1 className="main-top__text__first">
                  <span
                    className={
                      ctx.colourMode === "dark" && !secondLineDone
                        ? "main-top__message-dark"
                        : "main-top__message"
                    }
                  >
                    {secondText}
                  </span>
                  {firstActualDone && (
                    <span
                      className={
                        ctx.colourMode === "light"
                          ? "main-top__text__cursor"
                          : "main-top__text__cursor-dark"
                      }
                    >
                      |
                    </span>
                  )}
                </h1>
              </>
            )}
          </div>
        </div>
      )}
      {props.type === "About-me" && <About />}
      {secondLineDone && <Menubar setType={props.setType} />}
    </div>
  );
};

export default Mainpage;
