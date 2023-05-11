import { useState, useEffect } from "react";

import "./FontColour.css";

const linkedInLine = "You will be redirected to my LinkedIn page :)";

const LinkedIn = () => {
  const [linkedInText, setLinkedInText] = useState("");
  const [linkedInIndex, setLinkedInIndex] = useState(0);
  const [linkedInDone, setLinkedInDone] = useState(false);

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
          <span className="tag">You </span>
          <span className="attribute">will be </span>
          <span>redirected to my </span>
          <span className="value">LinkedIn page{" "}</span>
          <span>{":)"}</span>
        </>
      );
      setLinkedInDone(true);
    }
  }, [linkedInIndex]);

  useEffect(() => {
    if (linkedInDone) {
      setTimeout(() => {
        window.open("https://www.linkedin.com/in/keonwook1m/", "_blank");
      }, 1500);
    }
  }, [linkedInDone]);

  return (
    <h1>
      <span>{linkedInText}</span>
      <span className="main-top__text__cursor">|</span>
    </h1>
  );
};

export default LinkedIn;
