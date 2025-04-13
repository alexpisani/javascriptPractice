

window.addEventListener('load', (event) =>{
    document.querySelector("h2").innerHTML = "Video Game Cost Calculator";
    document.getElementById("gameList").innerText = "To calculate the cost of the game, type in the price of the game within the form.";
    const image = document.getElementById("logo");
    image.src = "img/logo.png";
    let price = prompt("What is the price of the game?");
    const taxRate = .05;
    var gameTax = parseFloat(price) * taxRate;
    var totalCost = parseFloat(price) + gameTax;
    document.getElementById("sales").value = "$" + gameTax.toFixed(2);
    document.getElementById("total").value = "$" + totalCost.toFixed(2);
    
     });