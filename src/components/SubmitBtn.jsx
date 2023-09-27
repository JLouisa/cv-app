import PropTypes from "prop-types";

function SubmitBtn({ text = "Add", classNameBtn = "btn" }) {
  return (
    <div className="eduBtnDiv">
      <button type="submit" className={classNameBtn}>
        {text}
      </button>
    </div>
  );
}

SubmitBtn.propTypes = {
  classNameBtn: PropTypes.string,
  text: PropTypes.string,
};

export { SubmitBtn };
