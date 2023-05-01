//let headtitle = document.getElementById("header-title");
//headtitle.innerText="dattebayo users"

//let mainh = document.getElementById("main-header");
//mainh.style.borderBottom = "solid 10px #00f"

//headtitle.style.borderBottom = "solid 10px #f00";


/*let items = document.getElementsByClassName("list-group-item");



items[0].textContent = "user1";
items[1].textContent = "user2";

items[2].textContent = "user3";

items[3].textContent = "user4";

for(let i = 0;i<items.length;i++){

    items[i].style.backgroundColor = "yellow";
}
*/
/*
let clasedit = document.getElementsByClassName("list-group");
clasedit.textContent="user unknown";

let li = document.getElementsByTagName("li");

for(let i=0;i<li.length;i++){
    li[i].textContent = `user ${i}`;
};

for(let i=0;i<li.length;i++){
    li[i].style.backgroundColor="red";
};
*/
let changeitem = document.querySelector(".list-group-item:nth-child(2)")
changeitem.style.backgroundColor="green"

let changeitem2 = document.querySelector(".list-group-item:nth-child(3)")
changeitem2.style.display = "none"


let make_font_color_green = document.querySelectorAll("li")

make_font_color_green[1].style.color = "green"


let odd = document.querySelectorAll("li:nth-child(odd)");


for(let i = 0;i<odd.length;i++){
odd[i].style.backgroundColor="green"
}
//second element is green because i changed the element to be green and the third element has no value because it set the value to be invinsible


