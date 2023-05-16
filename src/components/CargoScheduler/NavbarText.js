const NavbarText = (props) => {
  return (
    <>
      {props.focus === "search" && (
        <li>
          <h3>Search</h3>
          <p>
            User can search based on reference# to get shipment details quicker.
          </p>
        </li>
      )}
      {props.focus === "profile" && (
        <li>
          <h3>Profile</h3>
          <p>
            User can edit their profile settings:
            <p>- User details</p>
            <p>- Display colours</p>
            <p>- Logout</p>
          </p>
        </li>
      )}
    </>
  );
};

export default NavbarText;
