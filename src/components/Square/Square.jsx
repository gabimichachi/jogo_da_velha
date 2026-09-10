import styles from "./Square.module.css";

// cria o quadrado
function Square({ value, onClick, isWinner }) {
  return (
    <button
      className={`${styles.square} ${
        isWinner ? styles.squareWinner : ""
      }`}
      onClick={onClick}
      aria-label={
        value
          ? `Posição marcada com ${value}`
          : "Posição vazia"
      }
    >
      {value}
    </button>
  );
}

export default Square;