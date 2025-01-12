let apply=document.querySelector(".apply");
let loc=document.querySelector("#sec4")
let map=document.querySelector(".mapouter")

function toggleDisplay(element) {
    element.style.display = element.style.display === "none" ? "block" : "none";
}
function showForm()
{
    toggleDisplay(apply);

}
function Greet()
{   
    toggleDisplay(apply);
    alert("Thanks for filling up the form. We will contact you!!")
}

loc.addEventListener("click",function aS(){

    toggleDisplay(map);
})