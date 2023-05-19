import { useContext } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";

import ColourContext from "../../store/ColourContext";

import "./Navbar.css";

const Navbar = (props) => {
  const ctx = useContext(ColourContext);

  return (
    <div className="navbar">
      <div
        className={
          props.focus === "search" ? "navbar__search focus" : "navbar__search"
        }
        onClick={() => {
          props.setFocus("search");
          props.setMobileDescClass(
            ctx.colourMode === "light" ? "cs__desc-show" : "cs__desc-dark-show"
          );
        }}
      >
        <input type="text" placeholder="Ref#" />
        <buttom>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </buttom>
      </div>
      {props.focus !== "profile" && (
        <div
          className="navbar__profile"
          onClick={() => {
            props.setFocus("profile");
            props.setMobileDescClass(
              ctx.colourMode === "light"
                ? "cs__desc-show"
                : "cs__desc-dark-show"
            );
          }}
        >
          <FontAwesomeIcon icon={faUser} />
        </div>
      )}
      {props.focus === "profile" && (
        <div className="navbar__profile-cont focus">
          <div
            className="navbar__profile-focus"
            onClick={() => {
              props.setFocus("profile");
            }}
          >
            <FontAwesomeIcon icon={faUser} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
