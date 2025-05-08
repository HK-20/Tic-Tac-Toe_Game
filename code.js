
let currentuser = "x";
let clickHistory = [];

function clickevent(event) {
  const btn = event.target;


  if (btn.innerText !== "") return;
  

  btn.innerText = currentuser.toUpperCase();
  clickHistory.push(btn);

  if (clickHistory.length > 6) {
    const firstClicked = clickHistory.shift();
    firstClicked.innerText = "";
  }

  checkMatches();
  currentuser = currentuser === "x" ? "o" : "x";

// Update the turn display
document.getElementById("turnDisplay").innerText = "Turn: " + currentuser.toUpperCase();
}

let winningconditions = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];

function checkMatches() {
  let buttons = [];
  for (let i = 0; i < 9; i++) {
    buttons[i] = document.getElementById("btn" + i).innerText;
  }

  for (let condition of winningconditions) {
    let [a, b, c] = condition;
    if (
      buttons[a] !== "" &&
      buttons[a] === buttons[b] &&
      buttons[b] === buttons[c]
    ) {
      alert(buttons[a] + " is the winner!");
      resetGame();
      return;
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  for (let i = 0; i < 9; i++) {
    const btn = document.getElementById("btn" + i);
    btn.addEventListener("click", clickevent);
  }
});


function resetGame() {
  for (let i = 0; i < 9; i++) {
    document.getElementById("btn" + i).innerText = "";
  }
  clickHistory = [];
  currentuser = "x";
}
