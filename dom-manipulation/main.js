console.log(document.getElementById("my-form"));

let container = document.querySelector(".container");
let inputName = document.querySelector("#name");
let h1Tag = document.querySelector("h1");

//multiple selectors
document.querySelectorAll(".item");
document.querySelectorAll("li");
document.querySelectorAll("div");

//DOM Manipulation
// const ulElements = document.querySelector(".items");
// // ulElements.remove();
// // ulElements.lastElementChild.remove();
// ulElements.firstElementChild.textContent = "JavaScript";
// ulElements.children[1].innerText = "C#.NET";
// ulElements.lastElementChild.innerHTML = "Agile";

// const button = document.querySelector(".btn");
// button.style.background = "green";

// //event listener
// button.addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log(e);
//   document.getElementById("my-form").style.background = "purple";
//   document.querySelector("header").style.background = "brown";
//   document.querySelector("body").classList.add("bg-dark");
// });

// inputName.addEventListener("input", (e) => {
//   document.querySelector(".container").append(inputName.value);
// });
// let inputEmail = document.querySelector("#email");
// inputEmail.addEventListener("input", (e) => {
//   document.querySelector(".container").append(inputEmail.value);
// });

//get the DOM elements and assign them to variables

const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

//add event listener to the form
myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();
  if (nameInput.value === "" || emailInput.value === "") {
    msg.classList.add("error");
    msg.innerHTML = "Please enter your name and email";
    setTimeout(() => msg.remove(), 5000);
  } else {
    const li = document.createElement("li");
    li.appendChild(
      document.createTextNode(`${nameInput.value} : ${emailInput.value}`)
    );
    userList.appendChild(li);
    nameInput.value = "";
    emailInput.value = "";
  }
}
