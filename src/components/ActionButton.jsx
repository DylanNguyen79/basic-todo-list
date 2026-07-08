function ActionButton({ handleUpdate, clearAll }) {
  return (
    <>
      <button onClick={handleUpdate}>Update</button>

      <button onClick={clearAll}>Clear All</button>
    </>
  );
}

export default ActionButton;
