import { useContext } from "react";

import ColourContext from "../../store/ColourContext";

import "../FontColour.css";

const CalendarText = (props) => {
  const ctx = useContext(ColourContext);

  return (
    <>
      {props.focus === "calendar-dropdown" && (
        <li className={ctx.colourMode === "light" ? "font" : "font-dark"}>
          <h3>Dropdown</h3>
          <p>
            Added Shipments will be shown based on selected dropdown options:
          </p>
          <p>- Type of Shipment Mode</p>
          <p>- Type of Delivery Mode</p>
          <p>- Month</p>
          <p>- Year</p>
        </li>
      )}
      {props.focus === "calendar-add-btn" && (
        <li className={ctx.colourMode === "light" ? "font" : "font-dark"}>
          <h3>Add Button</h3>
          <p>User can enter and add shipment details to manage.</p>
          <p>Once succesfully added, it will show on calendar accordingly.</p>
        </li>
      )}
      {props.focus === "calendar-vessel-btn" && (
        <li className={ctx.colourMode === "light" ? "font" : "font-dark"}>
          <h3>Update Vessel Schedule Button</h3>
          <p>User can update vessel schedule for arrival and departure.</p>
          <p>User can update for each type of shipment mode selected.</p>
        </li>
      )}
      {props.focus === "month-btn" && (
        <li className={ctx.colourMode === "light" ? "font" : "font-dark"}>
          <h3>Month Change Button</h3>
          <p>
            Button will trigger and change month either previous or next month.
          </p>
        </li>
      )}
      {props.focus === "table-date" && (
        <li className={ctx.colourMode === "light" ? "font" : "font-dark"}>
          <h3>Date</h3>
          <p>
            User can go direclty to To Do Page with clicked date as default.
          </p>
          <p>
            This is to help user to see all the related shipments in clearer
            view for this specific date.
          </p>
        </li>
      )}
      {props.focus === "table-item" && (
        <li className={ctx.colourMode === "light" ? "font" : "font-dark"}>
          <h3>Shipment</h3>
          <p>
            User can go directly to a Shipment Modal to view its shipment
            details.
          </p>
        </li>
      )}
    </>
  );
};

export default CalendarText;
