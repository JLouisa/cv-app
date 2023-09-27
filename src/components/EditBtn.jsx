import edit from "../images/edit.svg";
import PropTypes from "prop-types";

function EditBtn({ item, setIsActive }) {
  return (
    <button
      type="button"
      className="EditBtn"
      onClick={() => {
        item.selected = !item.selected;
        setIsActive(item.selected);
      }}
    >
      <img src={edit} alt="Edit button" />
    </button>
  );
}

EditBtn.propTypes = {
  onclick: PropTypes.func,
  item: PropTypes.object,
  setIsActive: PropTypes.func,
};

export default EditBtn;
