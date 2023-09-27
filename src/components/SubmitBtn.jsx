import PropTypes from "prop-types";

function SubmitBtn({ text = "Add", classNameBtn = "btn", color = "darkgreen" }) {
  return (
    <div className="eduBtnDiv">
      <button type="submit" className={classNameBtn} style={{ backgroundColor: color }}>
        {text}
      </button>
    </div>
  );
}

SubmitBtn.propTypes = {
  classNameBtn: PropTypes.string,
  text: PropTypes.string,
  color: PropTypes.string,
};

export { SubmitBtn };
