function Filter({ filter, setFilter }) {
  return (
    <select
      className="filter"
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
    >
      <option value={"All"}>All</option>
      <option value={"Active"}>Active</option>
      <option value={"Completed"}>Completed</option>
    </select>
  );
}

export default Filter;
