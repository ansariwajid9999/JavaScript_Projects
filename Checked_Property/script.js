const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentresult = document.getElementById("paymentresult");

mySubmit.onclick = function () {
  if (myCheckBox.checked) {
    subResult.textContent = "You are subscribed!";
  } else {
    subResult.textContent = "You are not subscribed!";
  }

  if (visaBtn.checked) {
    paymentresult.textContent = "You are paying through Visa";
  } else if (masterCardBtn.checked) {
    paymentresult.textContent = "You are paying through MasterCard";
  } else if (payPalBtn.checked) {
    paymentresult.textContent = "You are paying through PayPal";
  } else {
    paymentresult.textContent = "You have not choose any payment option yet!";
  }
};
