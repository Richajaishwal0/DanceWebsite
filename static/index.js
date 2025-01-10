let apply=document.querySelector(".apply");
function showForm()
{
    if (apply.style.display=="none")
    {
        apply.style.display="block";
    }
    else{
        apply.style.display="none";
    }

}
function Greet()
{   
    if (apply.style.display=="none")
    {
        apply.style.display="block";
    }
    else{
        apply.style.display="none";
    }
    alert("Thanks for filling up the form. We will contact you!!")
}
let loc=document.getElementById("sec4")
let map=document.querySelector(".mapouter")
loc.addEventListener("click",function a(){

    if (map.style.display=="none")
    {
     map.style.display="block";   
    }
    else 
    {
        map.style.display="none";
    }
})