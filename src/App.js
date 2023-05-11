import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faK,
  faSpinner,
  faSun,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";

import ColourContext from "./store/ColourContext";
import Mainpage from "./page/Mainpage";

import "./App.css";
import "./components/FontColour.css";

function App() {
  const [isWelcome, setIsWelcome] = useState(true);
  const [welcomeClass, setWelcomeClass] = useState("view__welcome appear");
  const [currentType, setCurrentType] = useState("home");
  const [colourMode, setColourMode] = useState("light");

  useEffect(() => {
    setTimeout(() => {
      setWelcomeClass("view__welcome disappear");
      setTimeout(() => {
        setIsWelcome(false);
      }, 2000);
    }, 3000);
  }, []);

  return (
    <ColourContext.Provider value={{ colourMode }}>
      <div className="App">
        <div className={colourMode === "light" ? "view" : "view-dark"}>
          <div
            className={colourMode === "light" ? "view-top" : "view-top-dark"}
          >
            <div className="view-top__logo-line">
              <FontAwesomeIcon className="view-top__logo" icon={faK} />
            </div>
            <div
              className={
                colourMode === "light"
                  ? "view-top__mode__light-active"
                  : "view-top__mode__light"
              }
              onClick={() => {
                setColourMode("light");
              }}
            >
              <FontAwesomeIcon
                className={
                  colourMode === "light"
                    ? "view-top__light-active"
                    : "view-top__light"
                }
                icon={faSun}
              />
            </div>
            <div
              className={
                colourMode === "light"
                  ? "view-top__mode__dark"
                  : "view-top__mode__dark-active"
              }
              onClick={() => {
                setColourMode("dark");
              }}
            >
              <FontAwesomeIcon className="view-top__dark" icon={faMoon} />
            </div>
            {currentType !== "home" && (
              <p>
                <span className={colourMode === "light" ? "font" : "font-dark"}>
                  {currentType}
                </span>
              </p>
            )}
          </div>
          {isWelcome && (
            <div className={welcomeClass}>
              <h2 className="view__welcome__heading">
                <span className={colourMode === "light" ? "font" : "font-dark"}>
                  Welcome!
                </span>
              </h2>
              <FontAwesomeIcon
                className={
                  colourMode === "light"
                    ? "view__welcome__spinner"
                    : "view__welcome__spinner-dark"
                }
                icon={faSpinner}
              />
            </div>
          )}
          {!isWelcome && (
            <Mainpage type={currentType} setType={setCurrentType} />
          )}
        </div>
      </div>
    </ColourContext.Provider>
  );
}

export default App;
