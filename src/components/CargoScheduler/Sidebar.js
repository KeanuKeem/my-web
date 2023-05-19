import { useContext } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faAnglesDown,
  faAnglesUp,
} from "@fortawesome/free-solid-svg-icons";

import ColourContext from "../../store/ColourContext";

import "./Sidebar.css";

const Sidebar = (props) => {
  const ctx = useContext(ColourContext);

  return (
    <div className="sidebar">
      <div
        className={
          props.focus === "fav" ? "sidebar__cont focus" : "sidebar__cont"
        }
        onClick={() => {
          props.setFocus("fav");
          props.setMobileDescClass(
            ctx.colourMode === "light" ? "cs__desc-show" : "cs__desc-dark-show"
          );
        }}
      >
        <p>
          <FontAwesomeIcon icon={faStar} />
          Favourites
          {props.focus === "fav" ? (
            <FontAwesomeIcon icon={faAnglesUp} />
          ) : (
            <FontAwesomeIcon icon={faAnglesDown} />
          )}
        </p>
      </div>
      {props.focus === "fav" && (
        <div className="sidebar__list">
          <p>test1</p>
          <p>test2</p>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
