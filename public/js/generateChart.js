async function fetchDataAndGenerateChart() {
  try {
    const jobID = document.location.pathname.split('/')[2];
      
    const response = await fetch(`/api/tips/chart/${jobID}`);
      
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();

    data.sort((a, b) => new Date(a.date) - new Date(b.date));

    const dates = data.map(entry => {
      const dateObj = new Date(entry.date);
      const month = dateObj.getMonth() + 1; // because getMonth() starts at zero
      const day = dateObj.getDate() + 1;
      return `${month}/${day}`;
    });
    
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
    },
    options: {
      responsive: true,
      scales: {
        x: {
          ticks: {
            color: 'black'
          },
          grid: {
            color: 'rgba(255, 255, 255, 0.1)'
          }
        },
        y: {
          ticks: {
            color: 'black'
          },
          grid: {
            color: 'rgba(255, 255, 255, 0.1)' 
          }
        }
      }
    }
  });
}

fetchDataAndGenerateChart();
