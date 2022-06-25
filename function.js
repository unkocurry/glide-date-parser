window.function = function (dateStr, type) {
  const date = new Date(dateStr)
  let final = 'error'
  
  if (type === 'HOUR') {
    final = date.getHour()  
  } else if (type === 'DAY_OF_WEEK') {
    final = date.getDay()
  } else if (type === 'DAY_OF_MONTH') {
    final = date.getDate()
  } else if (type === 'MONTH') {
    final = date.getMonth()
  } else if (type === 'YEAR') {
    final = date.getFullYear()
  }
  
  return final
}
