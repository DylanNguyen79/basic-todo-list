import { useState, useRef, useEffect } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import Progress from "./components/Progress";
import ActionButton from "./components/ActionButton";
import Search from "./components/Search";

function App() {
  const inputRef = useRef();
  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState(() => {
    const getJobs = JSON.parse(localStorage.getItem("jobs"));
    return getJobs ?? [];
  });
  const [editingId, setEditingId] = useState(null);
  const [editValue, setEditValue] = useState("");
  // const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedJobId, setSelectedJobId] = useState(null);
  const [showSuggestion, setShowSuggestion] = useState(false);

  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);

  const handleAdd = () => {
    if (!job.trim()) return;

    setJobs((prev) => {
      return [
        ...prev,
        {
          id: Date.now(),
          title: job.trim(),
          status: "todo",
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

  const clearAll = () => {
    const isConfirm = window.confirm("Bạn có muốn xoá hết không?");

    if (isConfirm) {
      setJobs([]);
    }
  };

  const handleEnter = (e) => {
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

  const handleEdit = (job) => {
    setEditingId(job.id);
    setEditValue(job.title);
  };

  const handleSave = () => {
    if (!editValue.trim()) return;

    setJobs((prev) => {
      return prev.map((job) => {
        if (job.id === editingId) {
          return { ...job, title: editValue.trim() };
        }
        return job;
      });
    });
    setEditingId(null);
    setEditValue("");
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditValue("");
  };

  // let filteredJobs;
  // if (filter === "All") {
  //   filteredJobs = jobs;
  // }
  // if (filter === "Active") {
  //   filteredJobs = jobs.filter((job) => !job.completed);
  // }
  // if (filter === "Completed") {
  //   filteredJobs = jobs.filter((job) => job.completed);
  // }

  let todoJobs = jobs.filter((job) => job.status === "todo");
  let inProgressJobs = jobs.filter((job) => job.status === "inprogress");
  let doneJobs = jobs.filter((job) => job.status === "done");

  let suggestionJobs;
  if (search === "") {
    suggestionJobs = [];
  } else {
    suggestionJobs = jobs.filter((job) =>
      job.title.toLowerCase().includes(search.toLowerCase()),
    );
  }

  const handleSelected = (job) => {
    setSelectedJobId(job.id);
    setSearch(job.title);
    setShowSuggestion(false);
  };
  return (
    <>
      <div className="todo-input-section">
        <TodoInput
          job={job}
          setJob={setJob}
          handleAdd={handleAdd}
          inputRef={inputRef}
          handleEnter={handleEnter}
        />

        <Search
          search={search}
          setSearch={setSearch}
          suggestionJobs={suggestionJobs}
          selectedJobId={selectedJobId}
          setSelectedJobId={setSelectedJobId}
          handleSelected={handleSelected}
          showSuggestion={showSuggestion}
          setShowSuggestion={setShowSuggestion}
        />
      </div>

      {/* <Filter filter={filter} setFilter={setFilter} /> */}

      <div className="todo-list-section">
        <TodoList
          jobs={jobs}
          setJobs={setJobs}
          handleChecked={handleChecked}
          editingId={editingId}
          editValue={editValue}
          setEditValue={setEditValue}
          handleEdit={handleEdit}
          handleSave={handleSave}
          handleCancel={handleCancel}
          todoJobs={todoJobs}
          inProgressJobs={inProgressJobs}
          doneJobs={doneJobs}
          selectedJobId={selectedJobId}
        />
      </div>

      <div className="progress-section">
        <Progress jobs={jobs} />
      </div>

      <div className="action-section">
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
