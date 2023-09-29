const addTipBtn = document.getElementById('entBtn');


const addTipHandler = async (event) => {
  event.preventDefault();
  const hours = document.querySelector('#hoursWorked').value.trim();
  const tips = document.querySelector('#totalTips').value.trim();
  const date = document.querySelector('#date').value.trim();
  const job_id = addTipBtn.dataset.job_id;
  if (hours && tips && date) {
    console.log('fired');
    const response = await fetch('/api/tips/', {
      method: 'POST',
      body: JSON.stringify({ hours, tips, date }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      console.log(response);
      document.location.replace(`/job/${job_id}`);
    } else {
      console.log(response);
      alert(response.statusText);
    }
  }
};


addTipBtn.addEventListener('click',  addTipHandler);