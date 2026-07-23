function Search({
  search,
  setSearch,
  suggestionJobs,
  handleSelected,
  showSuggestion,
  setShowSuggestion,
}) {
  return (
    <div className="search-wrapper">
      <input
        className="search"
        placeholder="Search task..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setShowSuggestion(true);
        }}
      />
      {showSuggestion && suggestionJobs.length > 0 && (
        <ul className="suggestion-menu">
          {suggestionJobs.map((job) => (
            <li key={job.id} onClick={() => handleSelected(job)}>
              {job.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Search;
