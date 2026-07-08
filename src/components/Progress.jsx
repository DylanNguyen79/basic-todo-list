function Progress({ checked, jobs }) {
  let progress;
  if (jobs.length === 0) {
    progress = 0;
  } else {
    progress = ((checked.length / jobs.length) * 100).toFixed(1);
  }
  return (
    <>
      <p>
        Completed: {checked.length}/{jobs.length}
      </p>

      <p>Progress: {progress}%</p>
    </>
  );
}

export default Progress;
