import edit from "../images/edit.svg";
import PropTypes from "prop-types";

function EditBtn({ item, clickedFunc, branch }) {
  return (
    <button
      type="button"
      className="EditBtn"
      onClick={() => {
        clickedFunc(item, branch);
      }}
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
};

export default EditBtn;
