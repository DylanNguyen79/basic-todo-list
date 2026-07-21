import { DndContext } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";
import SortableTask from "./SortableTask";

function TodoList({
  // jobs,
  // handleChecked,
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
  const handleDragEnd = (e) => {
    console.log(e);
  };

  return (
    <>
      <DndContext onDragEnd={handleDragEnd}>
        <div className="board">
          <SortableContext items={todoJobs.map((job) => job.id)}>
            <div className="column-job">
              <h2>TODO</h2>
              <ul>
                {todoJobs.map((job) => (
                  <SortableTask />
                ))}
              </ul>
            </div>
          </SortableContext>

          <div className="column-job">
            <h2>In Progress</h2>
            <ul>
              {inProgressJobs.map((job) => (
                <li className="todo-item" key={job.id}>
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
                    <button
                      className="edit-button"
                      onClick={() => handleEdit(job)}
                    >
                      Edit
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="column-job">
            <h2>Done</h2>
            <ul>
              {doneJobs.map((job) => (
                <li className="todo-item" key={job.id}>
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
                    <button
                      className="edit-button"
                      onClick={() => handleEdit(job)}
                    >
                      Edit
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </DndContext>
    </>
  );
}

export default TodoList;
