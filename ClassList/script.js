// add()
// remove()
// toggle(Remove if present , Add if absent)
// replace(oldClass , newClass)
// contains()

// My Button does not have the .enabled class , we are adding this dynamically using js
const myButton = document.getElementById("myBtn");

// myButton.classList.add("enabled");
// myButton.classList.remove("enabled");

// myButton.classList.add("hover");

// myButton.addEventListener("mouseover", (event) => {
//   event.target.classList.add("hover");
// });

// myButton.addEventListener("mouseout", (event) => {
//   event.target.classList.remove("hover");
// });

// myButton.addEventListener("mouseover", (event) => {
//   event.target.classList.toggle("hover");
// });

// myButton.addEventListener("mouseout", (event) => {
//   event.target.classList.toggle("hover");
// });

// myButton.classList.add("enabled");
// myButton.addEventListener("click", (event) => {
//   event.target.classList.replace("enabled", "disabled");
// });

// myButton.classList.add("enabled");
// myButton.addEventListener("click", (event) => {
//   if (event.target.classList.contains("disabled")) {
//     event.target.textContent += "😒";
//   } else {
//     event.target.classList.replace("enabled", "disabled");
//   }
// });


const myH1 = document.getElementById("myH1");

myH1.classList.add("enabled");
myH1.addEventListener("click", (event) => {
  if (event.target.classList.contains("disabled")) {
    event.target.textContent += "😒";
  } else {
    event.target.classList.replace("enabled", "disabled");
  }
});
