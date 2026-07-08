function TodoList({ jobs, checked, handleChecked }) {
  return (
    <>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={checked.includes(index)}
              onChange={() => handleChecked(index)}
            />
            {job}
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;
