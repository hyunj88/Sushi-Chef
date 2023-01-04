let modal = document.getElementById('myModal')

// Grab the button that opens the modal
let btnInstruc = document.getElementById('myInstructions')

// Grab the <span> element that closes the modal
let span = document.getElementsByClassName('close')[0]

// When the user clicks the button, open the popup window 
btnInstruc.onclick =() => {
    modal.style.display = 'block'
}

// When the user clicks on <span> (x), close the popup
span.onclick = () => {
    modal.style.display = 'none'
}

// When the user clicks anywhere outside of the popup window, close it
window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = 'none'
    }
}

// Grab the button that starts the game 
const btnStart = document.getElementById('gameStart')

//Listen for when users clicks the start button
btnStart.addEventListener('click', OnStart)

// when user clicks on the start button hide the start and instruction buttons
function OnStart() {
    btnStart.style.display = 'none'
    btnInstruc.style.display = 'none'
}

let arrayOrders = ['sake', 'maguro', 'unagi', 'uni', 'kani', 'ebi', 'tamago', 'ikura']

fo