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
              <>
                <button onClick={() => handleSave()}>Save</button>
                <button onClick={handleCancel}>Cancel</button>
              </>
            ) : (
              <button onClick={() => handleEdit(job)}>Edit</button>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;
