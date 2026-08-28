import styles from "./Placar.module.css";

// Recebemos placar, playerX e playerO via desestruturação de props
function Placar({ placar, playerX, playerO }) {
  return (
    <section className={styles.placar}>
      <h2 className={styles.placar__titulo}>Placar Geral</h2>

      <div className={styles.placar__itens}>
        <div className={styles.placar__item}>
          {/* Exibe o nome do Jogador X ou usa o padrão se estiver vazio */}
          <span>{playerX || "Jogador X"}</span>
          <strong>{placar.x}</strong>
        </div>

        <div className={styles.placar__item}>
          <span>Empates</span>
          <strong>{placar.empates}</strong>
        </div>

        <div className={styles.placar__item}>
          {/* Exibe o nome do Jogador O ou usa o padrão se estiver vazio */}
          <span>{playerO || "Jogador O"}</span>
          <strong>{placar.o}</strong>
        </div>
      </div>
    </section>
  );
}

export default Placar;