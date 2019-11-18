/* Given Code, don't edit */

function handleClick(e) {
   const timeString = document.getElementById('time').value;
   displayMessage(greet(timeString));
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet(timeString) {
   const hour = timeString.split(':')[0];
   let timeNum = parseInt(hour);
   let str = '';
   if (timeNum < 12) {
      str = 'Good Morning';
   } else if (timeNum >= 12 && timeNum < 17) {
      str = 'Good Afternoon';
   } else {
      str = 'Good Evening';
   }
   return str;
}

function displayMessage(string) {
   let greeting = document.querySelector('#greeting');
   greeting.innerText = string;
}
