import { useState, useRef } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import Progress from "./components/Progress";
import ActionButton from "./components/ActionButton";

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

  const handleAdd = () => {
    console.log("Add");
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
    console.log("Enter");
    if (e.key === "Enter" && job) {
      handleAdd();
    }
  };

  const handleDelete = () => {
    const deleteJobs = jobs.filter((job, index) => !checked.includes(index));

    setJobs(deleteJobs);
    setChecked([]);

    localStorage.setItem("jobs", JSON.stringify(deleteJobs));
    localStorage.setItem("checked", JSON.stringify([]));
  };

  return (
    <>
      <div style={{ padding: "30" }}>
        <TodoInput
          job={job}
          setJob={setJob}
          handleAdd={handleAdd}
          inputRef={inputRef}
          handleEnter={handleEnter}
        />
        <TodoList jobs={jobs} checked={checked} handleChecked={handleChecked} />

        <Progress checked={checked} jobs={jobs} />

        <ActionButton
          handleUpdate={handleUpdate}
          clearAll={clearAll}
          handleDelete={handleDelete}
        />
      </div>
    </>
  );
}

export default App;
