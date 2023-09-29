const UpdateTipBtn = document.getElementById('editBtn');

const updateTipHandler = async (event) => {
  event.preventDefault();
  const hours = document.querySelector('#updHoursWorked').value.trim();
  const tips = document.querySelector('#updTotalTips').value.trim();
  const date = document.querySelector('#updDate').value.trim();

  const tip_id = UpdateTipBtn.dataset.tip_id
    
  console.log(hours, tips, date); 
  if (hours && tips && date) {
    const response = await fetch(`/api/tips/${tip_id}`, {
      method: 'PUT',
      body: JSON.stringify({ hours, tips, date }),
      headers: { 'Content-Type': 'application/json' },
    });
    
    if (response.ok) {
      window.location.reload();
    } else {
      console.log(response);
      alert(response.statusText);
      }
  }
};
  

UpdateTipBtn.addEventListener('click', updateTipHandler);