function ActionButton({ clearAll, handleDelete }) {
  return (
    <div className="action-button">
      <button className="delete-button" onClick={handleDelete}>
        Delete
      </button>

      <button className="clear-button" onClick={clearAll}>
        Clear All
      </button>
    </div>
  );
}

export default ActionButton;
