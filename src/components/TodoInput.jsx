function TodoInput({ job, setJob, handleAdd, inputRef, handleEnter }) {
  return (
    <>
      <input
        ref={inputRef}
        onKeyDown={handleEnter}
        style={{ padding: "10px" }}
        value={job}
        onChange={(e) => setJob(e.target.value)}
      />
      <button style={{ padding: "10px" }} onClick={handleAdd} disabled={!job}>
        Add to list
      </button>
    </>
  );
}

export default TodoInput;
