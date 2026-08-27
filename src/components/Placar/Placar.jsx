import styles from "./Placar.module.css";

function Placar({ placar }) {
  return (
    <section className={styles.placar}>
      <h2 className={styles.placar__titulo}>Placar Geral</h2>

      <div className={styles.placar__itens}>
        <div className={styles.placar__item}>
          <span>Jogador X</span>
          <strong>{placar.x}</strong>
        </div>

        <div className={styles.placar__item}>
          <span>Empates</span>
          <strong>{placar.empates}</strong>
        </div>

        <div className={styles.placar__item}>
          <span>Jogador O</span>
          <strong>{placar.o}</strong>
        </div>
      </div>
    </section>
  );
}

export default Placar;