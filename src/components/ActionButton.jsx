function ActionButton({ handleUpdate, clearAll, handleDelete }) {
  return (
    <>
      {/* <button onClick={handleUpdate}>Update</button> */}

      <button onClick={handleDelete}>Delete</button>

      <button onClick={clearAll}>Clear All</button>
    </>
  );
}

export default ActionButton;
