import Square from "../Square/Square";
import styles from "./Board.module.css";

// cria o tabuleiro
function Board({ squares, onSquareClick, winningLine }) {
  return (
    <div className={styles.board}>
      {squares.map((square, index) => (
        <Square
          key={index}
          value={square}
          onClick={() => onSquareClick(index)}
          isWinner={winningLine.includes(index)}
        />
      ))}
    </div>
  );
}

export default Board;