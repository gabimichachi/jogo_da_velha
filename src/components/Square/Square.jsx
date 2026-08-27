import styles from "./Square.module.css";

function Square({ value, onClick }) {
  return (
    <button
      className={styles.square}
      onClick={onClick}
      aria-label={value ? `Posição marcada com ${value}` : "Posição vazia"}
    >
      {value}
    </button>
  );
}

export default Square;