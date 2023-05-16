import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faToggleOff,
  faToggleOn,
} from "@fortawesome/free-solid-svg-icons";

import "./Todo.css";

const Todo = (props) => {
  return (
    <div className="todo">
      <div className="todo-selector">
        {props.focus === "todo-dropdown" ? (
          <div className="focus">
            <div
              className="todo-dropdown"
              onClick={() => {
                props.setFocus("todo-dropdown");
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
              }}
            />
          </div>
        ) : (
          <input
            type="date"
            className="todo-date"
            onClick={() => {
              props.setFocus("todo-date");
            }}
          />
        )}

        {props.focus === "todo-add" ? (
          <div className="focus">
            <button
              className="todo-add"
              onClick={() => {
                props.setFocus("todo-add");
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
                }}
              />
            ) : (
              <FontAwesomeIcon
                icon={faToggleOff}
                onClick={() => {
                  props.setFocus("todo-toggle");
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
                }}
              >
                {"[FAK] (Eg)#"}
              </p>
              <p
                onClick={() => {
                  props.setFocus("todo-shipment");
                }}
              >
                {"[(Eg)#] Shipment#"}
              </p>
            </>
          ) : (
            <p
              onClick={() => {
                props.setFocus("todo-shipment");
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
