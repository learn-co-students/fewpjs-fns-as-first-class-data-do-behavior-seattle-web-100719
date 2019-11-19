/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(time) {
  const splitString = time.split(':');
  const hour = splitString[0];

  if (hour < 12) {
    return "Good Morning"
  }
    else if (hour > 12 && hour < 17) {
      return "Good Afternoon"
    }
      else if (hour > 17 && hour < 24) {
        return 'Good Evening'
      }
}

function displayMessage(newGreeting) {
  let ciboire = document.querySelector("#greeting");
  ciboire.innerText = newGreeting
}