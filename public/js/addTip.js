const addTipBtn = document.getElementById('entBtn');


const addTipHandler = async (event) => {
  event.preventDefault();
  const hours = document.querySelector('#hoursWorked').value.trim();
  const tips = document.querySelector('#totalTips').value.trim();

  if (hours && tips) {
    const response = await fetch('api/tips/', {
      method: 'POST',
      body: JSON.stringify({ hours, tips }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      console.log(response);
      document.location.replace(`/profile`);
    } else {
      alert(response.statusText);
    }
  }
};


addTipBtn.addEventListener('click', addTipHandler);

