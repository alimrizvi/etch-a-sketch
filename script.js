const changeColor = function (e) {
    e.target.style.background = 'red'
    squresTagged+=1
    if (squresTagged==1) {
        hideSlider()
        showResetButton()
    }
}

const deleteBoard = function() {
    board = document.querySelector('.board-container')
    board.remove()
}

const showSlider = function showSlider(boardLength) {
    const sliderContainer = document.createElement('div')
    sliderContainer.classList.add('slider-container')
    const newSlider = document.createElement('input')
    newSlider.classList.add('slider')
    newSlider.setAttribute('type','range')
    newSlider.setAttribute('min','4')
    newSlider.setAttribute('max','100')
    newSlider.setAttribute('step','4')
    newSlider.setAttribute('value',boardLength)
    const promptText = document.createElement('p')
    promptText.textContent = 'Select size of the board!'
    const sizeText = document.createElement('p')
    sizeText.classList.add('slider-value')
    sizeText.textContent = `Current Size: ${boardLength} X ${boardLength}`

    sliderContainer.appendChild(promptText)
    sliderContainer.appendChild(newSlider)
    sliderContainer.appendChild(sizeText)
    optionsContainer.appendChild(sliderContainer)
    let slider = document.querySelector('.slider')
    let sliderOutput = document.querySelector('.slider-value')
    sliderOutput.textContent = `Current Size: ${slider.value} X ${slider.value}`

    slider.oninput = function() {
        sliderOutput.textContent = `Current Size: ${slider.value} X ${slider.value}`
        deleteBoard()
        drawBoard(slider.value)
  }
}

const showResetButton = function () {
    const resetContainer = document.createElement('div')
    resetContainer.classList.add('reset-container')
    const promptText = document.createElement('p')
    promptText.textContent = 'Click below to reset the board!'
    resetButton = document.createElement('button')
    resetButton.textContent = 'Reset'
    resetButton.addEventListener("click",clearBoard)
    resetContainer.appendChild(promptText)
    resetContainer.appendChild(resetButton)
    optionsContainer.appendChild(resetContainer)
}

const hideResetButton = function () {
    const resetContainer = document.querySelector('.reset-container')
    resetContainer.remove()
}

const hideSlider = function () {
    const sliderContainer = document.querySelector('.slider-container')
    sliderContainer.remove()
}

const clearBoard = function () {
    const boardContainer = document.querySelector('.board-container')
    boardContainer.remove()
    squresTagged = 0
    hideResetButton()
    showSlider(boardLength)
    drawBoard(boardLength)
}

const drawBoard = function (boardLength) {
    const board = document.createElement('div')
    board.classList.add('board-container')
    mainBody.appendChild(board)
    squareWidth = board.offsetWidth/boardLength
    for (let x=0;x<boardLength;x++) {
        squares.push([])
        for (let y=0;y<boardLength;y++) {
            let tempSquare = document.createElement('div')
            tempSquare.classList.add("board-square")
            tempSquare.style.minWidth = squareWidth+'px'
            tempSquare.addEventListener('mouseover',changeColor)
            board.appendChild(tempSquare)
            squares[x].push(board)
        }
    }
}

boardLength = 16
const squares = []
let squresTagged = 0

const mainBody = document.querySelector('.main-body')
const optionsContainer = document.querySelector('.options-container')

showSlider(boardLength)
drawBoard(boardLength)

// let slider = document.querySelector('.slider')
// let sliderOutput = document.querySelector('.slider-value')
// sliderOutput.textContent = `Current Size: ${slider.value} X ${slider.value}`

// slider.oninput = function() {
//     sliderOutput.textContent = `Current Size: ${slider.value} X ${slider.value}`
//     deleteBoard()
//     drawBoard(slider.value)
//   }
