/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(timeString)
{
  let amOrPm = parseInt(timeString.split(":")[0]);

  if (amOrPm < 12)
  {
    return "Good Morning";
  }
  else if (amOrPm <= 17)
  {
    return "Good Afternoon";
  }
  else
  {
    return "Good Evening";
  }
}

function displayMessage(content)
{
  let addTo = document.getElementById('greeting');
  addTo.innerText = content;
  // addTo.appendChild(message);
}
/* Write your implementation of displayMessage() */
