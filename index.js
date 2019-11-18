/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString) {
  let splitTime = timeString.split(":");
  const hour = parseInt(splitTime[0], 10);
  if(hour >= 0 && hour <= 12){
    return "Good Morning";
  } else if(hour > 12 && hour <= 17) {
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(greetingString) {
  const temp = document.getElementById("greeting");
  temp.innerText = greetingString;
}