import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

import CalendarTable from "./CalendarTable";

import "./Calendar.css";

const Calendar = (props) => {
  return (
    <div className="calendar">
      <div className="selector">
        {props.focus === "calendar-dropdown" ? (
          <div className="focus">
            <div
              className="dropdown"
              onClick={() => {
                props.setFocus("calendar-dropdown");
              }}
            >
              <h2>All</h2>
              <FontAwesomeIcon icon={faCaretDown} />
            </div>
          </div>
        ) : (
          <div
            className="dropdown"
            onClick={() => {
              props.setFocus("calendar-dropdown");
            }}
          >
            <h2>All</h2>
            <FontAwesomeIcon icon={faCaretDown} />
          </div>
        )}
        {props.focus === "calendar-dropdown" ? (
          <div className="focus">
            <div
              className="dropdown"
              onClick={() => {
                props.setFocus("calendar-dropdown");
              }}
            >
              <h2>Type</h2>
              <FontAwesomeIcon icon={faCaretDown} />
            </div>
          </div>
        ) : (
          <div
            className="dropdown"
            onClick={() => {
              props.setFocus("calendar-dropdown");
            }}
          >
            <h2>Type</h2>
            <FontAwesomeIcon icon={faCaretDown} />
          </div>
        )}
        {props.focus === "calendar-dropdown" ? (
          <div className="focus">
            <div
              className="dropdown"
              onClick={() => {
                props.setFocus("calendar-dropdown");
              }}
            >
              <h2>May</h2>
              <FontAwesomeIcon icon={faCaretDown} />
            </div>
          </div>
        ) : (
          <div
            className="dropdown"
            onClick={() => {
              props.setFocus("calendar-dropdown");
            }}
          >
            <h2>May</h2>
            <FontAwesomeIcon icon={faCaretDown} />
          </div>
        )}
        {props.focus === "calendar-dropdown" ? (
          <div className="focus">
            <div
              className="dropdown"
              onClick={() => {
                props.setFocus("calendar-dropdown");
              }}
            >
              <h2>2023</h2>
              <FontAwesomeIcon icon={faCaretDown} />
            </div>
          </div>
        ) : (
          <div
            className="dropdown"
            onClick={() => {
              props.setFocus("calendar-dropdown");
            }}
          >
            <h2>2023</h2>
            <FontAwesomeIcon icon={faCaretDown} />
          </div>
        )}

        {props.focus === "calendar-add-btn" ? (
          <div className="focus">
            <button
              className="button"
              onClick={() => {
                props.setFocus("calendar-add-btn");
              }}
            >
              Add
            </button>
          </div>
        ) : (
          <button
            className="button"
            onClick={() => {
              props.setFocus("calendar-add-btn");
            }}
          >
            Add
          </button>
        )}
        {props.focus === "calendar-vessel-btn" ? (
          <div className="focus">
            <button
              className="button"
              onClick={() => {
                props.setFocus("calendar-vessel-btn");
              }}
            >
              Vessel Schedule Update
            </button>
          </div>
        ) : (
          <button
            className="button"
            onClick={() => {
              props.setFocus("calendar-vessel-btn");
            }}
          >
            Vessel Schedule Update
          </button>
        )}
      </div>
      <div className="calendar-table">
        <CalendarTable focus={props.focus} setFocus={props.setFocus} />
      </div>
    </div>
  );
};

export default Calendar;
