function TodoInput({ job, setJob, add, inputRef, handleEnter }) {
  return (
    <>
      <input
        ref={inputRef}
        onKeyDown={handleEnter}
        style={{ padding: "10px" }}
        value={job}
        onChange={(e) => setJob(e.target.value)}
      />
      <button style={{ padding: "10px" }} onClick={add} disabled={!job}>
        Add to list
      </button>
    </>
  );
}

export default TodoInput;
