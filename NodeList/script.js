// IN CONSOLE YOU HAVE SEEN 4 NODE LIST
let buttons = document.querySelectorAll(".myButtons");
// console.log(buttons)

// ADD HTML CSS PROPERTIES
// buttons.forEach((button) => {
//   button.style.backgroundColor = "green";
//   button.textContent += "😃";
// });

// CLICK EVENT LISTENER
// buttons.forEach((button) => {
//   button.addEventListener("click", (event) => {
//     event.target.style.backgroundColor = "tomato";
//   });
// });

// MOUSEOVER + MOUSEOUT event listener
// buttons.forEach((button) => {
//   button.addEventListener("mouseover", (event) => {
//     event.target.style.backgroundColor = "blue";
//   });
// });

// buttons.forEach((button) => {
//   button.addEventListener("mouseout", (event) => {
//     event.target.style.backgroundColor = "blue";
//   });
// });

// ADD AN ELEMENT
// const newButton = document.createElement("button");
// newButton.textContent = "Button 5";
// newButton.classList = "myButtons";
// document.body.appendChild(newButton);

// // AS WE KNOW NODELIST IS STATIC COLLECTION OF HTML ELEMENT SON WE HAVE TO UPDATE NODELIST
// // MANUALLY RIGHT NOW IT HAS BEEN 4 BUT WE HAVE TO UPDATE AND MAKE 5
// // console.log(buttons);

// buttons = document.querySelectorAll(".myButtons");

// console.log(buttons);

// REMOVE AN ELEMENT
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.target.remove();
    // AFTER REMOVE ALL 4 STILL 4 NODELIST SHOWING SO WE HAVE TO SET IT MANUALLY
    // console.log(button);

    buttons = document.querySelectorAll("button");
    console.log(buttons);
  });
});
