const ShipmentText = (props) => {
  return (
    <>
      {props.focus === "shipment-star" && (
        <li>
          <h3>Favourite Shipment</h3>
          <p>
            User can add current shipment into their favourites array after it
            is saved.
          </p>
        </li>
      )}
      {props.focus === "shipment-check" && (
        <li>
          <h3>Shipment Check-boxes</h3>
          <p>User can change current state of handing shipment.</p>
          <p>
            Each state will show the date when it was/is saved, to indicate user
            to know when the current action was/is done.
          </p>
        </li>
      )}
      {props.focus === "shipment-save" && (
        <li>
          <h3>Save current Shipment state</h3>
          <p>User can save current data.</p>
          <p>This button only shows up when there is any change.</p>
        </li>
      )}
      {props.focus === "shipment-add" && (
        <li>
          <h3>FAK shipment add button</h3>
          <p>User can add LCL shipment inside FAK shipment.</p>
          <p>Added shipment will be appeard in the checklist box only.</p>
          <p>This button is only visible in FAK shipment modal view.</p>
        </li>
      )}
      {props.focus === "shipment-checklist" && (
        <li>
          <h3>Checklist State</h3>
          <p>User can change each handling steps state.</p>
          <p>
            The saved date wiill appear once saved for user to know when it was
            completed.
          </p>
        </li>
      )}
      {props.focus === "shipment-edit" && (
        <li>
          <h3>Edit Button</h3>
          <p>User can edit current shipment datas:</p>
          <p>Shipment details, as well as the checklist handling steps.</p>
        </li>
      )}
      {props.focus === "shipment-delete" && (
        <li>
          <h3>Delete Button</h3>
          <p>User can delete current shipment data.</p>
          <p>New pop up will appear for user to re-confirm.</p>
        </li>
      )}
    </>
  );
};

export default ShipmentText;
