const format_date = (date) => {
  // Format date as MM/DD/YYYY
  return date.toLocaleDateString();
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

