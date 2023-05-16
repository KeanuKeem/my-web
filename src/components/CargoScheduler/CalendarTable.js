import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import "./CalendarTable.css";

const CalendarTable = (props) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <td colspan="7" className="table-top">
            {props.focus === "month-btn" ? (
              <FontAwesomeIcon
                className="prev-month focus"
                onClick={() => {
                  props.setFocus("month-btn");
                }}
                icon={faCircleChevronLeft}
              />
            ) : (
              <FontAwesomeIcon
                className="prev-month"
                onClick={() => {
                  props.setFocus("month-btn");
                }}
                icon={faCircleChevronLeft}
              />
            )}
            May
            {props.focus === "month-btn" ? (
              <FontAwesomeIcon
                className="next-month focus"
                onClick={() => {
                  props.setFocus("month-btn");
                }}
                icon={faCircleChevronRight}
              />
            ) : (
              <FontAwesomeIcon
                className="next-month"
                onClick={() => {
                  props.setFocus("month-btn");
                }}
                icon={faCircleChevronRight}
              />
            )}
          </td>
        </tr>
        <tr>
          <td className="table-week">SUN</td>
          <td className="table-week">MON</td>
          <td className="table-week">TUE</td>
          <td className="table-week">WED</td>
          <td className="table-week">THU</td>
          <td className="table-week">FRI</td>
          <td className="table-week">SAT</td>
        </tr>
      </thead>
      <tr>
        <td className="table-day">
          <p></p>
          <div></div>
        </td>
        <td className="table-day">
          {props.focus === "table-date" ? (
            <p
              className="table-date focus"
              onClick={() => {
                props.setFocus("table-date");
              }}
            >
              1
            </p>
          ) : (
            <p
              className="table-date"
              onClick={() => {
                props.setFocus("table-date");
              }}
            >
              1
            </p>
          )}
          <div></div>
        </td>
        <td className="table-day">
          {props.focus === "table-date" ? (
            <p
              className="table-date focus"
              onClick={() => {
                props.setFocus("table-date");
              }}
            >
              2
            </p>
          ) : (
            <p
              className="table-date"
              onClick={() => {
                props.setFocus("table-date");
              }}
            >
              2
            </p>
          )}
          <div></div>
        </td>
        <td className="table-day">
          {props.focus === "table-date" ? (
            <p
              className="table-date focus"
              onClick={() => {
                props.setFocus("table-date");
              }}
            >
              3
            </p>
          ) : (
            <p
              className="table-date"
              onClick={() => {
                props.setFocus("table-date");
              }}
            >
              3
            </p>
          )}
          <div className="table-shipment">
            {props.focus === "table-item" ? (
              <p
                className="table-item focus"
                onClick={() => {
                  props.setFocus("table-item");
                }}
              >
                {"[FCL] Shipment#"}
              </p>
            ) : (
              <p
                className="table-item "
                onClick={() => {
                  props.setFocus("table-item");
                }}
              >
                {"[FCL] Shipment#"}
              </p>
            )}
          </div>
        </td>
        <td className="table-day">
          {props.focus === "table-date" ? (
            <p
              className="table-date focus"
              onClick={() => {
                props.setFocus("table-date");
              }}
            >
              4
            </p>
          ) : (
            <p
              className="table-date"
              onClick={() => {
                props.setFocus("table-date");
              }}
            >
              4
            </p>
          )}
          <div></div>
        </td>
        <td className="table-day">
          {props.focus === "table-date" ? (
            <p
              className="table-date focus"
              onClick={() => {
                props.setFocus("table-date");
              }}
            >
              5
            </p>
          ) : (
            <p
              className="table-date"
              onClick={() => {
                props.setFocus("table-date");
              }}
            >
              5
            </p>
          )}
          <div></div>
        </td>
        <td className="table-day">
          {props.focus === "table-date" ? (
            <p
              className="table-date focus"
              onClick={() => {
                props.setFocus("table-date");
              }}
            >
              6
            </p>
          ) : (
            <p
              className="table-date"
              onClick={() => {
                props.setFocus("table-date");
              }}
            >
              6
            </p>
          )}
          <div></div>
        </td>
      </tr>
    </table>
  );
};

export default CalendarTable;
