import styles from "./Placar.module.css";

// mostra o placar
function Placar({ placar, playerX, playerO }) {
  return (
    <section className={styles.placar}>
      
      <h2 className={styles.placar__titulo}>
        Placar
      </h2>

      <div className={styles.placar__itens}>

        {/* jogador x */}
        <div className={styles.placar__item}>
          <span>{playerX || "Jogador X"}</span>
          <strong>{placar.x}</strong>
        </div>

        {/* empates */}
        <div className={styles.placar__item}>
          <span>Empates</span>
          <strong>{placar.empates}</strong>
        </div>

        {/* jogador o */}
        <div className={styles.placar__item}>
          <span>{playerO || "Jogador O"}</span>
          <strong>{placar.o}</strong>
        </div>

      </div>
    </section>
  );
}

export default Placar;