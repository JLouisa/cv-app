import edit from "../images/edit.svg";
import PropTypes from "prop-types";

function EditBtn({ item, setIsActive }) {
  return (
    <button
      onClick={() => {
        item.selected = !item.selected;
        setIsActive(item.selected);
      }}
    >
      <img src={edit} alt="Edit button" className="EditBtn" />
    </button>
  );
}

EditBtn.propTypes = {
  onclick: PropTypes.func,
  item: PropTypes.object,
  setIsActive: PropTypes.func,
};

export { EditBtn };
