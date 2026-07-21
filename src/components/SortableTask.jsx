function SortableTask({
  editingId,
  editValue,
  setEditValue,
  handleEdit,
  handleSave,
  handleCancel,
  todoJobs,
  inProgressJobs,
  doneJobs,
  selectedJobId,
}) {
  return (
    <>
      {todoJobs.map((job) => (
        <li
          className={
            job.id === selectedJobId ? "todo-item selected" : "todo-item"
          }
          key={job.id}
        >
          {editingId === job.id ? (
            <input
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
            />
          ) : (
            <span className="todo-title">{job.title}</span>
          )}
          {editingId === job.id ? (
            <div className="save-cancel-button">
              <button
                className="save-button"
                onClick={handleSave}
                disabled={!editValue.trim()}
              >
                Save
              </button>
              <button className="cancel-button" onClick={handleCancel}>
                Cancel
              </button>
            </div>
          ) : (
            <button className="edit-button" onClick={() => handleEdit(job)}>
              Edit
            </button>
          )}
        </li>
      ))}
    </>
  );
}

export default SortableTask;
