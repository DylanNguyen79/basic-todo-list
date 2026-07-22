import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

function SortableTask({
  job,
  editingId,
  editValue,
  setEditValue,
  handleEdit,
  handleSave,
  handleCancel,
  selectedJobId,
}) {
  const { setNodeRef, listeners, attributes, transform, transition } =
    useSortable({ id: job.id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <>
      <li
        className={
          job.id === selectedJobId ? "todo-item selected" : "todo-item"
        }
        key={job.id}
        ref={setNodeRef}
        {...listeners}
        {...attributes}
        style={style}
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
    </>
  );
}

export default SortableTask;
