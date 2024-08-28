document.addEventListener('DOMContentLoaded', () => {
    const cells = document.querySelectorAll('.cell');
    const messageDiv = document.getElementById('message');
    let currentPlayer = 'X';
    let gameBoard = ['', '', '', '', '', '', '', '', ''];

    cells.forEach(cell => {
        cell.addEventListener('click', (e) => {
            const index = e.target.getAttribute('data-index');
            if (gameBoard[index] === '' && !checkWinner()) {
                gameBoard[index] = currentPlayer;
                e.target.textContent = currentPlayer;
                e.target.classList.add(currentPlayer);
                if (checkWinner()) {
                    messageDiv.textContent = `${currentPlayer} wins! 🎉`;
                    messageDiv.classList.add('emoji');
                } else if (!gameBoard.includes('')) {
                    messageDiv.textContent = 'It\'s a tie! 🤝';
                }
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        });
    });

    function checkWinner() {
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6] // Diagonals
        ];
        for (const pattern of winPatterns) {
            const [a, b, c] = pattern;
            if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
                return true;
            }
        }
        return false;
    }
});
