function Search({ search, setSearch, suggestionJobs }) {
  return (
    <div className="search-wrapper">
      <input
        className="search"
        placeholder="Search task..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul className="suggestion-menu">
        {suggestionJobs.map((job) => (
          <li key={job.id}>{job.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Search;
