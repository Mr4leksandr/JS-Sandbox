const listitem = document.getElementsByTagName("li");
console.log(listitem);
console.log(listitem.length);
console.log(listitem[0]);

//collection to array
Array.from(listitem).forEach(listitem => {
    listitem.style.color = "red";
});

const btn = document.getElementsByClassName("btn");
console.log(btn);
btn[0].style.backgroundColor = "yellow";

//select element bu ID
const title = document.getElementById("title");
console.log(title);
title.textContent = "Hello World!";

//select element with queryselector

const list1 = document.querySelector("#list");
console.log(list1);

const link = document.querySelector("li.item a");
console.log(link);
link.style.textDecoration = "none";
link.style.color = "green";

const h1 = document.querySelector("#title");
console.log(h1);
h1.style.color = "green";