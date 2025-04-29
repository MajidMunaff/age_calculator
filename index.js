"use strict";
let userAge, userName;
// console.log(new Date());
document
  .getElementById("userinfo")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    userName = document.getElementById("name").value;
    userAge = document.getElementById("dob").value;
    console.log(userName, userAge);

    ageCalculator(userAge, userName);
  });

const ageCalculator = function (userAge, userName) {
  const oldDate = new Date(userAge);
  //   console.log(oldDate);
  const currentDate = new Date();
  const diff = currentDate - oldDate;
  let years = currentDate.getFullYear() - oldDate.getFullYear();
  let months = currentDate.getMonth() - oldDate.getMonth();
  let days = currentDate.getDate() - oldDate.getDate();
  //   const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 30 * 12));
  console.log(years, months, days);

  if (days < 0) {
    months--;
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  document.getElementById(
    "des"
  ).textContent = `hi ${userName} you are ${years} years ${months} months and ${days} days old`;
};
