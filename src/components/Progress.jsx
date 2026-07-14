function Progress({ jobs }) {
  const completedJobs = jobs.filter((job) => job.completed);

  let progress;
  if (jobs.length === 0) {
    progress = 0;
  } else {
    progress = ((completedJobs.length / jobs.length) * 100).toFixed(1);
  }
  return (
    <div className="progress">
      <p>
        Completed: {completedJobs.length}/{jobs.length}
      </p>
</br>
      <p>Progress: {progress}%</p>
    </div>
  );
}

export default Progress;
