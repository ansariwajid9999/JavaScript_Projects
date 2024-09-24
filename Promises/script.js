// DO THIS IN CHORES

// 1. WALK THE DOG
// 2. CLEAN THE KITCHEN
// 3. TAKE OUT THE TRASH

// function walkDog(callback) {
//   setTimeout(() => {
//     console.log("You walk the dog");
//     callback();
//   }, 1500);
// }

// function cleanKitchen(callback) {
//   setTimeout(() => {
//     console.log("You clean the kitchen");
//     callback();
//   }, 2500);
// }

// function takeOutTrash(callback) {
//   setTimeout(() => {
//     console.log("You take out the trash");
//     callback();
//   }, 500);
// }

// walkDog(() => {
//   cleanKitchen(() => {
//     takeOutTrash(() => console.log("You finshed all the chores!"));
//   });
// });

// FOR UNDERSTANDING

// walkDog(function() {
//   cleanKitchen(function() {
//     takeOutTrash(function() {
//       console.log("You finished all the chores!");
//     });
//   });
// });

// function walkDog() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("You walk the dog");
//     }, 1500);
//   });
// }

// function cleanKitchen() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("You clean the kitchen");
//     }, 2500);
//   });
// }

// function takeOutTrash() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("You take out the trash");
//     }, 500);
//   });
// }

// walkDog()
//   .then((value) => {
//     console.log(value);
//     return cleanKitchen();
//   })
//   .then((value) => {
//     console.log(value);
//     return takeOutTrash();
//   })
//   .then((value) => {
//     console.log(value);
//     console.log("you have completed all the tasks");
//   });

function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dogwalked = true;
      if (dogwalked) {
        resolve("You walk the dog");
      } else {
        reject("You didn't walk the dog");
      }
    }, 1500);
  });
}

function cleanKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const KitchenCleaned = true;
      if (KitchenCleaned) {
        resolve("You clean the kitchen");
      } else {
        reject("You didn't clean the kitchen");
      }
    }, 2500);
  });
}

function takeOutTrash() {
  return new Promise((resolve, reject) => {
    const trashTakenOut = false;
    if (trashTakenOut) {
      resolve("You take out the trash");
    } else {
      reject("You didn't take out the trash");
    }
    setTimeout(() => {}, 500);
  });
}

walkDog()
  .then((value) => {
    console.log(value);
    return cleanKitchen();
  })
  .then((value) => {
    console.log(value);
    return takeOutTrash();
  })
  .then((value) => {
    console.log(value);
    console.log("you have completed all the tasks");
  })
  .catch((error) => console.error(error));
