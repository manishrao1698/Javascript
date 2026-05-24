const words = [
    "javascript",
    "function",
    "closure",
    "variable",
    "object",
    "promise",
    "react"
  ];

  let selectedWord = "";
  let guessedLetters = [];
  let wrongGuesses = 0;
  const maxWrongGuesses = 6;

  const wordDisplay = document.getElementById("wordDisplay");
  const wrongCount = document.getElementById("wrongCount");
  const guessedLettersDisplay = document.getElementById("guessedLetters");
  const message = document.getElementById("message");
  const restartBtn = document.getElementById("restartBtn");

  function startGame() {
    selectedWord = words[Math.floor(Math.random() * words.length)];
    guessedLetters = [];
    wrongGuesses = 0;

    message.textContent = "";
    restartBtn.style.display = "none";

    updateDisplay();
  }

  function updateDisplay() {
    const displayWord = selectedWord
      .split("")
      .map(letter =>
        guessedLetters.includes(letter) ? letter : "_"
      )
      .join(" ");

    wordDisplay.textContent = displayWord;
    wrongCount.textContent = wrongGuesses;
    guessedLettersDisplay.textContent = guessedLetters.join(", ");
  }

  function guessLetter() {
    const input = document.getElementById("letterInput");
    const letter = input.value.toLowerCase();

    input.value = "";

    if (!letter.match(/[a-z]/i)) {
      message.textContent = "Enter a valid letter!";
      return;
    }

    if (guessedLetters.includes(letter)) {
      message.textContent = "Letter already guessed!";
      return;
    }

    guessedLetters.push(letter);

    if (!selectedWord.includes(letter)) {
      wrongGuesses++;
      message.textContent = "Wrong Guess!";
    } else {
      message.textContent = "Correct Guess!";
    }

    updateDisplay();
    checkGameStatus();
  }

  function checkGameStatus() {
    const isWinner = selectedWord
      .split("")
      .every(letter => guessedLetters.includes(letter));

    if (isWinner) {
      message.textContent = "🎉 You Won!";
      endGame();
    }

    if (wrongGuesses >= maxWrongGuesses) {
      message.textContent =
        `💀 Game Over! Word was "${selectedWord}"`;
      endGame();
    }
  }

  function endGame() {
    document.getElementById("letterInput").disabled = true;
    restartBtn.style.display = "inline-block";
  }

  document.getElementById("letterInput")
    .addEventListener("keypress", function(event) {
      if (event.key === "Enter") {
        guessLetter();
      }
    });

  restartBtn.addEventListener("click", () => {
    document.getElementById("letterInput").disabled = false;
  });

  startGame();