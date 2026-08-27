import Square from "../Square/Square";
import styles from "./Board.module.css";

function Board({ squares, onSquareClick }) {
  return (
    <div className={styles.board}>
      {squares.map((square, index) => (
        <Square
          key={index}
          value={square}
          onClick={() => onSquareClick(index)}
        />
      ))}
    </div>
  );
}

export default Board;