const input = document.querySelector("input"),
h2 = document.querySelector("h2");
input.addEventListener("keyup", display);


function display(){
    localStorage.setItem('keyName', input.value);
    h2.innerHTML = localStorage.getItem('keyName', input.value);
}
console.log(localStorage.getItem('keyName', input.value));
