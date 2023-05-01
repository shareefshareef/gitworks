//let headtitle = document.getElementById("header-title");
//headtitle.innerText="dattebayo users"

//let mainh = document.getElementById("main-header");
//mainh.style.borderBottom = "solid 10px #00f"

//headtitle.style.borderBottom = "solid 10px #f00";


let items = document.getElementsByClassName("list-group-item");



items[0].textContent = "user1";
items[1].textContent = "user2";

items[2].textContent = "user3";

items[3].textContent = "user4";

for(let i = 0;i<items.length;i++){

    items[i].style.backgroundColor = "yellow";
}



