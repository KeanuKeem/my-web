import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";

import "./Navbar.css";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <div
        className={
          props.focus === "search" ? "navbar__search focus" : "navbar__search"
        }
        onClick={() => {
          props.setFocus("search");
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
