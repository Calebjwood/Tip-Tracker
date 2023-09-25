const UpdateTipBtn = document.getElementById('editBtn');

const updateTipHandler = async (event) => {
    event.preventDefault();
  
    const hours = document.querySelector('#hoursWorked').value.trim();
    const tips = document.querySelector('#totalTips').value.trim();
    const tip_id = document.location.pathname.split('/')[2]
    
    if (hours && tips) {
      const response = await fetch(`/api/tips/${tip_id}`, {
        method: 'PUT',
        body: JSON.stringify({ hours, tips }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        console.log(response);
        alert(response.statusText);
      }
    }
  };
  

  UpdateTipBtn.addEventListener('click', updateTipHandler);