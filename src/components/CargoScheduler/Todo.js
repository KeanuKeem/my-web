import { useContext } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faToggleOff,
  faToggleOn,
} from "@fortawesome/free-solid-svg-icons";

import ColourContext from "../../store/ColourContext";

import "./Todo.css";

const Todo = (props) => {
  const ctx = useContext(ColourContext);

  return (
    <div className="todo">
      <div className="todo-selector">
        {props.focus === "todo-dropdown" ? (
          <div className="focus">
            <div
              className="todo-dropdown"
              onClick={() => {
                props.setFocus("todo-dropdown");
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
            className="todo-dropdown"
            onClick={() => {
              props.setFocus("todo-dropdown");
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

        {props.focus === "todo-date" ? (
          <div className="focus">
            <input
              type="date"
              className="todo-date"
              onClick={() => {
                props.setFocus("todo-date");
                props.setMobileDescClass(
                  ctx.colourMode === "light"
                    ? "cs__desc-show"
                    : "cs__desc-dark-show"
                );
              }}
            />
          </div>
        ) : (
          <input
            type="date"
            className="todo-date"
            onClick={() => {
              props.setFocus("todo-date");
              props.setMobileDescClass(
                ctx.colourMode === "light"
                  ? "cs__desc-show"
                  : "cs__desc-dark-show"
              );
            }}
          />
        )}

        {props.focus === "todo-add" ? (
          <div className="focus">
            <button
              className="todo-add"
              onClick={() => {
                props.setFocus("todo-add");
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
            className="todo-add"
            onClick={() => {
              props.setFocus("todo-add");
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
      </div>
      <div className="todo-lists">
        <div className="todo-list">
          <h2>Brokerage</h2>
          <hr></hr>
        </div>
        <div className="todo-list">
          <div className="list-fak">
            <h2>FAK</h2>
            {props.focus === "todo-toggle" ? (
              <FontAwesomeIcon
                className="focus"
                icon={faToggleOn}
                onClick={() => {
                  props.setFocus("todo-toggle");
                  props.setMobileDescClass(
                    ctx.colourMode === "light"
                      ? "cs__desc-show"
                      : "cs__desc-dark-show"
                  );
                }}
              />
            ) : (
              <FontAwesomeIcon
                icon={faToggleOff}
                onClick={() => {
                  props.setFocus("todo-toggle");
                  props.setMobileDescClass(
                    ctx.colourMode === "light"
                      ? "cs__desc-show"
                      : "cs__desc-dark-show"
                  );
                }}
              />
            )}
          </div>

          <hr></hr>
          {props.focus === "todo-shipment" ? (
            <div className="focus">
              <p
                onClick={() => {
                  props.setFocus("todo-shipment");
                  props.setMobileDescClass(
                    ctx.colourMode === "light"
                      ? "cs__desc-show"
                      : "cs__desc-dark-show"
                  );
                }}
              >
                {"[FAK] Shipment#"}
              </p>
            </div>
          ) : props.focus === "todo-toggle" ? (
            <>
              <p
                onClick={() => {
                  props.setFocus("todo-shipment");
                  props.setMobileDescClass(
                    ctx.colourMode === "light"
                      ? "cs__desc-show"
                      : "cs__desc-dark-show"
                  );
                }}
              >
                {"[FAK] (Eg)#"}
              </p>
              <p
                onClick={() => {
                  props.setFocus("todo-shipment");
                  props.setMobileDescClass(
                    ctx.colourMode === "light"
                      ? "cs__desc-show"
                      : "cs__desc-dark-show"
                  );
                }}
              >
                {"[(Eg)#] Shipment#"}
              </p>
            </>
          ) : (
            <p
              onClick={() => {
                props.setFocus("todo-shipment");
                props.setMobileDescClass(
                  ctx.colourMode === "light"
                    ? "cs__desc-show"
                    : "cs__desc-dark-show"
                );
              }}
            >
              {"[FAK] Shipment#"}
            </p>
          )}
        </div>
        <div className="todo-list">
          <h2>FCL</h2>
          <hr></hr>
        </div>
        <div className="todo-list">
          <h2>LCL</h2>
          <hr></hr>
        </div>
        <div className="todo-list">
          <h2>AIR</h2>
          <hr></hr>
        </div>
      </div>
    </div>
  );
};

export default Todo;
