/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(input) {
  let time = input.split(":")
  let hour = time[0]

  if (hour < 12){
    return "Good Morning"
  }
 if (hour >= 12 && hour <= 17) {
    return "Good Afternoon"
  }
  if(hour > 17 && hour <= 24){
    return "Good Evening"
  }
  return ""
}


/* Write your implementation of displayMessage() */

function displayMessage(output) {
  const greet = document.getElementById("greeting")
  greet.innerText = output
}