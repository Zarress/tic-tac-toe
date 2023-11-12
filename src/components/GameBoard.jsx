export default function GameBoard({ switchTurn, board }) {

  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // const clickHandler = (rowIndex, colIndex) => {
  //   setGameBoard((prevGameBoard) => {
  //     const updatedGameboard = [
  //       ...prevGameBoard.map((innerArray) => [...innerArray]),
  //     ];
  //     updatedGameboard[rowIndex][colIndex] = activePlayerSymbol;
  //     return updatedGameboard;
  //   });
  //   switchTurn();
  // };
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => switchTurn(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
