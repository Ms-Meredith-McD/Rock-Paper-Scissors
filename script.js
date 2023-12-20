function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

function showScores() {
  alert(
    "You have " +
      win +
      " wins and " +
      lose +
      " losses as well as " +
      tie +
      " ties."
  );
}

function computerAlert() {
  alert("Computer has chosen " + computerChoice);
}

var userChoice;
var letters = ["r", "p", "s", "x"];
var computerLetters = ["r", "p", "s"];
var win = 0;
var lose = 0;
var tie = 0;

while (userChoice !== "x") {
  var userChoice = prompt(
    "Do you want Rock(r), Paper(p), or Scissors(s), or End(x)? Enter a letter."
  );

  var computerChoice = computerLetters[random(0, 2)];

  if (userChoice === "x") {
    window.close();
  } else if (computerChoice === userChoice) {
    computerAlert();
    alert("Tie");
    tie++;
  } else if (computerChoice === "r") {
    if (userChoice === "p") {
      computerAlert();
      alert("Paper covers rock.  You win!");
      win++;
    } else {
      computerAlert();
      alert("Rock smashes scissors.  You lose!");
      lose++;
    }
  } else if (computerChoice === "p") {
    if (userChoice === "s") {
      computerAlert();
      alert("Scissors cuts paper.  You win!");
      win++;
    } else {
      computerAlert();
      alert("Paper covers rock.  You lose!");
      lose++;
    }
  } else if (computerChoice === "s") {
    if (userChoice === "r") {
      computerAlert();
      alert("Rock smashes scissors.  You win!");
      win++;
    } else {
      computerAlert();
      alert("Scissors cuts paper.  You lose!");
      lose++;
    }
  }
  if (userChoice !== "x") {
    showScores();
  }
}
