import deleteBtn from "../images/delete.svg";
import PropTypes from "prop-types";

function DeleteBtn({ item, setIsActive }) {
  return (
    <button
      className="deleteBtn"
      onClick={() => {
        item.deleted = !item.deleted;
        setIsActive(item.selected);
      }}
    >
      <img src={deleteBtn} alt="Delete button" className="deleteImg" />
    </button>
  );
}

DeleteBtn.propTypes = {
  onclick: PropTypes.func,
  item: PropTypes.object,
  setIsActive: PropTypes.func,
};

export { DeleteBtn };
