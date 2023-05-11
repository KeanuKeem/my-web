import { useState, useEffect, useContext } from "react";

import ColourContext from "../store/ColourContext";

import "./FontColour.css";

const githubLine = "You will be redirected to my GitHub page :)";

const GitHub = () => {
  const ctx = useContext(ColourContext);
  const [githubText, setGithubText] = useState("");
  const [githubIndex, setGithubIndex] = useState(0);
  const [githubDone, setGithubDone] = useState(false);
  const [githubSent, setGithubSent] = useState(false);

  useEffect(() => {
    setTimeout(() => {}, 1000);
    if (githubIndex < githubLine.length) {
      setTimeout(() => {
        setGithubText(githubText + githubLine[githubIndex]);
        setGithubIndex(githubIndex + 1);
      }, 100);
    }
  }, [githubIndex, githubText]);

  useEffect(() => {
    if (githubIndex === githubLine.length) {
      setGithubText(
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
            GitHub page{" "}
          </span>
          <span className={ctx.colourMode === "light" ? "font" : "font-dark"}>
            {":)"}
          </span>
        </>
      );
      setGithubDone(true);
    }
  }, [ctx.colourMode, githubIndex]);

  useEffect(() => {
    if (githubDone && !githubSent) {
      setTimeout(() => {
        window.open("https://github.com/KeanuKeem", "_blank");
        setGithubSent(true);
      }, 2000);
    }
  }, [githubDone, githubSent]);

  return (
    <h1>
      <span
        className={
          ctx.colourMode === "dark"
            ? "main-top__message-dark"
            : "main-top__message"
        }
      >
        {githubText}
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

export default GitHub;
