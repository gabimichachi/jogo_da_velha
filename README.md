# 🎀 ❌⭕ Jogo da Velha (Tic-Tac-Toe)

Um projeto superfofo de **Jogo da Velha** desenvolvido em **React com Vite**! O objetivo é praticar a criação de componentes, manipulação de estado e estilização modular com um visual encantador e bem organizado. 💖

---

## 🌸 Objetivo do Projeto

Construir uma aplicação interativa aplicando conceitos essenciais do desenvolvimento Front-end:

* Componentização modular e reativa
* Gerenciamento de estado (`useState`) e passagem de propriedades (`props`)
* Lógica de jogo e imutabilidade
* Estilização organizada usando CSS Modules e Bootstrap

Além da prática dos conceitos apresentados em aula, o projeto busca desenvolver uma aplicação organizada, reutilizável e de fácil manutenção.

---

## 🛍️ Tecnologias e Ferramentas

* **[React](https://react.dev/)**: Biblioteca para construção de interfaces reativas.
* **[Vite](https://vitejs.dev/)**: Ferramenta leve e rápida para desenvolvimento.
* **CSS Modules**: Estilização escopada para manter os estilos isolados por componente.
* **Bootstrap**: Estruturação prática e rápida da interface.

---

## 🌷 Linguagens Utilizadas

* **JavaScript (ES6+)**: Lógica reativa do jogo.
* **HTML5**: Estruturação da página via JSX.
* **CSS3**: Estilos e personalizações visuais.

---

## 🎮 Funcionalidades

O projeto possui as seguintes funcionalidades:

* ❌ Jogador X e ⭕ Jogador O
* 👤 Personalização dos nomes dos jogadores
* 🎯 Tabuleiro interativo com 9 posições
* 🏆 Identificação automática do vencedor
* 🤝 Identificação de empate
* 📊 Placar com vitórias de cada jogador e quantidade de empates
* 🔄 Reinício da partida
* 🎀 Reinício completo do jogo
* 🏅 Sistema de partidas
* 🔢 Definição da quantidade de partidas
* 📱 Interface responsiva
* ♿ Recursos de acessibilidade nos elementos interativos

---

## 🧩 Componentização

O projeto foi dividido em componentes para facilitar a organização, reutilização e manutenção do código.

### 📁 Principais componentes

* **Game**: Componente principal responsável pelo gerenciamento do jogo, estados e regras.
* **Board**: Responsável pela criação e organização do tabuleiro.
* **Square**: Representa cada casa individual do tabuleiro.
* **Placar**: Exibe a pontuação dos jogadores e a quantidade de empates.

Essa divisão permite que cada componente tenha uma responsabilidade específica, seguindo o princípio de organização e reutilização de componentes no React.

---

## 🧠 Conceitos de React Aplicados

Durante o desenvolvimento foram utilizados conceitos importantes do React, como:

### `useState`

Utilizado para controlar informações que podem ser alteradas durante a execução da aplicação, como:

* Estado das casas do tabuleiro
* Jogador atual
* Nome dos jogadores
* Placar
* Partida atual
* Quantidade total de partidas
* Estado de início e finalização do jogo

### `props`

Utilizado para transmitir informações e funções entre os componentes.

Por exemplo, o componente `Board` recebe as informações do tabuleiro e uma função para controlar o clique em cada casa.

### ♻️ Imutabilidade

As alterações do estado são realizadas criando novos valores em vez de modificar diretamente o estado existente, seguindo uma das boas práticas de desenvolvimento com React.

---

## 🏆 Sistema de Partidas e Placar

O jogo possui um sistema de partidas que permite definir previamente a quantidade de partidas que serão realizadas.

Durante o jogo, o placar registra:

* ❌ Vitórias do Jogador X
* ⭕ Vitórias do Jogador O
* 🤝 Quantidade de empates

Ao final das partidas, o sistema identifica o jogador vencedor de acordo com a pontuação acumulada.

Em caso de empate durante uma partida, a aplicação apresenta a mensagem **"Deu Velha!"** e permite iniciar uma nova partida.

---

## 🎨 Estilização

A interface foi desenvolvida utilizando **CSS Modules**, permitindo que os estilos de cada componente sejam isolados.

O projeto também utiliza uma identidade visual baseada em cores suaves e elementos fofos, buscando tornar a experiência de utilização mais agradável e intuitiva. 🎀

O **Bootstrap** é utilizado como apoio para a estruturação e responsividade da interface.

---

## 📱 Responsividade

A aplicação foi desenvolvida pensando em diferentes tamanhos de tela, permitindo que o jogo seja utilizado tanto em computadores quanto em dispositivos com telas menores.

A utilização do Bootstrap auxilia na construção de uma interface adaptável e organizada.

---

## ♿ Acessibilidade

Foram aplicadas algumas práticas de acessibilidade nos elementos interativos da aplicação.

Entre elas:

* Uso de `aria-label` nos quadrados do tabuleiro
* Identificação das casas vazias e preenchidas
* Botões com funções específicas
* Estrutura organizada dos componentes

Essas práticas ajudam tecnologias assistivas a compreenderem melhor os elementos da interface.

---

## 🎀 Como Baixar e Executar Localmente

### 1. Clonar o repositório

```bash
git clone https://github.com/gabimichachi/jogo_da_velha
```

### 2. Entrar na pasta do projeto

```bash
cd jogo_da_velha
```

### 3. Instalar as dependências

```bash
npm install
```

### 4. Executar o projeto

```bash
npm run dev
```

Depois disso, o Vite irá disponibilizar um endereço local para acessar a aplicação pelo navegador.

---

## 📂 Estrutura do Projeto

Uma possível organização dos principais arquivos do projeto é:

```text
jogo_da_velha/
│
├── src/
│   ├── components/
│   │   ├── Board/
│   │   │   ├── Board.jsx
│   │   │   └── Board.module.css
│   │   │
│   │   ├── Game/
│   │   │   ├── Game.jsx
│   │   │   └── Game.module.css
│   │   │
│   │   ├── Placar/
│   │   │   ├── Placar.jsx
│   │   │   └── Placar.module.css
│   │   │
│   │   └── Square/
│   │       ├── Square.jsx
│   │       └── Square.module.css
│   │
│   ├── styles/
│   │   └── variables.css
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
└── README.md
```

---

## 💡 Aprendizados

O desenvolvimento deste projeto possibilitou colocar em prática conhecimentos relacionados ao desenvolvimento Front-end, principalmente:

* Criação e reutilização de componentes React
* Gerenciamento de estados
* Comunicação entre componentes por meio de `props`
* Desenvolvimento de lógica condicional
* Manipulação de arrays
* Imutabilidade de dados
* Organização de projetos
* Utilização de CSS Modules
* Utilização do Bootstrap
* Desenvolvimento de interfaces responsivas
* Aplicação de conceitos básicos de acessibilidade

---

## 👩‍💻 Autora

Desenvolvido por **Gabrielli Michachi** como projeto acadêmico para prática e aplicação dos conceitos de desenvolvimento Front-end.

---

## 💖 Considerações Finais

O projeto **Jogo da Velha** foi desenvolvido com o objetivo de transformar um jogo simples em uma aplicação completa, utilizando boas práticas de desenvolvimento Front-end.

Além da implementação da lógica tradicional do Jogo da Velha, foram adicionados recursos como **personalização dos jogadores, sistema de partidas, placar, identificação de vencedor, empates e reinício do jogo**, permitindo aplicar diferentes conceitos estudados durante o desenvolvimento.

O projeto demonstra, na prática, como o React pode ser utilizado para criar aplicações interativas, componentizadas, organizadas e responsivas.
