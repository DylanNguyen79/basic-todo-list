function ActionButton({ clearAll, handleDelete }) {
  return (
    <div className="action-button">
      <button onClick={handleDelete}>Delete</button>

      <button onClick={clearAll}>Clear All</button>
    </div>
  );
}

export default ActionButton;
