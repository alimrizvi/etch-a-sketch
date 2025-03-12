const board = document.querySelector('.board-container')

boardLength = 16
const squares = []

const changeColor = function (e) {
    e.target.style.background = 'red'
}

const drawBoard = function (boardLength) {
    for (let x=0;x<boardLength;x++) {
        squares.push([])
        for (let y=0;y<boardLength;y++) {
            let tempSquare = document.createElement('div')
            tempSquare.classList.add("board-square")
            tempSquare.addEventListener('mouseover',changeColor)
            board.appendChild(tempSquare)
            squares[x].push(board)
        }
    }
}

drawBoard(boardLength)

let slider = document.querySelector('.slider')
let sliderOutput = document.querySelectorAll('.slider-value')
sliderOutput.forEach(function (currentValue) {currentValue.textContent = slider.value})

slider.oninput = function() {
    sliderOutput.forEach(function (currentValue) {currentValue.textContent = slider.value})
  }
