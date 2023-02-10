// selecting two elements from the HTML page: the display element with the id "display",
//  and all the buttons in the page with the selector "button".
    const display = document.querySelector('#display');
    const buttons = document.querySelectorAll('button');

// The code then uses the forEach method to loop through all the buttons and attach a click event listener to each one. 
// When a button is clicked, the code inside the event listener is executed.
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {

    // If the button clicked has an id of "=", the code evaluates the expression in 
    // the display using the eval function and sets the value of the display to the result.
        if(btn.id === "="){
          display.value = eval(display.value);

      // If the button clicked has an id of "ac", the code sets the value of the display to an empty string.
        }else if(btn.id === "ac"){
          display.value = "";

      // If the button clicked has an id of "de", 
      // the code removes the last character from the value of the display using the slice method.
        }else if (btn.id == "de"){
          display.value = display.value.slice(0,-1);

      // If the button clicked is any other button, the code concatenates the id of the button to the value of the display.
        }else{
          display.value += btn.id;
        }
      }); 
    });


