// import PropTypes from "prop-types";

function Button({
  classNameBtn = "btn",
  color = "green",
  text = "LeButton",
  onClick = () => {
    console.log("Click");
  },
}) {
  return (
    <button className={classNameBtn} style={{ backgroundColor: color }} onClick={onClick}>
      {text}
    </button>
  );
}

// Button.propType = {
//   color: PropTypes.string,
//   text: PropTypes.string,
//   onClick: PropTypes.func,
// };

export default Button;
