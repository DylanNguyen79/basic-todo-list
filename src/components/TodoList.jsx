function TodoList({
  jobs,
  handleChecked,
  editingId,
  editValue,
  setEditValue,
  handleEdit,
  handleSave,
  handleCancel,
}) {
  return (
    <>
      <ul>
        {jobs.map((job) => (
          <li className="todo-item" key={job.id}>
            <input
              className="edit-input"
              type="checkbox"
              checked={job.completed}
              onChange={() => handleChecked(job.id)}
            />
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
      </ul>
    </>
  );
}

export default TodoList;
