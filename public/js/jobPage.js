// JS to take user to page/handlebar where they enter new tips or edit tips
// Also will run chart.js(?)
const deleteJobHandler = async (event) => {
    event.preventDefault();
  
    const tipID = event.currentTarget.getAttribute('data-id');
    console.log(tipID);
    if (confirm("Are you sure you want to delete this job?")) {
      const response = await fetch(`/api/tips/${tipID}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        console.log(response);
        alert('Failed to delete job');
      }
    }
  };

  const deleteBtns = document.querySelectorAll('.delete-btn');

  deleteBtns.forEach(btn => {
    btn.addEventListener('click', deleteJobHandler);
  });