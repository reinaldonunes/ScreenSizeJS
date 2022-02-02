const display = document.querySelector(".display");

displayMe();

window.addEventListener("resize", displayMe);

function displayMe(){
    let widthScreen = window.innerWidth;
    let heightScreen = window.innerHeight;
    
    display.innerHTML = widthScreen + "x"+heightScreen;
}