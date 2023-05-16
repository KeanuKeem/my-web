const SidebarText = (props) => {
  return (
    <>
      {props.focus === "fav" && (
        <li>
          <h3>Favourites</h3>
          <p>User's favourite shipments will appear.</p>
          <p>Each shipment reference# will direct user to its shipment view.</p>
        </li>
      )}
    </>
  );
};

export default SidebarText;
