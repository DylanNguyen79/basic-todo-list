function TodoInput({ job, setJob, handleAdd, inputRef, handleEnter }) {
  return (
    <div className="input-group">
      <input
        className="todo-input"
        ref={inputRef}
        onKeyDown={handleEnter}
        value={job}
        onChange={(e) => setJob(e.target.value)}
        placeholder="Add a new task..."
      />
      <button className="add-button" onClick={handleAdd} disabled={!job.trim()}>
        Add to list
      </button>
    </div>
  );
}

export default TodoInput;
