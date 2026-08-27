import { useState } from "react";
import Board from "../Board/Board";
import Placar from "../Placar/Placar";
import styles from "./Game.module.css";

function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const [placar, setPlacar] = useState({
    x: 0,
    o: 0,
    empates: 0,
  });

  const calculateWinner = (squares) => {
    const linhas = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const [a, b, c] of linhas) {
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }

    return null;
  };

  const winner = calculateWinner(squares);

  const isDraw =
    !winner &&
    squares.every((square) => square !== null);

  function handleClick(index) {
    if (squares[index] || winner || isDraw) {
      return;
    }

    const nextSquares = [...squares];

    nextSquares[index] = xIsNext ? "X" : "O";

    const nextWinner = calculateWinner(nextSquares);

    const nextIsDraw =
      !nextWinner &&
      nextSquares.every((square) => square !== null);

    setSquares(nextSquares);

    if (nextWinner === "X") {
      setPlacar((placarAtual) => ({
        ...placarAtual,
        x: placarAtual.x + 1,
      }));
    } else if (nextWinner === "O") {
      setPlacar((placarAtual) => ({
        ...placarAtual,
        o: placarAtual.o + 1,
      }));
    } else if (nextIsDraw) {
      setPlacar((placarAtual) => ({
        ...placarAtual,
        empates: placarAtual.empates + 1,
      }));
    }

    if (!nextWinner && !nextIsDraw) {
      setXIsNext(!xIsNext);
    }
  }

  function reiniciarJogo() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  }

  let status;

  if (winner) {
    status = `Vencedor: ${winner}`;
  } else if (isDraw) {
    status = "Deu Velha!";
  } else {
    status = `Próximo jogador: ${xIsNext ? "X" : "O"}`;
  }

  return (
    <main className={styles.game}>
      <div className="container">
        <div className={styles.game__conteudo}>
          <h1 className={styles.game__titulo}>Jogo da Velha</h1>

          <Placar placar={placar} />

          <p className={styles.game__status}>
            {status}
          </p>

          <Board
            squares={squares}
            onSquareClick={handleClick}
          />

          <button
            className={`btn btn-primary ${styles.game__botao}`}
            onClick={reiniciarJogo}
          >
            Reiniciar Partida
          </button>
        </div>
      </div>
    </main>
  );
}

export default Game;