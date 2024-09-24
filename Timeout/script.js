const myStart = document.getElementById("myStart");
const myClear = document.getElementById("myClear");

let timeoutId;

myStart.onclick = function () {
  timeoutId = setTimeout(() => window.alert("Hello"), 3000);
  console.log("STARTED");
};

myClear.onclick = function () {
  clearTimeout(timeoutId);
  console.log("CLEARED");
};
