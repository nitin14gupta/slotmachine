# Slot Machine Game

Welcome to the Slot Machine Game! This simple yet exciting game lets you try your luck by spinning a slot machine and betting on lines. You can deposit money, choose your bet amount, select the number of lines you want to bet on, and then spin the slots. If you match symbols on the selected lines, you win!

## Table of Contents

1. [Features](#features)
2. [Setup](#setup)
3. [How to Play](#how-to-play)
4. [Game Logic](#game-logic)
5. [Credits](#credits)

---

## Features

- **User Balance**: View your current balance at any time.
- **Deposit**: Add money to your balance to play the game.
- **Bet Amount**: Set your bet per line.
- **Lines to Bet On**: Choose 1 to 3 lines to place your bet on.
- **Slot Machine**: Spin the slot machine and get random symbols on a 3x3 grid.
- **Winning Mechanism**: Match symbols across selected paylines to win coins.
- **Responsive Design**: Play on any device thanks to a mobile-friendly interface.

---

## Setup

To get started with the game, you need:

1. **HTML, CSS, and JavaScript Files**: You’ll need to create three files:
   - `index.html`: Contains the structure and UI of the game.
   - `style.css`: Handles the styling of the game elements.
   - `project.js`: The JavaScript logic for handling the game operations.

2. **Folder Structure**:
   ```
   /slot-machine
     /index.html
     /style.css
     /project.js
   ```

---

## How to Play

1. **Deposit Money**:
   - Enter an amount in the deposit field and click the "Deposit" button to add funds to your balance.

2. **Place Bet**:
   - Enter a bet amount for each line.
   - Choose how many lines you want to bet on (1, 2, or 3).

3. **Spin the Slots**:
   - Click the "Spin" button to initiate the slot machine spin.
   - The game will randomly display symbols in a 3x3 grid.

4. **Check for Wins**:
   - The game checks the selected lines for matching symbols.
   - If you match symbols on any of your selected lines, you win money based on the bet amount and symbol values.

5. **Winning**:
   - The win message will show the amount you won, or a message will indicate that you didn't win.

---

## Game Logic

### Symbols and Their Values:
- 🍒 (Cherry) = ₹1
- 🍋 (Lemon) = ₹2
- 🍊 (Orange) = ₹3
- 🪶 (Bird) = ₹4

### Steps:

1. **Deposit**: Players can deposit money into their account using the "Deposit" field.
2. **Betting**: Players select the bet amount and number of lines they want to bet on.
3. **Spin**: When the player hits "Spin", the machine randomly generates symbols for each slot on the grid.
4. **Win Calculation**: The game checks if there are matching symbols on the selected paylines. If the symbols match, the player wins.
5. **Balance Update**: The player's balance is updated after each spin based on whether they won or lost.

---

## Code Overview

### HTML (index.html)
The HTML structure defines the layout of the game, including:
- A title, balance display, betting inputs, and spin button.
- A 3x3 grid representing the slot machine.
- A section to display the result message and a deposit option.

### CSS (style.css)
This stylesheet provides the design and layout for the slot machine game:
- **General Reset**: Sets all elements to have zero margin and padding.
- **Layout**: Flexbox and grid are used to center the game and organize the slot machine.
- **Animations**: Hover effects for buttons and slots, as well as a spin animation.

### JavaScript (project.js)
This file contains the game logic:
- **Balance Handling**: Tracks the player's balance and updates it when deposits are made or when a spin occurs.
- **Spin Function**: Spins the slot machine, randomly selecting symbols for each slot.
- **Win Calculation**: Checks if the player has won based on the symbols in the selected lines.
- **DOM Manipulation**: Updates the HTML elements to reflect the player's balance and the results of the spin.

---

## Credits

- **Author**: Developed by [Your Name].
- **Icons**: 🍒🍋🍊🪶 used in the game are generic emoji symbols.
- **Libraries**: None – the game is built with vanilla HTML, CSS, and JavaScript.

---

## License

This game is open-source. Feel free to modify and use it as per your requirements!
