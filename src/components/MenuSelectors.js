import { useReducer, useEffect } from "react";

import "./MenuSelectors.css";

const classArray = [
  "options blur-bottom",
  "options selected",
  "options blur-top",
  "options blur",
];
const animationUpArray = [
  "options blurBottom__moveUp",
  "options selected__moveUp",
  "options blurTop__moveUp",
  "options blur__moveUp",
];
const animationDownArray = [
  "options blurBottom__moveDown",
  "options selected__moveDown",
  "options blurTop__moveDown",
  "options blur__moveDown",
];
const arrayIndexHandler = (type, index) => {
  if (type === "up") {
    if (index < 3) {
      return index + 1;
    } else {
      return 0;
    }
  } else {
    if (index === 0) {
      return 3;
    } else {
      return index - 1;
    }
  }
};

const menuReducer = (state, action) => {
  if (action.type === "moveUp") {
    return {
      BrowseIndex: state.BrowseIndex,
      BrowseClass: animationUpArray[state.BrowseIndex],
      GithubIndex: state.GithubIndex,
      GithubClass: animationUpArray[state.GithubIndex],
      LinkedInIndex: state.LinkedInIndex,
      LinkedInClass: animationUpArray[state.LinkedInIndex],
      CVIndex: state.CVIndex,
      CVClass: animationUpArray[state.CVIndex],
    };
  }
  if (action.type === "moveDown") {
    return {
      BrowseIndex: state.BrowseIndex,
      BrowseClass: animationDownArray[state.BrowseIndex],
      GithubIndex: state.GithubIndex,
      GithubClass: animationDownArray[state.GithubIndex],
      LinkedInIndex: state.LinkedInIndex,
      LinkedInClass: animationDownArray[state.LinkedInIndex],
      CVIndex: state.CVIndex,
      CVClass: animationDownArray[state.CVIndex],
    };
  }
  if (action.type === "done") {
    return {
      BrowseIndex: action.BrowseIndex,
      BrowseClass: classArray[action.BrowseIndex],
      GithubIndex: action.GithubIndex,
      GithubClass: classArray[action.GithubIndex],
      LinkedInIndex: action.LinkedInIndex,
      LinkedInClass: classArray[action.LinkedInIndex],
      CVIndex: action.CVIndex,
      CVClass: classArray[action.CVIndex],
    };
  }
};

const MenuSelectors = () => {
  const [menuState, dispatchMenuState] = useReducer(menuReducer, {
    BrowseIndex: 1,
    BrowseClass: "options selected",
    GithubIndex: 2,
    GithubClass: "options blur-top",
    LinkedInIndex: 0,
    LinkedInClass: "options blur-bottom",
    CVIndex: 3,
    CVClass: "options blur",
  });

  useEffect(() => {
    document.addEventListener("keydown", menuMoveHandler);
    return () => {
      document.removeEventListener("keydown", menuMoveHandler);
    };
  }, [menuState]);

  const menuMoveHandler = (event) => {
    if (event.key === "w") {
      dispatchMenuState({
        type: "moveUp",
      });
      setTimeout(() => {
        dispatchMenuState({
          type: "done",
          BrowseIndex: arrayIndexHandler("up", menuState.BrowseIndex),
          GithubIndex: arrayIndexHandler("up", menuState.GithubIndex),
          LinkedInIndex: arrayIndexHandler("up", menuState.LinkedInIndex),
          CVIndex: arrayIndexHandler("up", menuState.CVIndex),
        });
      }, 1000);
    }
    if (event.key === "s") {
      dispatchMenuState({
        type: "moveDown",
      });
      setTimeout(() => {
        dispatchMenuState({
          type: "done",
          BrowseIndex: arrayIndexHandler("down", menuState.BrowseIndex),
          GithubIndex: arrayIndexHandler("down", menuState.GithubIndex),
          LinkedInIndex: arrayIndexHandler("down", menuState.LinkedInIndex),
          CVIndex: arrayIndexHandler("down", menuState.CVIndex),
        });
      }, 1000);
    }
  };

  return (
    <div>
      <div className={menuState.BrowseClass}>Browse</div>
      <div className={menuState.GithubClass}>Github</div>
      <div className={menuState.LinkedInClass}>LinkedIn</div>
      <div className={menuState.CVClass}>CV</div>
    </div>
  );
};

export default MenuSelectors;
