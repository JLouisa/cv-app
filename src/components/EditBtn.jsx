import edit from "../images/edit.svg";
import PropTypes from "prop-types";

function EditBtn({ item, clickedFunc, branch, color = "white" }) {
  return (
    <button
      type="button"
      className="EditBtn"
      onClick={() => {
        clickedFunc(item, branch);
      }}
      style={{ backgroundColor: color }}
    >
      <img src={edit} alt="Edit button" />
    </button>
  );
}

EditBtn.propTypes = {
  onclick: PropTypes.func,
  item: PropTypes.object,
  clickedFunc: PropTypes.func,
  branch: PropTypes.array,
  color: PropTypes.string,
};

export default EditBtn;
