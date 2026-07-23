import { DndContext, useDroppable } from "@dnd-kit/core";
import { arrayMove, SortableContext } from "@dnd-kit/sortable";
import SortableTask from "./SortableTask";

function TodoList({
  // handleChecked,
  jobs,
  setJobs,
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
    const { active, over } = e;
    if (over === null) return;
    if (active.id === over.id) return;

    const activeJob = jobs.findIndex((job) => job.id === active.id);
    const overJob = jobs.findIndex((job) => job.id === over.id);

    setJobs(arrayMove(jobs, activeJob, overJob));
  };

  const { setNodeRef: setTodoRef } = useDroppable({ id: "todo" });
  const { setNodeRef: setInProgressRef } = useDroppable({ id: "inprogress" });
  const { setNodeRef: setDoneRef } = useDroppable({ id: "done" });

  return (
    <>
      <DndContext onDragEnd={handleDragEnd}>
        <div className="board">
          <SortableContext items={todoJobs.map((job) => job.id)}>
            <div className="column-job" ref={setTodoRef}>
              <h2>TODO</h2>
              <ul>
                {todoJobs.map((job) => (
                  <SortableTask
                    key={job.id}
                    job={job}
                    editingId={editingId}
                    editValue={editValue}
                    setEditValue={setEditValue}
                    handleEdit={handleEdit}
                    handleSave={handleSave}
                    handleCancel={handleCancel}
                    selectedJobId={selectedJobId}
                  />
                ))}
              </ul>
            </div>
          </SortableContext>

          <div className="column-job" ref={setInProgressRef}>
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

          <div className="column-job" ref={setDoneRef}>
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
