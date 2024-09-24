const myButton = document.getElementById("myButton");
const myImg = document.getElementById("myImg");

// myButton.addEventListener("click", (event) => {
//   if (myImg.style.display === "none") {
//     myImg.style.display = "block";
//     myButton.textContent = "hide";
//   } else {
//     myImg.style.display = "none";
//     myButton.textContent = "Show";
//   }
// });

// WE CAN RESERVE THE SPACE FOR IMAGE , WE HAVE TO WRITE BUTTON ELEMENT AFTER
// IMAGE ELEMENT IN HTML AND DO SOME CHANGES IN JS display = visiblty npne = hidden
myButton.addEventListener("click", (event) => {
  if (myImg.style.visibility === "hidden") {
    myImg.style.visibility = "visible";
    myButton.textContent = "hide";
  } else {
    myImg.style.visibility = "hidden";
    myButton.textContent = "Show";
  }
});