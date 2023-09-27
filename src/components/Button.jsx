import PropTypes from "prop-types";

function Button({
  typeBtn = "button",
  classNameBtn = "btn",
  color = "green",
  text = "LeButton",
  onClick = () => {
    console.log("Click");
  },
}) {
  return (
    <button type={typeBtn} className={classNameBtn} style={{ backgroundColor: color }} onClick={onClick}>
      {text}
    </button>
  );
}

Button.propTypes = {
  classNameBtn: PropTypes.string,
  color: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
  typeBtn: PropTypes.string,
};

export default Button;
