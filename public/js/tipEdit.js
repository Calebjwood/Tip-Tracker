const addTipBtn = document.getElementById('entBtn');
// const UpdateTipBtn = document.getElementById('entBtn');


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
      document.location.replace(`/profile`);
    } else {
      alert(response.statusText);
    }
  }
};

const updateTipHandler = (event) => {
    event.preventDefault();
}



addTipBtn.addEventListener('click', addTipHandler);
// UpdateTipBtnTipBtn.addEventListener('click', addTipHandler);
