document.getElementById("forestPath").style.fill= "hsla(240, 6%, 21%, 1)"

 // Fill //
document.getElementById("forestPath").addEventListener("mouseover", mouseOverForestSVG);
document.getElementById("forestPath").addEventListener("mouseout", mouseOutForestSVG);


// Forest //
document.getElementById("forest-svg").addEventListener("mouseover", mouseOverForestSVG);
document.getElementById("forest-svg").addEventListener("mouseout", mouseOutForestSVG);


function mouseOverForestSVG() {
  document.getElementById("forest-svg").style.backgroundColor= "hsl(193.9,97.5%,31.2%)";
  document.getElementById("forestPath").style.fill= "hsl(0,0%,100%)"
}

function mouseOutForestSVG() {
  document.getElementById("forest-svg").style.backgroundColor = "hsl(240,9.1%,89.2%)";
  document.getElementById("forestPath").style.fill= "hsla(240, 6%, 21%, 1)"
}

// Rain //
document.getElementById("rain-svg").addEventListener("mouseover", mouseOverRainSVG);
document.getElementById("rain-svg").addEventListener("mouseout", mouseOutRainSVG);


function mouseOverRainSVG() {
  document.getElementById("rain-svg").style.backgroundColor= "hsl(193.9,97.5%,31.2%)";
  document.getElementById("rainPath").style.fill= "hsl(0,0%,100%)"
}

function mouseOutRainSVG() {
  document.getElementById("rain-svg").style.backgroundColor = "hsl(240,9.1%,89.2%)";
  document.getElementById("rainPath").style.fill= "hsla(240, 6%, 21%, 1)"
}

// Coffee Shop //
document.getElementById("coffeeShop-svg").addEventListener("mouseover", mouseOverCoffeeShopSVG);
document.getElementById("coffeeShop-svg").addEventListener("mouseout", mouseOutOverCoffeeShopSVG);

function mouseOverCoffeeShopSVG() {
  document.getElementById("coffeeShop-svg").style.backgroundColor= "hsl(193.9,97.5%,31.2%)";
  document.getElementById("coffeeShopPath").style.fill= "hsl(0,0%,100%)"
}

function mouseOutOverCoffeeShopSVG() {
  document.getElementById("coffeeShop-svg").style.backgroundColor = "hsl(240,9.1%,89.2%)";
  document.getElementById("coffeeShopPath").style.fill= "hsla(240, 6%, 21%, 1)"
}

// FirePlace //
document.getElementById("firePlace-svg").addEventListener("mouseover", mouseOverFirePlaceSVG);
document.getElementById("firePlace-svg").addEventListener("mouseout", mouseOutOverFirePlaceSVG);

function mouseOverFirePlaceSVG() {
  document.getElementById("firePlace-svg").style.backgroundColor= "hsl(193.9,97.5%,31.2%)";
  document.getElementById("firePlacePath").style.fill= "hsl(0,0%,100%)"
}

function mouseOutOverFirePlaceSVG() {
  document.getElementById("firePlace-svg").style.backgroundColor = "hsl(240,9.1%,89.2%)";
  document.getElementById("firePlacePath").style.fill= "hsla(240, 6%, 21%, 1)"
}