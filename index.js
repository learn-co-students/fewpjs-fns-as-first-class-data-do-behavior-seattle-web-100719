/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

input = document.getElementById('time')

function greet(input) {
  if (input.split(':')[0]<12){
    return "Good Morning"
  }
  else if (input.split(':')[0]<17) {
    return "Good Afternoon"
  }
  else if (input.split(':')[0] >= 17){
    return  "Good Evening"
  }
}
 function displayMessage(greetMessage){
   greeting = document.getElementById('greeting')
   greeting.innerText = greetMessage
 }