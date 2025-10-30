/** @format */

//querying the dom 7min - 15 min-------------------------------
//const para = document.querySelector("div.error");

//console.log(para);

//const paras = document.querySelectorAll("p");
//const errors = document.querySelectorAll(".error");

//console.log(errors);

// Get elements by ID 16 min - 21 min --------------------------------------

// get elements by ID
//const title = document.getElementById("page-title");
//console.log(title);

// get elements by class name
//const errors = document.getElementsByClassName("error");
//console.log(errors);
//console.log(errors[0]);

// get elements by tag name
//const paras = document.getElementsByTagName("p");
//console.log(paras);
//console.log(paras[1]);

//changing text inside elements 21 min - 30 min -----------------------------

//const para = document.querySelector("p");

//console.log(para.innerText);
//para.innerText += ", do you have a ding dong?";

//const paras = document.querySelectorAll("p");

//paras.forEach((para) => {
//  console.log(para.innerText);
//  para.innerText += " new text";
//});

//const content = document.querySelector(".content");

//console.log(content.innerHTML);
//content.innerHTML += "<h2>This is a new h2</h2>";

//const people = ["mario", "luigi", "yoshi"];

//people.forEach((person) => {
//content.innerHTML += `<p>${person}</p>`;
//});

// Attributes of html elements 30 min

const link = document.querySelector("a");
console.log(link.getAttribute("href"));

link.setAttribute("href", "https://www.bing.com");
link.innerText = "dookie website";

const msg = document.querySelector("p");

console.log(msg.getAttribute("class"));
msg.setAttribute("class", "success");
msg.setAttribute("style", "color: green;");
