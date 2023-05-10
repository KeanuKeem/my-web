import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faK, faSpinner } from "@fortawesome/free-solid-svg-icons";

import Mainpage from "./page/Mainpage";

import "./App.css";

function App() {
  const [isWelcome, setIsWelcome] = useState(true);
  const [welcomeClass, setWelcomeClass] = useState("view__welcome appear");

  useEffect(() => {
    setTimeout(() => {
      setWelcomeClass("view__welcome disappear");
      setTimeout(() => {
        setIsWelcome(false);
      }, 2000);
    }, 3000);
  }, []);

  return (
    <div className="App">
      <div className="view">
        <div className="view-top">
          <div className="view-top__logo-line">
            <FontAwesomeIcon className="view-top__logo" icon={faK} />
          </div>
        </div>
        {isWelcome && (
          <div className={welcomeClass}>
            <h2>Welcome!</h2>
            <FontAwesomeIcon
              className="view__welcome__spinner"
              icon={faSpinner}
            />
          </div>
        )}
        {!isWelcome && <Mainpage />}
      </div>
    </div>
  );
}

export default App;
