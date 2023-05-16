import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faAnglesDown,
  faAnglesUp,
} from "@fortawesome/free-solid-svg-icons";

import "./Sidebar.css";

const Sidebar = (props) => {
  return (
    <div className="sidebar">
      <div
        className={
          props.focus === "fav" ? "sidebar__cont focus" : "sidebar__cont"
        }
        onClick={() => {
          props.setFocus("fav");
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
