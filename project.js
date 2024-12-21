// game.js

let balance = 0; // Player's balance

// Initialize DOM elements
const balanceDisplay = document.getElementById("balance");
const betAmountInput = document.getElementById("bet-amount");
const linesSelect = document.getElementById("lines");
const spinButton = document.getElementById("spin-btn");
const winMessage = document.getElementById("win-message");
const depositInput = document.getElementById("deposit-amount");
const depositButton = document.getElementById("deposit-btn");
const slots = [
  [document.getElementById("slot-1-1"), document.getElementById("slot-1-2"), document.getElementById("slot-1-3")],
  [document.getElementById("slot-2-1"), document.getElementById("slot-2-2"), document.getElementById("slot-2-3")],
  [document.getElementById("slot-3-1"), document.getElementById("slot-3-2"), document.getElementById("slot-3-3")]
];

// Symbol distribution
const symbolCount = {
  '🍒': 5,
  '🍋': 10,
  '🍊': 15,
  '🪶': 20,
};

const symbolValues = {
  '🍒': 1,
  '🍋': 2,
  '🍊': 3,
  '🪶': 4,
};

// Deposit function
depositButton.addEventListener("click", () => {
  const depositAmount = parseFloat(depositInput.value);
  if (isNaN(depositAmount) || depositAmount <= 0) {
    alert("Please enter a valid deposit amount.");
    return;
  }
  balance += depositAmount;
  balanceDisplay.textContent = balance;
  depositInput.value = ""; // Clear deposit input
});

// Spin function
spinButton.addEventListener("click", () => {
  const betAmount = parseFloat(betAmountInput.value);
  const lines = parseInt(linesSelect.value);

  if (isNaN(betAmount) || betAmount <= 0 || betAmount * lines > balance) {
    alert("Please enter a valid bet amount or ensure you have enough balance.");
    return;
  }

  balance -= betAmount * lines; // Deduct bet
  balanceDisplay.textContent = balance;
  winMessage.textContent = ""; // Clear previous win message

  // Spin the slot machine and show results
  const spinResult = spinMachine();
  displaySpinResult(spinResult);

  // Check for wins
  const totalWin = checkWin(spinResult, lines, betAmount);
  balance += totalWin; // Add winnings to balance
  balanceDisplay.textContent = balance;

  if (totalWin > 0) {
    winMessage.textContent = `You won ₹${totalWin}!`;
  } else {
    winMessage.textContent = "You didn't win this time. Try again!";
  }
});

// Spin the machine and return result
function spinMachine() {
  const symbols = [];
  for (const [symbol, count] of Object.entries(symbolCount)) {
    for (let i = 0; i < count; i++) {
      symbols.push(symbol);
    }
  }

  const result = [];
  for (let row = 0; row < 3; row++) {
    const rowSymbols = [];
    for (let col = 0; col < 3; col++) {
      const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
      rowSymbols.push(randomSymbol);
    }
    result.push(rowSymbols);
  }
  return result;
}

// Display the result of the spin on the UI
function displaySpinResult(spinResult) {
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      slots[row][col].textContent = spinResult[row][col];
    }
  }
}

// Check for wins based on the paylines
function checkWin(spinResult, lines, betAmount) {
  let totalWin = 0;

  for (let line = 0; line < lines; line++) {
    const lineSymbols = [];
    for (let row = 0; row < 3; row++) {
      lineSymbols.push(spinResult[row][line]);
    }

    if (lineSymbols.every(symbol => symbol === lineSymbols[0])) {
      const symbolValue = symbolValues[lineSymbols[0]];
      totalWin += symbolValue * betAmount;
    }
  }
  return totalWin;
}
