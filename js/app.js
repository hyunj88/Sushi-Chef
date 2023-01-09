// Grab the button that starts the game 
// let btnStart = document.getElementById('gameStart')

//Listen for when users clicks the start button
// btnStart.addEventListener('click', onStart)

// when user clicks on the start button hide the start and instruction buttons. Display game container and order display.
// function onStart() {
//     btnStart.style.display = 'none'
//     btnInstruc.style.display = 'none'
//     orderDisplay.style.display = 'block'
//     gameContainer.style.display = 'grid'
// }

let modal = document.getElementById('myModal')

// Grab the button that opens the modal
let btnInstruc = document.getElementById('myInstructions')

// Grab the <span> element that closes the modal
let span = document.getElementsByClassName('close')[0]

// When the user clicks the button, open the popup window 
btnInstruc.onclick = () => {
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

let gameContainer = document.getElementById('gamecontainer')
let orderDisplay = document.getElementById('order-display')
let btnPlayAgain = document.getElementById('playagainbtn')

btnPlayAgain.onclick = () => {
    location.reload()
}

// new order array
let orderArray = ['Sake', 'Maguro', 'Unagi', 'Uni', 'Kani', 'Ebi', 'Tamago', 'Ikura']

let randomOrder = orderArray[Math.floor(Math.random() * orderArray.length)]
    
// display random new order in the order-display area
let newOrder = document.createElement('p');
newOrder.innerHTML = randomOrder
document.getElementById('order-display').appendChild(newOrder)
console.log(randomOrder)
    
// grab images from html
let sakeSushi = document.getElementById('Sake')
let maguroSushi = document.getElementById('Maguro')
let tamagoSushi = document.getElementById('Tamago')
let kaniSushi = document.getElementById('Kani')
let ebiSushi = document.getElementById('Ebi')
let unagiSushi = document.getElementById('Unagi')
let ikuraSushi = document.getElementById('Ikura')
let uniSushi = document.getElementById('Uni')
    
// check for image and word matches
sakeSushi.onclick = () => {
    if(sakeSushi.id === randomOrder) {
        alert ('order is correct')
        btnNext.style.display = 'inline-block'
    } else {
        alert ('Sorry, the order is incorrect. GAME OVER')
        btnPlayAgain.style.display = 'inline-block'
    }
}
    
// check for image and word matches
maguroSushi.onclick = () => {
    if(maguroSushi.id === randomOrder) {
        alert ('order is correct')
        btnNext.style.display = 'inline-block'
    } else {
        alert ('Sorry, the order is incorrect. GAME OVER')
        btnPlayAgain.style.display = 'inline-block'
    }
}
    
// check for image and word matches
tamagoSushi.onclick = () => {
    if(tamagoSushi.id === randomOrder) {
        alert ('order is correct')
        btnNext.style.display = 'inline-block'
    } else {
        alert ('Sorry, the order is incorrect. GAME OVER')
        btnPlayAgain.style.display = 'inline-block'
    }
}
    
// check for image and word matches
kaniSushi.onclick = () => {
    if(kaniSushi.id === randomOrder) {
        alert ('order is correct')
        btnNext.style.display = 'inline-block'
    } else {
        alert ('Sorry, the order is incorrect. GAME OVER')
        btnPlayAgain.style.display = 'inline-block'
    }
}
    
// check for image and word matches
ebiSushi.onclick = () => {
    if(ebiSushi.id === randomOrder) {
        alert ('order is correct')
        btnNext.style.display = 'inline-block'
    } else {
        alert ('Sorry, the order is incorrect. GAME OVER')
        btnPlayAgain.style.display = 'inline-block'
    }
}
    
// check for image and word matches
unagiSushi.onclick = () => {
    if(unagiSushi.id === randomOrder) {
        alert ('order is correct')
        btnNext.style.display = 'inline-block'
    } else {
        alert ('Sorry, the order is incorrect. GAME OVER')
        btnPlayAgain.style.display = 'inline-block'
    }
}
    
// check for image and word matches
ikuraSushi.onclick = () => {
    if(ikuraSushi.id === randomOrder) {
        alert ('order is correct')
        btnNext.style.display = 'inline-block'
    } else {
        alert ('Sorry, the order is incorrect. GAME OVER')
        btnPlayAgain.style.display = 'inline-block'
    }
}
    
// check for image and word matches
uniSushi.onclick = () => {
    if(uniSushi.id === randomOrder) {
        alert ('order is correct')
        btnNext.style.display = 'inline-block'
    } else {
        alert ('Sorry, the order is incorrect. GAME OVER')
        btnPlayAgain.style.display = 'inline-block'
    }
}

// grab next button element
let btnNext = document.getElementById('nextbutton')

// randomize and display new sushi order
btnNext.onclick = () => {
    // let randomOrder = orderArray[Math.floor(Math.random() * orderArray.length)]
    // newOrder.innerHTML = randomOrder
    // document.getElementById('order-display').appendChild(newOrder)
    score++
    btnNext.style.display = 'none'
    console.log(randomOrder)
    location.reload()
}

// let score = 0
// let gameIsOver = (score) => {
//     if (score === 8) {
//         alert ('Congratulations! You completed all the orders!')
//         return true
//     }   
// }