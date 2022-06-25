// The function here takes the parameters that you
// have declared in the `glide.json` file, in the
// same order.
window.function = function (str, type) { 
  // 2018-01-01T16:55:30.974Z
  // January 1, 2017, 3:24PM
  let peices = str.split(',')
  let final;
  if (type === "HOUR") {
    // Later
    final = 'not implemented yet'
  } else if (type === "DAY") {
    final = +peices[0].split(' ')[1]
  } else if (type === "MONTH") {
    final = peices[0].split(' ')[0]
  } } else if (type === "YEAR") {
    final = +peices[1].trim() 
  }

  return final
}
