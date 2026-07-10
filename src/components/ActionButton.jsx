function ActionButton({ clearAll, handleDelete }) {
  return (
    <>
      <button onClick={handleDelete}>Delete</button>

      <button onClick={clearAll}>Clear All</button>
    </>
  );
}

export default ActionButton;
