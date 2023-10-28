let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

function makeMove(cellIndex) {
    if (gameBoard[cellIndex] === '' && gameActive) {
        gameBoard[cellIndex] = currentPlayer;
        document.getElementById(`cell-${cellIndex}`).innerText = currentPlayer;
        
        if (checkWin()) {
            document.getElementById('status').innerText = `Player ${currentPlayer} wins!`;
            gameActive = false;
        } else if (gameBoard.every(cell => cell !== '')) {
            document.getElementById('status').innerText = "It's a draw!";
            gameActive = false;
        } else {
            currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
            document.getElementById('status').innerText = `Player ${currentPlayer}'s turn`;
        }
    }
}

function checkWin() {
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let condition of winConditions) {
        const [a, b, c] = condition;
        if (gameBoard[a] === currentPlayer && gameBoard[b] === currentPlayer && gameBoard[c] === currentPlayer) {
            return true;
        }
    }

    return false;
}

function resetBoard() {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    currentPlayer = 'X';
    document.getElementById('status').innerText = "Player X's turn";

    // Clear the board cells
    for (let i = 0; i < 9; i++) {
        document.getElementById(`cell-${i}`).innerText = '';
    }
}
