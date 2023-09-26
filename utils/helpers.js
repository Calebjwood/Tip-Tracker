const format_date = (date) => {
  // Format date as MM/DD/YYYY
  return date.toLocaleDateString();
}
const format_amount = (amount) => {
  // format large numbers with commas
  return parseInt(amount).toLocaleString();
}
const calc_total = (hours, wage, tips) => {
  return (parseFloat(hours) * parseFloat(wage)) + parseFloat(tips)
}

const calc_hourly = (hours, wage, tips) => {
  return  (calc_total(hours, wage, tips)/hours)
}
module.exports = { format_date, format_amount, calc_total, calc_hourly };

