import { useContext } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import ColourContext from "../../store/ColourContext";

import "./Shipment.css";

const Shipment = (props) => {
  const ctx = useContext(ColourContext);

  return (
    <div className="shipment">
      <div className="shipment-top">
        <h2>Shipment#</h2>
        {props.focus === "shipment-star" ? (
          <FontAwesomeIcon
            icon={faStar}
            className="shipment-star focus"
            onClick={() => {
              props.setFocus("shipment-star");
              props.setMobileDescClass(
                ctx.colourMode === "light"
                  ? "cs__desc-show"
                  : "cs__desc-dark-show"
              );
            }}
          />
        ) : (
          <FontAwesomeIcon
            icon={faStar}
            className="shipment-star"
            onClick={() => {
              props.setFocus("shipment-star");
              props.setMobileDescClass(
                ctx.colourMode === "light"
                  ? "cs__desc-show"
                  : "cs__desc-dark-show"
              );
            }}
          />
        )}
        {props.focus === "shipment-check" ? (
          <>
            <div
              className="shipment-check focus"
              onClick={() => {
                props.setFocus("shipment-check");
                props.setMobileDescClass(
                  ctx.colourMode === "light"
                    ? "cs__desc-show"
                    : "cs__desc-dark-show"
                );
              }}
            >
              <p>MBL Surrendered:</p>
              <input type="checkbox" />
            </div>
            <div
              className="shipment-check focus"
              onClick={() => {
                props.setFocus("shipment-check");
                props.setMobileDescClass(
                  ctx.colourMode === "light"
                    ? "cs__desc-show"
                    : "cs__desc-dark-show"
                );
              }}
            >
              <p>HBL Surrendered:</p>
              <input type="checkbox" />
            </div>
            <div
              className="shipment-check focus"
              onClick={() => {
                props.setFocus("shipment-check");
                props.setMobileDescClass(
                  ctx.colourMode === "light"
                    ? "cs__desc-show"
                    : "cs__desc-dark-show"
                );
              }}
            >
              <p>Shipment on Hold:</p>
              <input type="checkbox" />
            </div>
          </>
        ) : (
          <>
            <div
              className="shipment-check"
              onClick={() => {
                props.setFocus("shipment-check");
                props.setMobileDescClass(
                  ctx.colourMode === "light"
                    ? "cs__desc-show"
                    : "cs__desc-dark-show"
                );
              }}
            >
              <p>MBL Surrendered:</p>
              <input type="checkbox" />
            </div>
            <div
              className="shipment-check"
              onClick={() => {
                props.setFocus("shipment-check");
                props.setMobileDescClass(
                  ctx.colourMode === "light"
                    ? "cs__desc-show"
                    : "cs__desc-dark-show"
                );
              }}
            >
              <p>HBL Surrendered:</p>
              <input type="checkbox" />
            </div>
            <div
              className="shipment-check"
              onClick={() => {
                props.setFocus("shipment-check");
                props.setMobileDescClass(
                  ctx.colourMode === "light"
                    ? "cs__desc-show"
                    : "cs__desc-dark-show"
                );
              }}
            >
              <p>Shipment on Hold:</p>
              <input type="checkbox" />
            </div>
          </>
        )}
        {props.focus === "shipment-save" ? (
          <div className="focus">
            <button
              className="shipment-save"
              onClick={() => {
                props.setFocus("shipment-save");
                props.setMobileDescClass(
                  ctx.colourMode === "light"
                    ? "cs__desc-show"
                    : "cs__desc-dark-show"
                );
              }}
            >
              Save
            </button>
          </div>
        ) : (
          <button
            className="shipment-save"
            onClick={() => {
              props.setFocus("shipment-save");
              props.setMobileDescClass(
                ctx.colourMode === "light"
                  ? "cs__desc-show"
                  : "cs__desc-dark-show"
              );
            }}
          >
            Save
          </button>
        )}
      </div>
      <div className="shipment-bottom">
        {props.focus === "shipment-check" ? (
          <div className="shipment-left focus">
            <div className="shipment-dtr">
              <p>Domestic Tranfer Request:</p>
              <input type="checkbox" />
            </div>
            <p>16/05/2023</p>
          </div>
        ) : (
          <div
            className="shipment-left"
            onClick={() => {
              props.setFocus("shipment-check");
              props.setMobileDescClass(
                ctx.colourMode === "light"
                  ? "cs__desc-show"
                  : "cs__desc-dark-show"
              );
            }}
          >
            <div className="shipment-dtr">
              <p>Domestic Tranfer Request:</p>
              <input type="checkbox" />
            </div>
            <p>16/05/2023</p>
          </div>
        )}
        <div className="shipment-right">
          <div className="shipment-right-top">
            <p>Checklist:</p>
            {props.focus === "shipment-add" ? (
              <div className="focus">
                <button>+</button>
              </div>
            ) : (
              <button
                onClick={() => {
                  props.setFocus("shipment-add");
                  props.setMobileDescClass(
                    ctx.colourMode === "light"
                      ? "cs__desc-show"
                      : "cs__desc-dark-show"
                  );
                }}
              >
                +
              </button>
            )}
          </div>
          {props.focus === "shipment-checklist" ? (
            <div className="shipment-checklist focus">
              <div className="shipment-checklist-left">
                <input type="checkbox" />
                <p>Arrival Notice:</p>
              </div>
              <p>16/05/2023</p>
            </div>
          ) : props.focus === "shipment-add" ? (
            <div
              className="shipment-checklist-add"
              onClick={() => {
                props.setFocus("shipment-checklist");
                props.setMobileDescClass(
                  ctx.colourMode === "light"
                    ? "cs__desc-show"
                    : "cs__desc-dark-show"
                );
              }}
            >
              <p className="shipment-fak">Shipment#</p>
            </div>
          ) : (
            <div
              className="shipment-checklist"
              onClick={() => {
                props.setFocus("shipment-checklist");
                props.setMobileDescClass(
                  ctx.colourMode === "light"
                    ? "cs__desc-show"
                    : "cs__desc-dark-show"
                );
              }}
            >
              <div className="shipment-checklist-left">
                <input type="checkbox" />
                <p>Arrival Notice:</p>
              </div>
              <p>16/05/2023</p>
            </div>
          )}
        </div>
      </div>
      <div className="shipment-buttons">
        <div className="shipment-btn-cont">
          {props.focus === "shipment-edit" ? (
            <div className="focus">
              <button className="shipment-edit">Edit</button>
            </div>
          ) : (
            <button
              className="shipment-edit"
              onClick={() => {
                props.setFocus("shipment-edit");
                props.setMobileDescClass(
                  ctx.colourMode === "light"
                    ? "cs__desc-show"
                    : "cs__desc-dark-show"
                );
              }}
            >
              Edit
            </button>
          )}
          {props.focus === "shipment-delete" ? (
            <div className="focus">
              <button className="shipment-delete">Delete</button>
            </div>
          ) : (
            <button
              className="shipment-delete"
              onClick={() => {
                props.setFocus("shipment-delete");
                props.setMobileDescClass(
                  ctx.colourMode === "light"
                    ? "cs__desc-show"
                    : "cs__desc-dark-show"
                );
              }}
            >
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shipment;
