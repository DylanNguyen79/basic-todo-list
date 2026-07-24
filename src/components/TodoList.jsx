import { DndContext, useDroppable, closestCorners } from "@dnd-kit/core";
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

    const activeIndex = jobs.findIndex((job) => job.id === active.id);
    const overIndex = jobs.findIndex((job) => job.id === over.id);

    setJobs(arrayMove(jobs, activeIndex, overIndex));
  };

  const handleDragOver = (e) => {
    const { active, over } = e;

    if (over === null) return;
    if (active.id === over.id) return;

    const activeJob = jobs.find((job) => job.id === active.id);
    const overJob = jobs.find((job) => job.id === over.id);
  };

  const { setNodeRef: setTodoRef } = useDroppable({ id: "todo" });
  const { setNodeRef: setInProgressRef } = useDroppable({ id: "inprogress" });
  const { setNodeRef: setDoneRef } = useDroppable({ id: "done" });

  return (
    <>
      <DndContext
        onDragEnd={handleDragEnd}
        onDragOver={handleDragOver}
        collisionDetection={closestCorners}
      >
        <div className="board">
          <SortableContext items={todoJobs.map((job) => job.id)}>
            <div className="column-job" ref={setTodoRef}>
              <h2>TODO</h2>
              <ul>
                {todoJobs.map((job) => (
                  <SortableTask
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

          <SortableContext items={inProgressJobs.map((job) => job.id)}>
            <div className="column-job" ref={setInProgressRef}>
              <h2>In Progress</h2>
              <ul>
                {inProgressJobs.map((job) => (
                  <SortableTask
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

          <SortableContext items={doneJobs.map((job) => job.id)}>
            <div className="column-job" ref={setDoneRef}>
              <h2>Done</h2>
              <ul>
                {doneJobs.map((job) => (
                  <SortableTask
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
        </div>
      </DndContext>
    </>
  );
}

export default TodoList;
