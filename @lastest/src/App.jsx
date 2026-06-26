import { useState } from "react";
import "./App.css";

function App() {
  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState(() => {
    const getJobs = JSON.parse(localStorage.getItem("jobs"));
    console.log(getJobs);
    return getJobs ?? [];
  });

  const add = () => {
    setJobs((prev) => {
      const newList = [...prev, job];
      const storageJob = JSON.stringify(newList);
      localStorage.setItem("jobs", storageJob);
      return newList;
    });

    setJob("");
  };

  return (
    <>
      <div style={{ padding: "30" }}>
        <input
          style={{ padding: "10px" }}
          value={job}
          onChange={(e) => setJob(e.target.value)}
        />
        <button style={{ padding: "10px" }} onClick={add}>
          Add to list
        </button>
        <ul>
          {jobs.map((job, index) => (
            <li key={index}> {job} </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
