import { useState, useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef();
  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState(() => {
    const getJobs = JSON.parse(localStorage.getItem("jobs"));
    return getJobs ?? [];
  });
  const [checked, setChecked] = useState(() => {
    const getChecked = JSON.parse(localStorage.getItem("checked"));
    return getChecked ?? [];
  });
  console.log(checked);

  const add = () => {
    setJobs((prev) => {
      const newList = [...prev, job];
      const storageJob = JSON.stringify(newList);
      localStorage.setItem("jobs", storageJob);
      return newList;
    });

    setJob("");

    inputRef.current.focus();
  };

  const handleChecked = (index) => {
    setChecked((prev) => {
      const isChecked = prev.includes(index);
      if (isChecked) {
        return prev.filter((item) => item !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  const handleUpdate = () => {
    localStorage.setItem("checked", JSON.stringify(checked));
  };

  const clearAll = () => {
    const isConfirm = window.confirm("Bạn có muốn xoá hết không?");

    if (isConfirm) {
      setJobs([]);
      setChecked([]);
      localStorage.removeItem("jobs");
      localStorage.removeItem("checked");
    }
  };

  const handleEnter = (e) => {
    if (e.key === "Enter" && job) {
      add();
    }
  };

  return (
    <>
      <div style={{ padding: "30" }}>
        <input
          ref={inputRef}
          onKeyDown={handleEnter}
          style={{ padding: "10px" }}
          value={job}
          onChange={(e) => setJob(e.target.value)}
        />
        <button style={{ padding: "10px" }} onClick={add} disabled={!job}>
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

        <p>
          Completed: {checked.length}/{jobs.length}
        </p>

        <p>Progress: {(checked.length / jobs.length) * 100}%</p>

        <button onClick={handleUpdate}>Update</button>

        <button onClick={clearAll}>Clear All</button>
      </div>
    </>
  );
}

export default App;
