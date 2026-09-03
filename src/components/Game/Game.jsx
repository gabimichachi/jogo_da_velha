import { useState } from "react";
import Board from "../Board/Board";
import Placar from "../Placar/Placar";
import styles from "./Game.module.css";

function Game() {
  // casas do tabuleiro
  const [squares, setSquares] = useState(Array(9).fill(null));

  // vez do jogador
  const [xIsNext, setXIsNext] = useState(true);

  // nomes dos jogadores
  const [playerX, setPlayerX] = useState("Jogador X");
  const [playerO, setPlayerO] = useState("Jogador O");

  // quantidade de partidas
  const [totalPartidas, setTotalPartidas] = useState(3);

  // partida atual
  const [partidaAtual, setPartidaAtual] = useState(1);

  // verifica se o jogo começou
  const [jogoIniciado, setJogoIniciado] = useState(false);

  // verifica se o jogo terminou
  const [jogoFinalizado, setJogoFinalizado] = useState(false);

  // vencedor do campeonato
  const [vencedorFinal, setVencedorFinal] = useState(null);

  // placar dos jogadores
  const [placar, setPlacar] = useState({
    x: 0,
    o: 0,
    empates: 0,
  });

  // verifica o vencedor
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

  // verifica se deu velha
  const isDraw =
    !winner &&
    squares.every((square) => square !== null);

  // inicia o jogo
  function iniciarJogo() {
    setJogoIniciado(true);
    setJogoFinalizado(false);
    setPartidaAtual(1);

    setSquares(Array(9).fill(null));
    setXIsNext(true);

    setPlacar({
      x: 0,
      o: 0,
      empates: 0,
    });

    setVencedorFinal(null);
  }

  // quando clicar no quadrado
  function handleClick(index) {
    if (!jogoIniciado || jogoFinalizado) {
      return;
    }

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

    // atualiza o placar
    let novoPlacar = placar;

    if (nextWinner === "X") {
      novoPlacar = {
        ...placar,
        x: placar.x + 1,
      };

      setPlacar(novoPlacar);
    }

    else if (nextWinner === "O") {
      novoPlacar = {
        ...placar,
        o: placar.o + 1,
      };

      setPlacar(novoPlacar);
    }

    // conta os empates
    else if (nextIsDraw) {
      novoPlacar = {
        ...placar,
        empates: placar.empates + 1,
      };

      setPlacar(novoPlacar);
    }

    // verifica se acabou
    if (nextWinner || nextIsDraw) {
      if (partidaAtual === totalPartidas) {

        // define o vencedor final
        if (novoPlacar.x > novoPlacar.o) {
          setVencedorFinal("X");
        } else if (novoPlacar.o > novoPlacar.x) {
          setVencedorFinal("O");
        } else {
          setVencedorFinal("EMPATE");
        }

        setJogoFinalizado(true);
      }

      return;
    }

    // passa a vez
    setXIsNext(!xIsNext);
  }

  // começa outra partida
  function jogarNovamente() {
    if (jogoFinalizado) {
      return;
    }

    setPartidaAtual((partida) => partida + 1);
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  }

  // reinicia o jogo
  function reiniciarJogo() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);

    setPartidaAtual(1);

    setPlacar({
      x: 0,
      o: 0,
      empates: 0,
    });

    setJogoIniciado(false);
    setJogoFinalizado(false);
    setVencedorFinal(null);

    setPlayerX("Jogador X");
    setPlayerO("Jogador O");
  }

  let status;

  if (!jogoIniciado) {
    status = "Configure o jogo para começar!";
  } else if (jogoFinalizado) {
    status = "Jogo encerrado!";
  } else if (winner) {
    status = `Vencedor(a) da partida: ${
      winner === "X" ? playerX : playerO
    }`;
  } else if (isDraw) {
    status = "Deu Velha!";
  } else {
    status = `Próximo(a) jogador(a): ${
      xIsNext ? playerX : playerO
    }`;
  }

  return (
    <main className={styles.game}>
      <div className="container">
        <div className={styles.game__conteudo}>

          <h1 className={styles.game__titulo}>
            Jogo da Velha
          </h1>

          {/* tela inicial */}
          {!jogoIniciado && (
            <div className={styles.configuracao}>

              <h2>
               Preparem-se para jogar!
              </h2>

              <div className="row g-2 mb-3">

                <div className="col-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Jogador X"
                    value={playerX}
                    onChange={(e) => setPlayerX(e.target.value)}
                  />
                </div>

                <div className="col-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Jogador O"
                    value={playerO}
                    onChange={(e) => setPlayerO(e.target.value)}
                  />
                </div>

              </div>

              <div className="mb-3">

                <label
                  htmlFor="totalPartidas"
                  className="form-label"
                >
                  Quantas partidas você quer jogar?
                </label>

                <input
                  id="totalPartidas"
                  type="number"
                  className="form-control"
                  min="1"
                  max="99"
                  value={totalPartidas}
                  onChange={(e) => {
                    const valor = Number(e.target.value);

                    if (valor >= 1 && valor <= 99) {
                      setTotalPartidas(valor);
                    }
                  }}
                />

              </div>

              <button
                className={`btn btn-primary ${styles.game__botao}`}
                onClick={iniciarJogo}
              >
                Iniciar jogo
              </button>

            </div>
          )}

          {/* jogo */}
          {jogoIniciado && (
            <>
              <p className={styles.game__partida}>
                Partida {partidaAtual} de {totalPartidas}
              </p>

              <Placar
                placar={placar}
                playerX={playerX}
                playerO={playerO}
              />

              <p className={styles.game__status}>
                {status}
              </p>

              <Board
                squares={squares}
                onSquareClick={handleClick}
              />

              {/* botão de reiniciar */}
              <button
                className={`btn btn-primary ${styles.game__botao}`}
                onClick={reiniciarJogo}
              >
                Reiniciar jogo
              </button>

              {/* resultado da partida */}
              {(winner || isDraw) && !jogoFinalizado && (
                <div className={styles.overlay}>
                  <div className={styles.resultado}>

                    <div className={styles.resultado__estrela}>
                      {winner
                        ? "ദ്ദി◝ ⩊ ◜.ᐟ"
                        : "(◞‸ ◟)💧"}
                    </div>

                    <h2>
                      {winner
                        ? "Eba! Você venceu!"
                        : "Poxa! Deu velha!"}
                    </h2>

                    <p>
                      {winner
                        ? `${
                            winner === "X"
                              ? playerX
                              : playerO
                          } ganhou a partida!`
                        : "Ninguém ganhou essa partida!"}
                    </p>

                    <p>
                      Partida {partidaAtual} de {totalPartidas}
                    </p>

                    <button
                      className={styles.resultado__botao}
                      onClick={jogarNovamente}
                    >
                      Próxima partida
                    </button>

                  </div>
                </div>
              )}

              {/* resultado final */}
              {jogoFinalizado && (
                <div className={styles.overlay}>
                  <div className={styles.resultado}>

                    <div className={styles.resultado__estrela}>
                      {vencedorFinal === "EMPATE"
                        ? "(｡•́︿•̀｡)"
                        : "ദ്ദി ˉ͈̀꒳ˉ͈́ )✧"}
                    </div>

                    <h2>
                      {vencedorFinal === "EMPATE"
                        ? "Deu empate!"
                        : "Temos um campeão!"}
                    </h2>

                    {vencedorFinal === "EMPATE" ? (
                      <p>
                        {playerX} e {playerO} terminaram
                        com a mesma pontuação!
                      </p>
                    ) : (
                      <p>
                        <strong>
                          {vencedorFinal === "X"
                            ? playerX
                            : playerO}
                        </strong>{" "}
                        venceu o Jogo!
                      </p>
                    )}

                    <p>
                      {playerX}:{" "}
                      <strong>{placar.x} ponto(s)</strong>
                    </p>

                    <p>
                      {playerO}:{" "}
                      <strong>{placar.o} ponto(s)</strong>
                    </p>

                    <p>
                      Empates:{" "}
                      <strong>{placar.empates}</strong>
                    </p>

                    <button
                      className={styles.resultado__botao}
                      onClick={reiniciarJogo}
                    >
                      Jogar novamente
                    </button>

                  </div>
                </div>
              )}

            </>
          )}

        </div>
      </div>
    </main>
  );
}

export default Game;