import { useState, useRef, useEffect } from "react";
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

  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);

  const handleAdd = () => {
    console.log("Add");
    if (!job.trim()) return;

    setJobs((prev) => {
      return [
        ...prev,
        {
          id: Date.now(),
          title: job.trim(),
          completed: false,
        },
      ];
    });

    setJob("");

    inputRef.current.focus();
  };

  const handleChecked = (id) => {
    setJobs((prev) => {
      return prev.map((job) => {
        if (job.id === id) {
          return { ...job, completed: !job.completed };
        }
        return job;
      });
    });
  };

  // const handleUpdate = () => {
  //   localStorage.setItem("checked", JSON.stringify(checked));
  // };

  const clearAll = () => {
    const isConfirm = window.confirm("Bạn có muốn xoá hết không?");

    if (isConfirm) {
      setJobs([]);
    }
  };

  const handleEnter = (e) => {
    console.log("Enter");
    if (e.nativeEvent.isComposing) return;
    if (e.key === "Enter" && job.trim()) {
      handleAdd();
    }
  };

  const handleDelete = () => {
    const deleteJobs = jobs.filter((job) => !job.completed);

    setJobs(deleteJobs);

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
        <TodoList jobs={jobs} handleChecked={handleChecked} />

        <Progress jobs={jobs} />

        <ActionButton
          // handleUpdate={handleUpdate}
          clearAll={clearAll}
          handleDelete={handleDelete}
        />
      </div>
    </>
  );
}

export default App;
