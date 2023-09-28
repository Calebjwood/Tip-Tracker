const format_date = (date) => {
  const weekday = date.toLocaleDateString('en-US', { weekday: 'long' });
  const month = date.toLocaleDateString('en-US', { month: 'long' });
  const day = date.getDate() + 1;
  const year = date.getFullYear();

  return `${weekday}, ${month} ${day} ${year}`;
}

const format_amount = (amount) => {
  // format large numbers with commas
  return parseInt(amount).toLocaleString();
}
const calc_total = (hours, wage, tips) => {
  let result = (parseFloat(hours) * parseFloat(wage)) + parseFloat(tips);
  return Number(result.toFixed(2));  // Convert result to fixed 2 decimal places
}

const calc_hourly = (hours, wage, tips) => {
  let result = calc_total(hours, wage, tips) / hours;
  return Number(result.toFixed(2));  // Convert result to fixed 2 decimal places
}

module.exports = { format_date, format_amount, calc_total, calc_hourly };

