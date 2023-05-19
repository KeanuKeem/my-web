import { useContext } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

import CalendarTable from "./CalendarTable";
import ColourContext from "../../store/ColourContext";

import "./Calendar.css";

const Calendar = (props) => {
  const ctx = useContext(ColourContext);

  return (
    <div className="calendar">
      <div className="selector">
        {props.focus === "calendar-dropdown" ? (
          <div className="focus">
            <div
              className="dropdown"
              onClick={() => {
                props.setFocus("calendar-dropdown");
                props.setMobileDescClass(
                  ctx.colourMode === "light"
                    ? "cs__desc-show"
                    : "cs__desc-dark-show"
                );
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
              props.setMobileDescClass(
                ctx.colourMode === "light"
                  ? "cs__desc-show"
                  : "cs__desc-dark-show"
              );
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
                props.setMobileDescClass(
                  ctx.colourMode === "light"
                    ? "cs__desc-show"
                    : "cs__desc-dark-show"
                );
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
              props.setMobileDescClass(
                ctx.colourMode === "light"
                  ? "cs__desc-show"
                  : "cs__desc-dark-show"
              );
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
                props.setMobileDescClass(
                  ctx.colourMode === "light"
                    ? "cs__desc-show"
                    : "cs__desc-dark-show"
                );
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
              props.setMobileDescClass(
                ctx.colourMode === "light"
                  ? "cs__desc-show"
                  : "cs__desc-dark-show"
              );
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
                props.setMobileDescClass(
                  ctx.colourMode === "light"
                    ? "cs__desc-show"
                    : "cs__desc-dark-show"
                );
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
              props.setMobileDescClass(
                ctx.colourMode === "light"
                  ? "cs__desc-show"
                  : "cs__desc-dark-show"
              );
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
                props.setMobileDescClass(
                  ctx.colourMode === "light"
                    ? "cs__desc-show"
                    : "cs__desc-dark-show"
                );
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
              props.setMobileDescClass(
                ctx.colourMode === "light"
                  ? "cs__desc-show"
                  : "cs__desc-dark-show"
              );
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
                props.setMobileDescClass(
                  ctx.colourMode === "light"
                    ? "cs__desc-show"
                    : "cs__desc-dark-show"
                );
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
              props.setMobileDescClass(
                ctx.colourMode === "light"
                  ? "cs__desc-show"
                  : "cs__desc-dark-show"
              );
            }}
          >
            Vessel Schedule Update
          </button>
        )}
      </div>
      <div className="calendar-table">
        <CalendarTable
          focus={props.focus}
          setFocus={props.setFocus}
          setMobileDescClass={props.setMobileDescClass}
          colourMode={ctx.colourMode}
        />
      </div>
    </div>
  );
};

export default Calendar;
