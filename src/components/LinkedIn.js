import { useState, useEffect, useContext } from "react";

import ColourContext from "../store/ColourContext";

import "./FontColour.css";

const linkedInLine = "You will be redirected to my LinkedIn page :)";

const LinkedIn = () => {
  const ctx = useContext(ColourContext);
  const [linkedInText, setLinkedInText] = useState("");
  const [linkedInIndex, setLinkedInIndex] = useState(0);
  const [linkedInDone, setLinkedInDone] = useState(false);
  const [linkedInSent, setLinkedInSent] = useState(false);

  useEffect(() => {
    setTimeout(() => {}, 1000);
    if (linkedInIndex < linkedInLine.length) {
      setTimeout(() => {
        setLinkedInText(linkedInText + linkedInLine[linkedInIndex]);
        setLinkedInIndex(linkedInIndex + 1);
      }, 100);
    }
  }, [linkedInIndex, linkedInText]);

  useEffect(() => {
    if (linkedInIndex === linkedInLine.length) {
      setLinkedInText(
        <>
          <span className={ctx.colourMode === "light" ? "tag" : "tag-dark"}>
            You{" "}
          </span>
          <span
            className={
              ctx.colourMode === "light" ? "attribute" : "attribute-dark"
            }
          >
            will be{" "}
          </span>
          <span className={ctx.colourMode === "light" ? "font" : "font-dark"}>
            redirected to my{" "}
          </span>
          <span className={ctx.colourMode === "light" ? "value" : "value-dark"}>
            LinkedIn page{" "}
          </span>
          <span className={ctx.colourMode === "light" ? "font" : "font-dark"}>
            {":)"}
          </span>
        </>
      );
      setLinkedInDone(true);
    }
  }, [ctx.colourMode, linkedInIndex]);

  useEffect(() => {
    if (linkedInDone && !linkedInSent) {
      setTimeout(() => {
        window.open("https://www.linkedin.com/in/keonwook1m/", "_blank");
        setLinkedInSent(true);
      }, 1500);
    }
  }, [linkedInDone, linkedInSent]);

  return (
    <h1>
      <span
        className={
          ctx.colourMode === "dark"
            ? "main-top__message-dark"
            : "main-top__message"
        }
      >
        {linkedInText}
      </span>
      <span
        className={
          ctx.colourMode === "light"
            ? "main-top__text__cursor"
            : "main-top__text__cursor-dark"
        }
      >
        |
      </span>
    </h1>
  );
};

export default LinkedIn;
