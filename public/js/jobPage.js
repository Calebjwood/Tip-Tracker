const deleteJobHandler = async (event) => {
    event.preventDefault();
  
    const tipID = event.currentTarget.getAttribute('data-id');
    console.log(tipID);
    if (confirm("Are you sure you want to delete this job?")) {
      const response = await fetch(`/api/tips/${tipID}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        window.location.reload();
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