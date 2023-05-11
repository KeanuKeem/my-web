import { useState, useEffect } from "react";

import "./FontColour.css";

const githubLine = "You will be redirected to my GitHub page :)";

const GitHub = () => {
  const [githubText, setGithubText] = useState("");
  const [githubIndex, setGithubIndex] = useState(0);
  const [githubDone, setGithubDone] = useState(false);

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
          <span className="tag">You </span>
          <span className="attribute">will be </span>
          <span>redirected to my </span>
          <span className="value">GitHub page{" "}</span>
          <span>{":)"}</span>
        </>
      );
      setGithubDone(true);
    }
  }, [githubIndex]);

  useEffect(() => {
    if (githubDone) {
      setTimeout(() => {
        window.open("https://github.com/KeanuKeem", "_blank");
      }, 2000);
    }
  }, [githubDone]);

  return (
    <h1>
      <span>{githubText}</span>
      <span className="main-top__text__cursor">|</span>
    </h1>
  );
};

export default GitHub;
