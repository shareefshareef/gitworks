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

/*
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

*/



//parentnode || parent element
let items = document.querySelector("#items")
items.parentNode.style.backgroundColor = "#f4f4f4"
items.parentElement.style.backgroundColor = "#fff4f4"

//childNode
//console.log(items.childNodes)


//children
/*
items.children[0].style.backgroundColor="yellow"
items.children[1].style.backgroundColor="coral"
items.children[2].style.backgroundColor="purple"
items.children[3].style.backgroundColor="skyblue"
*/
//firstchild
//console.log(items.FirstChild);
//lastchild
//console.log(items.LastChild);

//firstelementchild //last element child
/*
items.firstElementChild.textContent="selmon bhai"
items.lastElementChild.textContent="savlon bhai"
*/
//nextsibling
//console.log(items.nextSibling);

//nextelementsibling
//console.log(items.nextElementSibling);
//previoussibling
//console.log(items.previousSibling)
//previouselement sibling
//console.log(items.previousElementSibling)

//creating a element
/* element creating
let celement = document.createElement("div");
celement.className="nope";
celement.id="nope1";


celement.setAttribute('title','hellonope');


let matter = document.createTextNode("hello world");

celement.appendChild(matter);
let container = document.querySelector('header .container')
let h =  document.querySelector("header h1")

container.insertBefore(celement,h)
//===========================================
let e1 = document.createElement("li");
let content = document.createTextNode("hello")

e1.appendChild(content);

let hi = document.querySelector("ul")

let h2 = document.querySelector("li")

hi.insertBefore(e1,h2)
*/

let form = document.getElementById("add-form");
let ull = document.getElementById("items")

form.addEventListener('submit',addItem);
ull.addEventListener('click',removeitem);


function addItem(e){
    e.preventDefault();
    //getting input value

    let get_input = document.getElementById("inputitem").value;

    //create a element
    let new_element = document.createElement("li");
    //naming the class
    new_element.className='list-group-item'
    //inserting the value of submitted input to the li tag
    new_element.appendChild(document.createTextNode(get_input));

    

    let deletebtn = document.createElement("button");
    deletebtn.className = "btn btn-danger btn-sm float-right delete";

    deletebtn.appendChild(document.createTextNode('X'));
    new_element.appendChild(deletebtn);

    let editbtn = document.createElement("button");
    editbtn.className = "btn btn-danger btn-sm float-right edit"

    editbtn.appendChild(document.createTextNode("E"));
    new_element.appendChild(editbtn);
    //inserting the li tag in the unorderelist tag

    ull.appendChild(new_element);

}

function removeitem(e){
    if(e.target.classList.contains("delete")){
        if(confirm("are you sure")){
            let li = e.target.parentElement;
            ull.removeChild(li);
        }
    }
}









