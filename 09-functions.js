//functions allows us to group a block of code together
function greetuser() {
  alert("welcome feke ukonga");
}

greetuser();

//method 2
const tellTimeOfDay = () => {
  alert("the time is 13:27");
};

tellTimeOfDay();

//you can call a regular function before creating it
processPayment();

function processPayment() {
  alert("Payment successful thank you");
}
processPayment();

const payment = () => {
  alert("Payment successful");
};
payment();

function month() {
  alert("september");
}
month();

const year = () => {
  alert("2024");
};
year();
