import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";

const TodoText = (props) => {
  return (
    <>
      {props.focus === "todo-dropdown" && (
        <li>
          <h3>Dropdown</h3>
          <p>User can sort the shipments based on Shipment type selection.</p>
        </li>
      )}
      {props.focus === "todo-date" && (
        <li>
          <h3>Date</h3>
          <p>User can sort the shipments based on Arrival/Departure date.</p>
        </li>
      )}
      {props.focus === "todo-add" && (
        <li>
          <h3>Add Button</h3>
          <p>User can also insert the shipment details from To Do List View.</p>
          <p>Added shipment will be shown on box below where it belongs.</p>
        </li>
      )}
      {props.focus === "todo-shipment" && (
        <li>
          <h3>Shipment details</h3>
          <p>
            User can go directly to a Shipment Modal to view its shipment
            details.
          </p>
        </li>
      )}
      {props.focus === "todo-toggle" && (
        <li>
          <h3>
            <FontAwesomeIcon icon={faLightbulb} />{" "}
            FAK Toggle {"(new)"}
          </h3>
          <p>
            User will be able to see the list of shipments in FAK shipment
            directly in the box below.
          </p>
        </li>
      )}
    </>
  );
};

export default TodoText;
