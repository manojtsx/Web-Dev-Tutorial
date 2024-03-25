// Function Declaration
function clickMe(){
    alert('You clicked me!');
}
function clickHere(){
    alert('You clicked here!');
}

// Function Implementation
// clickMe();

// Event Listener
// document.getElementById('btn').addEventListener('click', clickHere);
document.querySelector('#btn').addEventListener('click', clickHere);


// Make a button with text "Click Here". And after clicking the button, it should display "You click me" below the button