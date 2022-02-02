const display = document.querySelector(".display");

// exibe métricas da tela
displayMe();

//evento para observar mudanças
window.addEventListener("resize", displayMe);

function displayMe(){
    let widthScreen = window.innerWidth;
    let heightScreen = window.innerHeight;
    
    display.innerHTML = widthScreen + "x"+heightScreen;
}