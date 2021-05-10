const gridContainer = document.querySelector("#grid-container");
let numOfTimes = 279;
let userColor = "red";
let colorMessage = "On"
let isColorOn = true;
function changeToRed() {
    userColor = "red"
}
function changeToGreen() {
    userColor = "green"
}
function changeToBlue() {
    userColor = "blue"
}
function changeToYellow() {
    userColor = "yellow"
}
function changeToPink() {
    userColor = "pink"
}
function changeToPurple() {
    userColor = "purple"
}
function changeToWhite() {
    userColor = "white"
}
function changeToBlack() {
    userColor = "black"
}
function turnColorOff() {
    isColorOn = false
    colorMessage = " Off"
}
function turnColorOn() {
    isColorOn = true
    colorMessage = " On"
}
for (let i =0; i<numOfTimes; i++) {
    const singleCell = document.createElement("div")
    singleCell.classList.add('blackBackground', 'alignmentClass', 'cell')
    singleCell.addEventListener('mouseover', () => {
    if (isColorOn) {
        if (userColor == "green") {
            singleCell.classList.remove('redBackground', 'greenBackground', 'blueBackground', 'purpleBackground', 'yellowBackground', 'pinkBackground', 'whiteBackground', 'blackBackground')
            singleCell.classList.add("greenBackground")
        }
        else if (userColor == "red") {
            singleCell.classList.remove('redBackground', 'greenBackground', 'blueBackground', 'purpleBackground', 'yellowBackground', 'pinkBackground', 'whiteBackground', 'blackBackground')
            singleCell.classList.add("redBackground")
        }
        else if (userColor == "blue") {
            singleCell.classList.remove('redBackground', 'greenBackground', 'blueBackground', 'purpleBackground', 'yellowBackground', 'pinkBackground', 'whiteBackground', 'blackBackground')
            singleCell.classList.add("blueBackground")
        }
        else if (userColor == "purple") {
            singleCell.classList.remove('redBackground', 'greenBackground', 'blueBackground', 'purpleBackground', 'yellowBackground', 'pinkBackground', 'whiteBackground', 'blackBackground')
            singleCell.classList.add("purpleBackground")
        }
        else if (userColor == "yellow") {
            singleCell.classList.remove('redBackground', 'greenBackground', 'blueBackground', 'purpleBackground', 'yellowBackground', 'pinkBackground', 'whiteBackground', 'blackBackground')
            singleCell.classList.add("yellowBackground")
        }
        else if (userColor == "pink") {
            singleCell.classList.remove('redBackground', 'greenBackground', 'blueBackground', 'purpleBackground', 'yellowBackground', 'pinkBackground', 'whiteBackground', 'blackBackground')
            singleCell.classList.add("pinkBackground")
        }
        else if (userColor == "white") {
            singleCell.classList.remove('redBackground', 'greenBackground', 'blueBackground', 'purpleBackground', 'yellowBackground', 'pinkBackground', 'whiteBackground', 'blackBackground')
            singleCell.classList.add("whiteBackground")
        }
        else if (userColor == "black") {
            singleCell.classList.remove('redBackground', 'greenBackground', 'blueBackground', 'purpleBackground', 'yellowBackground', 'pinkBackground', 'whiteBackground', 'blackBackground')
            singleCell.classList.add("blackBackground")
        }
    }
    });
    singleCell.addEventListener('click', () => {
        if (isColorOn) {
            turnColorOff();
            colorMessageFunction();
        }
        else if (isColorOn == false) {
            turnColorOn();
            colorMessageFunction();
        }
    })
    gridContainer.appendChild(singleCell);
}
const colorButtonRed = document.querySelector("#redColorButton")
colorButtonRed.addEventListener('click', () => {
        changeToRed();
        console.log(userColor)
})
const colorButtonGreen = document.querySelector("#greenColorButton")
colorButtonGreen.addEventListener('click', () => {
    changeToGreen();
    console.log(userColor)
})
const colorButtonBlue = document.querySelector("#blueColorButton")
colorButtonBlue.addEventListener('click', () => {
    changeToBlue();
    console.log(userColor)
})
const colorButtonYellow = document.querySelector("#yellowColorButton")
colorButtonYellow.addEventListener('click', () => {
    changeToYellow();
    console.log(userColor)
})
const colorButtonPink = document.querySelector("#pinkColorButton")
colorButtonPink.addEventListener('click', () => {
    changeToPink();
    console.log(userColor)
})
const colorButtonPurple = document.querySelector("#purpleColorButton")
colorButtonPurple.addEventListener('click', () => {
    changeToPurple();
    console.log(userColor)
})
const colorButtonWhite = document.querySelector("#whiteColorButton")
colorButtonWhite.addEventListener('click', () => {
    changeToWhite();
    console.log(userColor)
})
const colorButtonBlack = document.querySelector("#blackColorButton")
colorButtonBlack.addEventListener('click', () => {
    changeToBlack();
    console.log(userColor)
})
function colorMessageFunction (){
    document.getElementById("colorOnText").innerHTML = colorMessage;
}
colorMessageFunction();