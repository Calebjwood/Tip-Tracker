const newJobHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#job-name').value.trim();
  const wage = document.querySelector('#job-wage').value.trim();

  if (name && wage) {
    const response = await fetch(`/api/jobs`, {
      method: 'POST',
      body: JSON.stringify({ name, hourly_wage: wage }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create job');
    }
  }
};

const deleteJobHandler = async (event) => {
  event.preventDefault();

  const jobID = event.currentTarget.getAttribute('data-id');

  if (confirm("Are you sure you want to delete this job?")) {
    const response = await fetch(`/api/jobs/${jobID}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete job');
    }
  }
};

const createBtn = document.querySelector('#new-job-form');

createBtn.addEventListener('submit', newJobHandler);

const deleteBtns = document.querySelectorAll('.delete-btn');

deleteBtns.forEach(btn => {
  btn.addEventListener('click', deleteJobHandler);
});