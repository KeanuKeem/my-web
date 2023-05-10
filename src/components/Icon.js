import "./Icon.css";

const Icon = (props) => {
  return (
    <div className={props.className} onClick={props.onClick}>
      <div className="icon__inner">{props.children}</div>
      <p className="icon__name">{props.name}</p>
    </div>
  );
};

export default Icon;
