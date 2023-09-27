import deleteBtn from "../images/delete.svg";
import PropTypes from "prop-types";

function DeleteBtn({ item, onEditPracExp }) {
  const deletedFunc = () => {
    let newItem = { ...item };
    newItem.deleted = true;
    onEditPracExp(item, newItem);
  };
  return (
    <button
      type="button"
      className="deleteBtn"
      onClick={() => {
        item.deleted = !item.deleted;
        deletedFunc();
      }}
    >
      <img src={deleteBtn} alt="Delete button" className="deleteImg" />
    </button>
  );
}

DeleteBtn.propTypes = {
  item: PropTypes.object,
  onEditPracExp: PropTypes.func,
};

export default DeleteBtn;
