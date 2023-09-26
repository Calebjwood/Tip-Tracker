async function fetchDataAndGenerateChart() {
  try {
      const jobID = document.location.pathname.split('/')[2];
      
      const response = await fetch(`/api/tips/chart/${jobID}`);
      
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }

      const data = await response.json();

      const dates = data.map(entry => new Date(entry.date).toDateString());
      const incomes = data.map(entry => entry.totalIncome);

      generateChart(dates, incomes);
  } catch (err) {
      console.error(err);
  }
}

function generateChart(dates, incomes) {
  const ctx = document.getElementById('myChart');

  new Chart(ctx, {
      type: 'line',
      data: {
          labels: dates,
          datasets: [{
              label: 'Total Income',
              data: incomes,
              borderColor: 'blue',
              fill: false
          }]
      }
  });
}

// Call the function
fetchDataAndGenerateChart();
