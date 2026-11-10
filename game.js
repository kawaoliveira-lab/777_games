"use strict";

// ======================================
// MISSÃO DO SABER — CÓDIGO DO JOGO
// ======================================

const $ = id => document.getElementById(id);
const canvas = $("game");
const ctx = canvas.getContext("2d");

const WIDTH = canvas.width;
const HEIGHT = canvas.height;
const WORLD_WIDTH = 2300;

// ======================================
// PERGUNTAS
// ======================================

const questions = [
  ["Quanto é 9 × 7?", ["56", "63", "72"], 1, "9 × 7 = 63."],
  ["Qual planeta é conhecido como Planeta Vermelho?", ["Marte", "Vênus", "Saturno"], 0, "Marte tem aparência avermelhada."],
  ["Qual é a capital do Brasil?", ["Salvador", "Brasília", "Rio de Janeiro"], 1, "Brasília é a capital do Brasil."],
  ["Qual órgão bombeia o sangue?", ["Pulmão", "Coração", "Estômago"], 1, "O coração bombeia o sangue."],
  ["Qual é o maior oceano?", ["Atlântico", "Índico", "Pacífico"], 2, "O Pacífico é o maior oceano."],
  ["Qual gás as plantas absorvem na fotossíntese?", ["Oxigênio", "Gás carbônico", "Hélio"], 1, "As plantas absorvem gás carbônico."],
  ["Em que ano ocorreu a Independência do Brasil?", ["1822", "1889", "1500"], 0, "A Independência ocorreu em 1822."],
  ["Qual destas palavras é um adjetivo?", ["Correr", "Azul", "Mesa"], 1, "Azul é um adjetivo."],
  ["Quantos lados tem um hexágono?", ["5", "6", "8"], 1, "Um hexágono tem seis lados."],
  ["Qual é a estrela mais próxima da Terra?", ["Sirius", "Sol", "Vega"], 1, "O Sol é a estrela mais próxima."],
  ["Qual destes animais é mamífero?", ["Tubarão", "Sapo", "Golfinho"], 2, "O golfinho é mamífero."],
  ["Em qual continente fica o Egito?", ["África", "Europa", "Oceania"], 0, "O Egito fica na África."],
  ["Qual é o plural de pão?", ["Pãos", "Pães", "Pãoses"], 1, "O plural de pão é pães."],
  ["A água congela a quantos graus Celsius?", ["0 °C", "10 °C", "100 °C"], 0, "A água congela a 0 °C."],
  ["Qual instrumento mede a temperatura?", ["Régua", "Termômetro", "Bússola"], 1, "O termômetro mede a temperatura."],
  ["Quem foi o primeiro ser humano a pisar na Lua?", ["Yuri Gagarin", "Neil Armstrong", "Santos Dumont"], 1, "Neil Armstrong pisou na Lua em 1969."],
  ["Quantos minutos tem uma hora?", ["30", "60", "100"], 1, "Uma hora tem 60 minutos."],
  ["Qual é o maior animal do planeta?", ["Elefante", "Baleia-azul", "Girafa"], 1, "A baleia-azul é o maior animal conhecido."],
  ["Qual é o satélite natural da Terra?", ["Lua", "Marte", "Sol"], 0, "A Lua é o satélite natural da Terra."],
  ["Qual é o antônimo de quente?", ["Morno", "Frio", "Seco"], 1, "Frio é o antônimo de quente."],
  ["Quantos dias tem uma semana?", ["5", "7", "10"], 1, "Uma semana tem sete dias."],
  ["Qual é a mistura de azul com amarelo?", ["Verde", "Roxo", "Laranja"], 0, "Azul e amarelo formam verde."],
  ["Qual parte da planta absorve água?", ["Folha", "Raiz", "Flor"], 1, "As raízes absorvem água."],
  ["Qual é o resultado de 50 - 18?", ["32", "38", "42"], 0, "50 menos 18 é 32."],
  ["Qual é o idioma oficial do Brasil?", ["Espanhol", "Português", "Inglês"], 1, "O idioma oficial é português."],
  ["Quantos lados tem um triângulo?", ["3", "4", "5"], 0, "Um triângulo tem três lados."],
  ["Qual é o maior continente?", ["Ásia", "Europa", "Oceania"], 0, "A Ásia é o maior continente."],
  ["Qual animal produz mel?", ["Abelha", "Formiga", "Borboleta"], 0, "As abelhas produzem mel."],
  ["Qual é o resultado de 8 × 8?", ["64", "56", "72"], 0, "8 vezes 8 é 64."],
  ["Qual é o estado físico do gelo?", ["Líquido", "Gasoso", "Sólido"], 2, "O gelo é água no estado sólido."],
  ["Qual é o feminino de ator?", ["Atora", "Atriz", "Atorina"], 1, "O feminino de ator é atriz."],
  ["Qual é o principal gás do ar?", ["Oxigênio", "Nitrogênio", "Gás carbônico"], 1, "O nitrogênio compõe a maior parte do ar."],
  ["Qual é o resultado de 12 × 12?", ["124", "144", "132"], 1, "12 vezes 12 é 144."],
  ["Qual destes é um recurso renovável?", ["Vento", "Petróleo", "Carvão"], 0, "O vento é um recurso renovável."],
  ["Qual é o nome do nosso planeta?", ["Marte", "Terra", "Júpiter"], 1, "Vivemos no planeta Terra."],
  ["Quantos graus tem um ângulo reto?", ["45°", "90°", "180°"], 1, "Um ângulo reto mede 90 graus."],
  ["Qual é o animal terrestre mais rápido?", ["Leão", "Guepardo", "Cavalo"], 1, "O guepardo é o mais rápido em terra."],
  ["Em qual região fica o Piauí?", ["Norte", "Nordeste", "Sul"], 1, "O Piauí fica no Nordeste."],
  ["Qual palavra indica uma ação?", ["Substantivo", "Verbo", "Adjetivo"], 1, "O verbo expressa ação ou estado."],
  ["Quantos meses tem um ano?", ["10", "12", "14"], 1, "Um ano tem 12 meses."],
  ["Qual é o maior órgão do corpo humano?", ["Pele", "Coração", "Pulmão"], 0, "A pele é o maior órgão humano."],
  ["Qual é o movimento da Terra em torno do Sol?", ["Rotação", "Translação", "Vibração"], 1, "Translação é o movimento ao redor do Sol."],
  ["Qual sinal termina uma pergunta?", ["Ponto final", "Vírgula", "Interrogação"], 2, "Perguntas usam ponto de interrogação."],
  ["Qual é a metade de 90?", ["35", "45", "50"], 1, "A metade de 90 é 45."],
  ["Qual é a capital de Portugal?", ["Madri", "Lisboa", "Porto"], 1, "Lisboa é a capital de Portugal."],
  ["Quantos segundos tem um minuto?", ["30", "60", "90"], 1, "Um minuto tem 60 segundos."],
  ["Qual destes números é par?", ["13", "17", "24"], 2, "24 é divisível por 2."],
  ["Em qual galáxia está o Sistema Solar?", ["Andrômeda", "Via Láctea", "Olho Negro"], 1, "O Sistema Solar está na Via Láctea."],
  ["Qual parte do corpo usamos para ouvir?", ["Olhos", "Ouvidos", "Nariz"], 1, "Os ouvidos captam os sons."],
  ["Qual é o plural de cidadão?", ["Cidadões", "Cidadãos", "Cidadães"], 1, "O plural é cidadãos."],
  ["Qual é o continente do Brasil?", ["África", "América do Sul", "Europa"], 1, "O Brasil fica na América do Sul."],
  ["Qual destes é um número primo?", ["9", "11", "15"], 1, "11 só é divisível por 1 e por ele mesmo."],
  ["Qual é a capital da França?", ["Roma", "Paris", "Berlim"], 1, "Paris é a capital da França."],
  ["Quantos lados tem um quadrado?", ["3", "4", "5"], 1, "Um quadrado tem quatro lados."],
  ["Qual é o resultado de 18 ÷ 3?", ["5", "6", "7"], 1, "18 dividido por 3 é 6."],
  ["Qual destes animais é anfíbio?", ["Sapo", "Gato", "Galinha"], 0, "O sapo é um anfíbio."],
  ["Qual é a capital da Itália?", ["Atenas", "Roma", "Lisboa"], 1, "Roma é a capital da Itália."],
  ["Qual destes é um planeta gasoso?", ["Mercúrio", "Júpiter", "Marte"], 1, "Júpiter é um gigante gasoso."],
  ["Qual ciência estuda os seres vivos?", ["Biologia", "Geologia", "Astronomia"], 0, "A Biologia estuda os seres vivos."],
  ["Qual é o maior osso humano?", ["Fêmur", "Rádio", "Costela"], 0, "O fêmur é o maior osso."],
  ["Qual é a capital do Piauí?", ["Teresina", "Parnaíba", "Picos"], 0, "Teresina é a capital do Piauí."],
  ["Qual é a água em estado gasoso?", ["Vapor", "Gelo", "Orvalho"], 0, "No estado gasoso, a água é vapor."],
  ["Qual instrumento indica direções?", ["Termômetro", "Bússola", "Microscópio"], 1, "A bússola indica direções."],
  ["Qual polígono tem oito lados?", ["Hexágono", "Heptágono", "Octógono"], 2, "Um octógono tem oito lados."],
  ["Qual é a capital do Japão?", ["Pequim", "Tóquio", "Seul"], 1, "Tóquio é a capital do Japão."],
  ["Qual é a unidade básica da vida?", ["Átomo", "Célula", "Tecido"], 1, "A célula é a unidade básica da vida."],
  ["Qual é o maior deserto quente?", ["Saara", "Gobi", "Atacama"], 0, "O Saara é o maior deserto quente."],
  ["Qual movimento é o giro da Terra no próprio eixo?", ["Translação", "Rotação", "Revolução"], 1, "Rotação é o giro da Terra no próprio eixo."],
  ["Qual é a capital de Minas Gerais?", ["Belo Horizonte", "Vitória", "Goiânia"], 0, "Belo Horizonte é a capital mineira."]
];

// Gera mais de 180 perguntas matemáticas diferentes.
for (let a = 2; a <= 15; a++) {
  for (let b = 2; b <= 10; b++) {
    const n = a * b;
    questions.push([
      `Quanto é ${a} × ${b}?`,
      [String(n - 1), String(n), String(n + 1)],
      1,
      `${a} vezes ${b} é ${n}.`
    ]);
  }
}

for (let n = 30; n < 150; n += 2) {
  const answer = n - 13;
  questions.push([
    `Quanto é ${n} - 13?`,
    [String(answer - 1), String(answer), String(answer + 1)],
    1,
    `${n} menos 13 é ${answer}.`
  ]);
}

// ======================================
// SKINS
// ======================================

const skins = [
  { name: "Aventureiro", emoji: "🧑🏻‍🚀", color: "#2677c5", price: 0 },
  { name: "Ninja", emoji: "🥷", color: "#303746", price: 25 },
  { name: "Exploradora", emoji: "🧝‍♀️", color: "#269c71", price: 45 },
  { name: "Robô", emoji: "🤖", color: "#8b9ba8", price: 65 },
  { name: "Mago", emoji: "🧙", color: "#8555b7", price: 90 }
];

// ======================================
// 10 MUNDOS E MONSTROS
// ======================================

const worlds = [
  { name: "Pradaria", sky: "#66c9f5", ground: "#89552e", grass: "#53ae50", hills: "#80c98d", monster: "👾" },
  { name: "Deserto", sky: "#f6bd70", ground: "#b77936", grass: "#e4c05e", hills: "#d99a55", monster: "🦂" },
  { name: "Floresta", sky: "#67b9a0", ground: "#65452f", grass: "#3f9b55", hills: "#55966a", monster: "🐛" },
  { name: "Gelo", sky: "#80c9ee", ground: "#668ba8", grass: "#d8f4ff", hills: "#a4d8ec", monster: "🐧" },
  { name: "Vulcão", sky: "#613b55", ground: "#493d46", grass: "#d65b35", hills: "#8b4c4b", monster: "🔥" },
  { name: "Praia", sky: "#48c8ed", ground: "#b58a4e", grass: "#f0d58b", hills: "#61bca3", monster: "🦀" },
  { name: "Montanha", sky: "#72a7d9", ground: "#696c78", grass: "#9eabb7", hills: "#728ba5", monster: "🦇" },
  { name: "Pântano", sky: "#779b83", ground: "#514d37", grass: "#899b4e", hills: "#71845a", monster: "🐸" },
  { name: "Espaço", sky: "#161c50", ground: "#41445f", grass: "#9293c9", hills: "#424b81", monster: "👽" },
  { name: "Castelo", sky: "#58618c", ground: "#66515c", grass: "#bd9c69", hills: "#77749c", monster: "🐉" }
];

// ======================================
// ESTADO DO JOGO
// ======================================

let score = 0;
let coins = 0;
let lives = 3;
let level = 1;
let usedQuestions = [];

let ownedSkins = new Set([0]);
let equippedSkin = 0;

let state = "start";
let player;
let platforms = [];
let monsters = [];
let treasures = [];

let camera = 0;
let frame = 0;
let invulnerable = 0;

const keys = {
  left: false,
  right: false
};

// ======================================
// INTERFACE
// ======================================

function updateHUD() {
  $("score").textContent = score;
  $("coins").textContent = coins;
  $("lives").textContent = lives;
  $("level").textContent = level + "/10";
  $("shopCoins").textContent = coins;
}

function showScreen(screenId) {
  const screens = [
    "startScreen",
    "questionScreen",
    "shopScreen",
    "levelScreen",
    "endScreen"
  ];

  screens.forEach(id => {
    $(id).classList.toggle("hidden", id !== screenId);
  });
}

// ======================================
// CRIAR UMA FASE
// ======================================

function createLevel() {
  player = {
    x: 60,
    y: 390,
    width: 36,
    height: 48,
    velocityY: 0,
    onGround: false,
    walk: 0
  };

  camera = 0;

  platforms = [
    { x: 0, y: 480, width: WORLD_WIDTH, height: 60 }
  ];

  for (let i = 0; i < 7; i++) {
    platforms.push({
      x: 210 + i * 275,
      y: 390 - ((i + level) % 3) * 35,
      width: 135,
      height: 18
    });
  }

  monsters = [];

  for (let i = 0; i < 5; i++) {
    const x = 360 + i * 365;

    monsters.push({
      x,
      y: 430,
      width: 40,
      height: 42,
      direction: i % 2 ? -1 : 1,
      minX: x - 70,
      maxX: x + 100,
      alive: true,
      speed: 1 + (level % 4) * 0.22
    });
  }

  treasures = [];

  for (let i = 0; i < 18; i++) {
    treasures.push({
      x: 180 + i * 112,
      y: i % 3 === 0 ? 345 : i % 3 === 1 ? 405 : 300,
      collected: false
    });
  }
}

// ======================================
// COMEÇAR OU REINICIAR
// ======================================

function startGame() {
  score = 0;
  coins = 0;
  lives = 3;
  level = 1;

  usedQuestions = [];
  ownedSkins = new Set([0]);
  equippedSkin = 0;

  createLevel();
  updateHUD();

  state = "play";
  showScreen(null);
}

// ======================================
// FIM DO JOGO
// ======================================

function finishGame(title, message) {
  state = "end";

  $("endTitle").textContent = title;
  $("endMessage").textContent = message;

  $("finalScore").textContent =
    `Pontos: ${score} · Moedas: ${coins} · Perguntas usadas: ${usedQuestions.length}`;

  showScreen("endScreen");
}

// ======================================
// PERGUNTA QUANDO MORRER
// ======================================

function askQuestion() {
  const available = questions
    .map((question, index) => index)
    .filter(index => !usedQuestions.includes(index));

  if (available.length === 0) {
    finishGame(
      "PERGUNTAS ESGOTADAS",
      "Você respondeu todas as perguntas. Reinicie para jogar novamente."
    );
    return;
  }

  const randomIndex = Math.floor(Math.random() * available.length);
  const questionIndex = available[randomIndex];

  usedQuestions.push(questionIndex);

  const question = questions[questionIndex];

  state = "question";

  $("questionText").textContent = question[0];
  $("feedback").textContent = "";
  $("feedback").dataset.wrong = "";

  $("questionContinue").classList.add("hidden");

  $("questionCount").textContent =
    `Pergunta inédita ${usedQuestions.length} de ${questions.length}`;

  $("answers").innerHTML = "";

  question[1].forEach((answer, index) => {
    const button = document.createElement("button");

    button.textContent =
      String.fromCharCode(65 + index) + ") " + answer;

    button.onclick = () => {
      [...$("answers").children].forEach(b => {
        b.disabled = true;
      });

      if (index === question[2]) {
        score += 30;

        $("feedback").textContent =
          "✅ Acertou! Você reviveu! +30 pontos. " + question[3];

        button.style.background = "#d7f5e3";
      } else {
        $("feedback").textContent =
          "❌ Resposta errada. Correta: " +
          question[1][question[2]] +
          ". " +
          question[3];

        $("feedback").dataset.wrong = "yes";

        $("answers").children[question[2]].style.background = "#d7f5e3";
      }

      $("questionContinue").classList.remove("hidden");
      updateHUD();
    };

    $("answers").appendChild(button);
  });

  showScreen("questionScreen");
}

// ======================================
// RESULTADO DA PERGUNTA
// ======================================

function continueAfterQuestion() {
  if ($("feedback").dataset.wrong === "yes") {
    // Errou: volta ao começo da aventura.
    startGame();
    return;
  }

  // Acertou: revive no jogo.
  player.x = Math.max(camera + 50, 60);
  player.y = 390;
  player.velocityY = 0;

  invulnerable = 180;

  state = "play";
  showScreen(null);
}

// ======================================
// MORTE DO PERSONAGEM
// ======================================

function playerDied() {
  if (state !== "play" || invulnerable > 0) return;

  lives--;
  updateHUD();

  askQuestion();
}

// ======================================
// LOJA DE SKINS
// ======================================

function openShop() {
  if (state !== "play") return;

  state = "shop";
  renderShop();
  showScreen("shopScreen");
}

function closeShop() {
  state = "play";
  showScreen(null);
}

function renderShop() {
  updateHUD();

  $("skinGrid").innerHTML = "";

  skins.forEach((skin, index) => {
    const card = document.createElement("div");
    card.className = "skin";

    card.innerHTML = `
      <div class="preview">${skin.emoji}</div>
      <h3>${skin.name}</h3>
      <p>${skin.price === 0 ? "Grátis" : skin.price + " moedas"}</p>
    `;

    const button = document.createElement("button");

    if (equippedSkin === index) {
      button.textContent = "EQUIPADA";
      button.disabled = true;
    } else if (ownedSkins.has(index)) {
      button.textContent = "EQUIPAR";

      button.onclick = () => {
        equippedSkin = index;
        renderShop();
      };
    } else {
      button.textContent = "COMPRAR";
      button.disabled = coins < skin.price;

      button.onclick = () => {
        if (coins >= skin.price) {
          coins -= skin.price;
          ownedSkins.add(index);
          equippedSkin = index;

          renderShop();
        }
      };
    }

    card.appendChild(button);
    $("skinGrid").appendChild(card);
  });
}

// ======================================
// DESENHAR O CENÁRIO
// ======================================

function drawBackground() {
  const world = worlds[level - 1];

  const gradient = ctx.createLinearGradient(0, 0, 0, HEIGHT);

  gradient.addColorStop(0, world.sky);
  gradient.addColorStop(1, "#eaf7ff");

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  ctx.fillStyle = world.hills;

  for (let i = 0; i < 8; i++) {
    const x = i * 270 - (camera * 0.25 % 270);

    ctx.beginPath();
    ctx.arc(x + 100, 480, 125, Math.PI, 0);
    ctx.fill();
  }

  if (level === 9) {
    ctx.fillStyle = "white";

    for (let i = 0; i < 40; i++) {
      let x = (i * 97 - camera * 0.1) % WIDTH;

      if (x < 0) x += WIDTH;

      ctx.fillRect(x, (i * 53) % 250, 3, 3);
    }
  }
}

// ======================================
// DESENHAR PERSONAGEM
// ======================================

function drawPlayer() {
  const skin = skins[equippedSkin];

  if (invulnerable > 0 && Math.floor(frame / 6) % 2 === 0) {
    return;
  }

  // Corpo
  ctx.fillStyle = skin.color;
  ctx.fillRect(player.x + 6, player.y + 18, 25, 25);

  // Cabeça
  ctx.fillStyle = "#f0bc91";
  ctx.fillRect(player.x + 7, player.y + 3, 23, 20);

  // Chapéu
  ctx.fillStyle = skin.color;
  ctx.fillRect(player.x + 4, player.y, 29, 8);

  // Olho
  ctx.fillStyle = "white";
  ctx.fillRect(player.x + 22, player.y + 10, 4, 5);

  ctx.fillStyle = "#222";
  ctx.fillRect(player.x + 24, player.y + 11, 2, 3);

  // Pernas animadas
  ctx.fillStyle = "#44342d";

  const step = Math.sin(player.walk) * 3;

  ctx.fillRect(player.x + 7, player.y + 42 + step, 10, 5);
  ctx.fillRect(player.x + 21, player.y + 42 - step, 10, 5);
}

// ======================================
// DESENHAR JOGO
// ======================================

function drawGame() {
  drawBackground();

  const world = worlds[level - 1];

  ctx.save();
  ctx.translate(-camera, 0);

  // Plataformas
  platforms.forEach(platform => {
    ctx.fillStyle = world.ground;

    ctx.fillRect(
      platform.x,
      platform.y,
      platform.width,
      platform.height
    );

    ctx.fillStyle = world.grass;

    ctx.fillRect(
      platform.x,
      platform.y,
      platform.width,
      8
    );
  });

  // Moedas
  treasures.forEach(treasure => {
    if (treasure.collected) return;

    ctx.fillStyle = "#ffca28";
    ctx.beginPath();

    ctx.ellipse(
      treasure.x,
      treasure.y,
      10,
      14,
      0,
      0,
      Math.PI * 2
    );

    ctx.fill();
  });

  // Monstros
  monsters.forEach(monster => {
    if (!monster.alive) return;

    ctx.font = "34px Arial";
    ctx.fillText(
      world.monster,
      monster.x,
      monster.y + 34
    );
  });

  // Bandeira de chegada
  ctx.fillStyle = "#eeeeee";
  ctx.fillRect(2180, 300, 8, 180);

  ctx.fillStyle = "#e54b4b";
  ctx.fillRect(2188, 300, 68, 42);

  drawPlayer();

  ctx.restore();

  ctx.fillStyle = "#173b56";
  ctx.font = "bold 18px Arial";

  ctx.fillText(
    world.name.toUpperCase() + " · FASE " + level,
    20,
    30
  );
}

// ======================================
// MOVIMENTAÇÃO E COLISÕES
// ======================================

function updateGame() {
  if (state !== "play") return;

  frame++;

  if (invulnerable > 0) {
    invulnerable--;
  }

  const oldY = player.y;

  // Movimento horizontal
  const speed = 4.3;

  if (keys.right) {
    player.x += speed;
    player.walk += 0.22;
  }

  if (keys.left) {
    player.x -= speed;
    player.walk += 0.22;
  }

  player.x = Math.max(
    0,
    Math.min(WORLD_WIDTH - player.width, player.x)
  );

  // Gravidade
  player.velocityY += 0.58;
  player.velocityY = Math.min(player.velocityY, 13);

  player.y += player.velocityY;
  player.onGround = false;

  // Colisão com plataformas
  platforms.forEach(platform => {
    const landed =
      player.velocityY >= 0 &&
      oldY + player.height <= platform.y + 5 &&
      player.y + player.height >= platform.y &&
      player.x + player.width > platform.x &&
      player.x < platform.x + platform.width;

    if (landed) {
      player.y = platform.y - player.height;
      player.velocityY = 0;
      player.onGround = true;
    }
  });

  // Caiu do cenário
  if (player.y > HEIGHT + 50) {
    playerDied();
    return;
  }

  // Movimento e colisão com monstros
  for (const monster of monsters) {
    if (!monster.alive) continue;

    monster.x += monster.direction * monster.speed;

    if (
      monster.x < monster.minX ||
      monster.x > monster.maxX
    ) {
      monster.direction *= -1;
    }

    const collision =
      player.x < monster.x + monster.width &&
      player.x + player.width > monster.x &&
      player.y < monster.y + monster.height &&
      player.y + player.height > monster.y;

    if (collision) {
      const stomp =
        player.velocityY > 1 &&
        oldY + player.height < monster.y + 17;

      if (stomp) {
        monster.alive = false;
        player.velocityY = -8;
        score += 15;
        updateHUD();
      } else {
        playerDied();
        return;
      }
    }
  }

  // Coletar moedas
  treasures.forEach(treasure => {
    if (treasure.collected) return;

    const closeX =
      Math.abs(player.x + player.width / 2 - treasure.x) < 22;

    const closeY =
      Math.abs(player.y + player.height / 2 - treasure.y) < 25;

    if (closeX && closeY) {
      treasure.collected = true;
      coins++;
      score += 10;
      updateHUD();
    }
  });

  // Câmera acompanha o personagem
  camera = Math.max(
    0,
    Math.min(WORLD_WIDTH - WIDTH, player.x - 350)
  );

  // Chegou à bandeira
  if (player.x > 2150) {
    state = "level";

    $("levelTitle").textContent =
      level === 10
        ? "ÚLTIMA FASE CONCLUÍDA!"
        : "Fase " + level + " concluída!";

    $("levelMessage").textContent =
      level === 10
        ? "Você venceu os 10 mundos!"
        : "Você atravessou " +
          worlds[level - 1].name +
          ". Próximo mundo: " +
          worlds[level].name +
          ".";

    showScreen("levelScreen");
  }
}

// ======================================
// PULAR
// ======================================

function jump() {
  if (state === "play" && player.onGround) {
    player.velocityY = -12;
    player.onGround = false;
  }
}

// ======================================
// CONTROLES DO TECLADO
// ======================================

window.addEventListener("keydown", event => {
  const key = event.key.toLowerCase();

  if (["arrowleft", "arrowright", "arrowup", " "].includes(key)) {
    event.preventDefault();
  }

  if (key === "arrowleft" || key === "a") {
    keys.left = true;
  }

  if (key === "arrowright" || key === "d") {
    keys.right = true;
  }

  if (key === " " || key === "arrowup" || key === "w") {
    jump();
  }
});

window.addEventListener("keyup", event => {
  const key = event.key.toLowerCase();

  if (key === "arrowleft" || key === "a") {
    keys.left = false;
  }

  if (key === "arrowright" || key === "d") {
    keys.right = false;
  }
});

// ======================================
// CONTROLES PARA CELULAR
// ======================================

function holdButton(id, key) {
  const button = $(id);

  button.addEventListener("pointerdown", event => {
    event.preventDefault();

    if (key === "jump") {
      jump();
    } else {
      keys[key] = true;
    }
  });

  ["pointerup", "pointerleave", "pointercancel"].forEach(type => {
    button.addEventListener(type, () => {
      if (key !== "jump") {
        keys[key] = false;
      }
    });
  });
}

holdButton("left", "left");
holdButton("right", "right");
holdButton("jump", "jump");

// ======================================
// BOTÕES DAS TELAS
// ======================================

$("startBtn").onclick = startGame;
$("restartBtn").onclick = startGame;

$("questionContinue").onclick = continueAfterQuestion;

$("shopOpen").onclick = openShop;
$("shopClose").onclick = closeShop;

$("nextLevelBtn").onclick = () => {
  if (level === 10) {
    finishGame(
      "🏆 VOCÊ VENCEU!",
      "Você completou os 10 mundos e a Missão do Saber!"
    );

    return;
  }

  level++;

  createLevel();
  updateHUD();

  state = "play";
  showScreen(null);
};

// ======================================
// LOOP PRINCIPAL
// ======================================

function gameLoop() {
  updateGame();
  drawGame();

  requestAnimationFrame(gameLoop);
}

// Preparar o jogo
createLevel();
updateHUD();
renderShop();
drawGame();

gameLoop();