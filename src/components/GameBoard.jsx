import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({switchTurn, activePlayerSymbol}) {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  const clickHandler = (rowIndex, colIndex) => {
    setGameBoard((prevGameBoard) => {
      const updatedGameboard = [
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ];
      updatedGameboard[rowIndex][colIndex] = activePlayerSymbol;
      return updatedGameboard;
    });
    switchTurn();
  };
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => clickHandler(rowIndex, colIndex)}>
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
