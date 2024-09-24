// STEP 1 CREATE THE ELEMENT
const newH1 = document.createElement("h1");

// STEP 2 ADD ATTRIBUTES/PROPERTIES
newH1.textContent = "I like pizza!";
newH1.id = "myH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";

// STEP 3 APPEND ELEMENT TO DOM
// document.body.append(newH1);
// document.body.prepend(newH1);

// I WANT BOX1 TO BE MY PARENT RATHER THAN THE BODY
// WHEN I AM APPENDING THIS ELEMENT IN BOX1 IT IS THE LAST CHILD OF BOX1
// IF THERE ARE ANY CHILD ELEMENTS WITHIN THIS BOX WHICH THERE IS WE HAVE
// PARAGRAPH ELEMENT THAT H1 ELEMENT WILL COME AFTER IF YOU WANT TO BE BEFORE
// DO PREPEND
document.getElementById("box1").append(newH1);
// document.getElementById("box1").prepend(newH1);

// WHAT IF WE TAKE OUR H1 ELEMENT AND SANDWICH BETWEEN BOX1 AND BOX 2
// const box2 = document.getElementById("box2");
// document.body.insertBefore(newH1 , box2);

// WHAT IF THESE ELEMENT DONOT HAVE ID'S , REMOVE ID FROM DIV IN HTML
// const boxes = document.querySelectorAll(".box");
// document.body.insertBefore(newH1 , boxes[2]);

// REMOVE THE ELEMENT
// document.body.removeChild(newH1);
document.getElementById("box1").removeChild(newH1);
