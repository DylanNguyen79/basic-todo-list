function TodoList({ jobs, handleChecked }) {
  return (
    <>
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            <input
              type="checkbox"
              checked={job.completed}
              onChange={() => handleChecked(job.id)}
            />
            {job.title}
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;
