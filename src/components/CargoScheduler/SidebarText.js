import { useContext } from "react";

import ColourContext from "../../store/ColourContext";

import "../FontColour.css";

const SidebarText = (props) => {
  const ctx = useContext(ColourContext);

  return (
    <>
      {props.focus === "fav" && (
        <li className={ctx.colourMode === "light" ? "font" : "font-dark"}>
          <h3>Favourites</h3>
          <p>User's favourite shipments will appear.</p>
          <p>Each shipment reference# will direct user to its shipment view.</p>
        </li>
      )}
    </>
  );
};

export default SidebarText;
