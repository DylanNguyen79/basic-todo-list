import { useState } from "react";
import "./App.css";

function App() {
  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState(() => {
    const getJobs = JSON.parse(localStorage.getItem("jobs"));
    return getJobs ?? [];
  });
  const [checked, setChecked] = useState([]);
  console.log(checked);

  const add = () => {
    setJobs((prev) => {
      const newList = [...prev, job];
      const storageJob = JSON.stringify(newList);
      localStorage.setItem("jobs", storageJob);
      return newList;
    });

    setJob("");
  };

  const handleChecked = (index) => {
    setChecked((prev) => {
      const isChecked = checked.includes(index);
      if (isChecked) {
        return checked.filter((item) => item !== index);
      } else {
        return [...prev, index];
      }
    });
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
      </div>
    </>
  );
}

export default App;
