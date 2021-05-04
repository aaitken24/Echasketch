const gridContainer = document.querySelector("#grid-container");
let numOfTimes = 256;
let userColor = prompt("What color do you want?")
for (let i =0; i<numOfTimes; i++) {
    const singleCell = document.createElement("div")
    singleCell.textContent = "Hello?";
    singleCell.style.color = "White";
    singleCell.classList.add('blackBackground', 'alignmentClass')
    singleCell.addEventListener('click', () => {
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
    });
    gridContainer.appendChild(singleCell);
}