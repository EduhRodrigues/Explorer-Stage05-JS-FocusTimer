// Play/Pause Forest Audio Control //
var forestAudio = document.getElementById("forestAudio")
var forestDiv = document.getElementById("forestDiv")
var countForestAudio = 0

function playPauseforestAudio (){
  rainAudio.pause()
  coffeeShopAudio.pause()
  firePlaceAudio.pause()

  if (countForestAudio == 0) {
    countForestAudio = 1
    forestAudio.play()
  } else {
    countForestAudio = 0
    forestAudio.pause()
  }
}

// Play/Pause Rain Audio Control //
var rainAudio = document.getElementById("rainAudio")
var rainDiv = document.getElementById("rainDiv")
var countRainAudio = 0
function playPauserainAudio (){
  forestAudio.pause()
  coffeeShopAudio.pause()
  firePlaceAudio.pause()

  if (countRainAudio == 0) {
    countRainAudio = 1
    rainAudio.play()
  } else {
    countRainAudio = 0
    rainAudio.pause()
  }
}

// Play/Pause Coffee Shop Audio Control //
var coffeeShopAudio = document.getElementById("coffeeShopAudio")
var coffeeShopDiv = document.getElementById("coffeeShopDiv")
var countCoffeeShopAudio = 0

function playPauseCoffeeShopAudio (){
  forestAudio.pause()
  rainAudio.pause()
  firePlaceAudio.pause()

  if (countCoffeeShopAudio == 0) {
    countCoffeeShopAudio = 1
    coffeeShopAudio.play()
  } else {
    countCoffeeShopAudio = 0
    coffeeShopAudio.pause()
  }
}

// Play/Pause Fire Place Audio Control //
var firePlaceAudio = document.getElementById("firePlaceAudio")
var firePlaceDiv = document.getElementById("firePlaceDiv")
var countFirePlaceAudio = 0

function playPauseFirePlaceAudio (){
  forestAudio.pause()
  rainAudio.pause()
  coffeeShopAudio.pause()

  if (countFirePlaceAudio == 0) {
    countFirePlaceAudio = 1
    firePlaceAudio.play()
  } else {
    countFirePlaceAudio = 0
    firePlaceAudio.pause()
  }
}

// #controls Fill Colors//
document.getElementById("playPath").style.fill= "#993399"
document.getElementById("pausePath").style.fill= "#993399"
document.getElementById("forwardPath").style.fill= "#993399"
document.getElementById("backPath").style.fill= "#993399"

// Sound Options Background and Fill Colors//
document.getElementById("forestPath").style.fill= "green"
document.getElementById("forest-svg").style.backgroundColor = "#7CFC00"
document.getElementById("rainPath").style.fill= "grey"
document.getElementById("rain-svg").style.backgroundColor = "#ff9d00"
document.getElementById("coffeeShopPath").style.fill= "#523200"
document.getElementById("coffeeShop-svg").style.backgroundColor = "#9e6100"
document.getElementById("firePlacePath").style.fill= "yellow"
document.getElementById("firePlace-svg").style.backgroundColor = "#ff0808"

// Sound Option - Forest //
document.getElementById("forest-svg").addEventListener("mouseover", mouseOverForestSVG)
document.getElementById("forestPath").addEventListener("mouseover", mouseOverForestSVG)

document.getElementById("forestPath").addEventListener("mouseout", mouseOutForestSVG)
document.getElementById("forest-svg").addEventListener("mouseout", mouseOutForestSVG)

document.getElementById("forestPath").addEventListener("click", clickForestSVG)
document.getElementById("forest-svg").addEventListener("click", clickForestSVG)

function mouseOverForestSVG() {
  document.getElementById("forestPath").style.fill= "hsl(0,0%,100%)"
  document.getElementById("forest-svg").style.backgroundColor= "hsl(193.9,97.5%,31.2%)"
  document.getElementById("forest-svg").style.transition =".4s"
}

function mouseOutForestSVG() {
  document.getElementById("forestPath").style.fill= "green"
  document.getElementById("forest-svg").style.backgroundColor = "#7CFC00"
  document.getElementById("forest-svg").style.transform = "scale(1)"
  document.getElementById("forest-svg").style.transition =".4s"
}

function clickForestSVG() {
  document.getElementById("forest-svg").style.transform = "scale(1.1)"
  document.getElementById("forest-svg").style.transition =".4s"

  var ShowFirePlaceAudioControls = document.getElementById('firePlaceAudio');
  firePlaceAudio.controls = false;
  var ShowCoffeeShopAudioControls = document.getElementById('coffeeShopAudio');
  coffeeShopAudio.controls = false;
  var ShowRainAudioControls = document.getElementById('rainAudio');
  rainAudio.controls = false;
  var ShowForestAudioControls = document.getElementById('forestAudio');
  forestAudio.controls = true;
}

// Sound Option - Rain //
document.getElementById("rain-svg").addEventListener("mouseover", mouseOverRainSVG)
document.getElementById("rainPath").addEventListener("mouseover", mouseOverRainSVG)

document.getElementById("rain-svg").addEventListener("mouseout", mouseOutRainSVG)
document.getElementById("rainPath").addEventListener("mouseout", mouseOutRainSVG)

document.getElementById("rainPath").addEventListener("click", clickRainSVG)
document.getElementById("rain-svg").addEventListener("click", clickRainSVG)

function mouseOverRainSVG() {
  document.getElementById("rainPath").style.fill= "hsl(0,0%,100%)"
  document.getElementById("rain-svg").style.backgroundColor= "hsl(193.9,97.5%,31.2%)"
  document.getElementById("rain-svg").style.transition =".4s"
}

function mouseOutRainSVG() {
  document.getElementById("rainPath").style.fill= "grey"
  document.getElementById("rain-svg").style.backgroundColor = "#ff9d00"
  document.getElementById("rain-svg").style.transform ="scale(1)"
  document.getElementById("rain-svg").style.transition =".4s"
}

function clickRainSVG() {
  document.getElementById("rain-svg").style.transform = "scale(1.1)"
  document.getElementById("rain-svg").style.transition =".4s"

  var ShowForestAudioControls = document.getElementById('forestAudio');
  forestAudio.controls = false;
  var ShowFirePlaceAudioControls = document.getElementById('firePlaceAudio');
  firePlaceAudio.controls = false;
  var ShowCoffeeShopAudioControls = document.getElementById('coffeeShopAudio');
  coffeeShopAudio.controls = false;
  var ShowRainAudioControls = document.getElementById('rainAudio');
  rainAudio.controls = true;
}

// Sound Option - Coffee Shop //
document.getElementById("coffeeShop-svg").addEventListener("mouseover", mouseOverCoffeeShopSVG)
document.getElementById("coffeeShopPath").addEventListener("mouseover", mouseOverCoffeeShopSVG)

document.getElementById("coffeeShop-svg").addEventListener("mouseout", mouseOutCoffeeShopSVG)
document.getElementById("coffeeShopPath").addEventListener("mouseout", mouseOutCoffeeShopSVG)

document.getElementById("coffeeShopPath").addEventListener("click", clickCoffeeShopSVG)
document.getElementById("coffeeShop-svg").addEventListener("click", clickCoffeeShopSVG)

function mouseOverCoffeeShopSVG() {
  document.getElementById("coffeeShopPath").style.fill= "hsl(0,0%,100%)"
  document.getElementById("coffeeShop-svg").style.backgroundColor= "hsl(193.9,97.5%,31.2%)"
  document.getElementById("coffeeShop-svg").style.transition =".4s"
}

function mouseOutCoffeeShopSVG() {
  document.getElementById("coffeeShopPath").style.fill= "#523200"
  document.getElementById("coffeeShop-svg").style.backgroundColor = "#9e6100"
  document.getElementById("coffeeShop-svg").style.transform = "scale(1)"
  document.getElementById("coffeeShop-svg").style.transition =".4s"
}

function clickCoffeeShopSVG() {
  document.getElementById("coffeeShop-svg").style.transform = "scale(1.1)"
  document.getElementById("coffeeShop-svg").style.transition =".4s"

  var ShowForestAudioControls = document.getElementById('forestAudio');
  forestAudio.controls = false;
  var ShowRainAudioControls = document.getElementById('rainAudio');
  rainAudio.controls = false;
  var ShowFirePlaceAudioControls = document.getElementById('firePlaceAudio');
  firePlaceAudio.controls = false;
  var ShowCoffeeShopAudioControls = document.getElementById('coffeeShopAudio');
  coffeeShopAudio.controls = true;
}

// Sound Option - FirePlace //
document.getElementById("firePlace-svg").addEventListener("mouseover", mouseOverFirePlaceSVG)
document.getElementById("firePlacePath").addEventListener("mouseover", mouseOverFirePlaceSVG)

document.getElementById("firePlace-svg").addEventListener("mouseout", mouseOutFirePlaceSVG)
document.getElementById("firePlacePath").addEventListener("mouseout", mouseOutFirePlaceSVG)

document.getElementById("firePlacePath").addEventListener("click", clickFirePlaceSVG)
document.getElementById("firePlace-svg").addEventListener("click", clickFirePlaceSVG)

function mouseOverFirePlaceSVG() {
  document.getElementById("firePlacePath").style.fill= "hsl(0,0%,100%)"
  document.getElementById("firePlace-svg").style.backgroundColor= "hsl(193.9,97.5%,31.2%)"
  document.getElementById("firePlace-svg").style.transition =".4s"
}

function mouseOutFirePlaceSVG() {
  document.getElementById("firePlacePath").style.fill= "yellow"
  document.getElementById("firePlace-svg").style.backgroundColor = "#ff0808"
  document.getElementById("firePlace-svg").style.transform = "scale(1)"
  document.getElementById("firePlace-svg").style.transition =".4s"
}

function clickFirePlaceSVG() {
  document.getElementById("firePlace-svg").style.transform = "scale(1.1)"
  document.getElementById("firePlace-svg").style.transition =".4s"

  var ShowForestAudioControls = document.getElementById('forestAudio');
  forestAudio.controls = false;
  var ShowRainAudioControls = document.getElementById('rainAudio');
  rainAudio.controls = false;
  var ShowCoffeeShopAudioControls = document.getElementById('coffeeShopAudio');
  coffeeShopAudio.controls = false;
  var ShowFirePlaceAudioControls = document.getElementById('firePlaceAudio');
  firePlaceAudio.controls = true;
}

// #timer Set //
const minutesDisplay = document.getElementById("min")
const secondsDisplay= document.getElementById("sec")

minutesDisplay.textContent = '00'
secondsDisplay.textContent = '00'

// Controller - Play //
document.getElementById("play-svg").addEventListener("mouseover", mouseOverPlaySVG)
document.getElementById("play-svg").addEventListener("mouseout", mouseOutPlaySVG)

document.getElementById("playPath").addEventListener("mouseover", mouseOverPlaySVG)
document.getElementById("playPath").addEventListener("mouseout", mouseOutPlaySVG)

document.getElementById("play-svg").addEventListener("click", mouseClickPlaySVG)
document.getElementById("forward-svg").addEventListener("click", mouseClickForwardSVG)
document.getElementById("back-svg").addEventListener("click", mouseClickBackSVG)
document.getElementById("pause-svg").addEventListener("click", mouseClickPauseSVG)

let pauseTimerCountUp
function timerCountUp() {
  pauseTimerCountUp = setTimeout (function () {
    let second = Number (secondsDisplay.textContent)
    let minut = Number (minutesDisplay.textContent)

    if (second >= 59) {
      secondsDisplay.textContent = -1
      minutesDisplay.textContent = String (++minutesDisplay.textContent).padStart(2, "0")
    }

    if (minut >= 59) {
      minutesDisplay.textContent = -1
      minutesDisplay.textContent = String (++minutesDisplay.textContent).padStart(2, "0")
    }
    
    secondsDisplay.textContent =  String (++secondsDisplay.textContent).padStart(2, "0")
   
    timerCountUp()
    
  }, 1000)

}
function mouseClickPauseSVG() {
  minutesDisplay.textContent = String (minutesDisplay.textContent).padStart(2, "0")
  secondsDisplay.textContent = String (secondsDisplay.textContent).padStart(2, "0")
  clearTimeout(pauseTimerCountUp)
}

function mouseClickPlaySVG() {
  timerCountUp()
}

function mouseClickForwardSVG() {
  minutesDisplay.textContent = String (++minutesDisplay.textContent).padStart(2, "0")
}

function mouseClickBackSVG() {
  minutesDisplay.textContent = String (--minutesDisplay.textContent).padStart(2, "0")

  if (minutesDisplay.textContent <=-1){
    minutesDisplay.textContent = "00"
  }
}

function mouseOverPlaySVG() {
  document.getElementById("play-svg").style.fill= "#7CFC00"
  document.getElementById("playPath").style.fill= "green"
}

function mouseOutPlaySVG() {
  document.getElementById("play-svg").style.fill = "hsl(240,9.1%,89.2%)"
  document.getElementById("playPath").style.fill= "#993399"
}

// Controller - Pause //
document.getElementById("pause-svg").addEventListener("mouseover", mouseOverPauseSVG)
document.getElementById("pause-svg").addEventListener("mouseout", mouseOutPauseSVG)

document.getElementById("pausePath").addEventListener("mouseover", mouseOverPauseSVG)
document.getElementById("pausePath").addEventListener("mouseout", mouseOutPauseSVG)

function mouseOverPauseSVG() {
  document.getElementById("pause-svg").style.fill= "hsl(193.9,97.5%,31.2%)"
  document.getElementById("pausePath").style.fill= "red"
}

function mouseOutPauseSVG() {
  document.getElementById("pause-svg").style.fill = "hsl(240,9.1%,89.2%)"
  document.getElementById("pausePath").style.fill= "#993399"
}

// Controller - Forward //
document.getElementById("forward-svg").addEventListener("mouseover", mouseOverForwardSVG)
document.getElementById("forward-svg").addEventListener("mouseout", mouseOutForwardSVG)

document.getElementById("forwardPath").addEventListener("mouseover", mouseOverForwardSVG)
document.getElementById("forwardPath").addEventListener("mouseout", mouseOutForwardSVG)

function mouseOverForwardSVG() {
  document.getElementById("forward-svg").style.fill= "hsl(193.9,97.5%,31.2%)"
  document.getElementById("forwardPath").style.fill= "brown"
}

function mouseOutForwardSVG() {
  document.getElementById("forward-svg").style.fill = "hsl(240,9.1%,89.2%)"
  document.getElementById("forwardPath").style.fill= "#993399"
}

// Controller - Back //
document.getElementById("back-svg").addEventListener("mouseover", mouseOverBackSVG)
document.getElementById("back-svg").addEventListener("mouseout", mouseOutBackSVG);

document.getElementById("backPath").addEventListener("mouseover", mouseOverBackSVG)
document.getElementById("backPath").addEventListener("mouseout", mouseOutBackSVG)

function mouseOverBackSVG() {
  document.getElementById("back-svg").style.fill= "hsl(193.9,97.5%,31.2%)"
  document.getElementById("backPath").style.fill= "#ff9d00"
}

function mouseOutBackSVG() {
  document.getElementById("back-svg").style.fill = "hsl(240,9.1%,89.2%)"
  document.getElementById("backPath").style.fill= "#993399"
}