const myBox = document.getElementById("myBox");
const myBtn = document.getElementById("myBtn");
// EVENT IS AN OBJECT , ITS PROVIDEED TO US AUTOMATICALLY BY THE WEB BROWESER WHEN SOMETHING HAPPENS
// IN THIS CASE LIKE WHEN I CLICK ON SOMETHING 
// myBox.addEventListener("click" , event => {
//   console.log(event);
// });

// myBox.addEventListener("click" , event => {
//   event.target.style.backgroundColor = "tomato";
//   event.target.textContent = "OUCH! 🤕";
// });

// myBox.addEventListener("mouseover" , event => {
//   event.target.style.backgroundColor = "yellow";
//   event.target.textContent = "Don't do it 😮";
// });

// myBox.addEventListener("mouseout" , event => {
//   event.target.style.backgroundColor = "lightgreen";
//   event.target.textContent = "Click Me 😃";
// });


myBtn.addEventListener("click" , event => {
  myBox.style.backgroundColor = "tomato";
  myBox.textContent = "OUCH! 🤕";
});

myBtn.addEventListener("mouseover" , event => {
  myBox.style.backgroundColor = "yellow";
  myBox.textContent = "Don't do it 😮";
});

myBtn.addEventListener("mouseout" , event => {
  myBox.style.backgroundColor = "lightgreen";
  myBox.textContent = "Click Me 😃";
});

