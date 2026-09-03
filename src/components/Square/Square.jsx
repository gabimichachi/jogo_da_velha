import styles from "./Square.module.css";

// cria o quadrado
function Square({ value, onClick }) {
  return (
    <button
      className={`${styles.square} ${
        value === "X"
          ? styles.squareX
          : value === "O"
          ? styles.squareO
          : ""
      }`}
      onClick={onClick}
      aria-label={value ? `Posição marcada com ${value}` : "Posição vazia"}
    >
      {value}
    </button>
  );
}

export default Square;