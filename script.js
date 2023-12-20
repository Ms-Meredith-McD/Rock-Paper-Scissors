function letterSelection() {
  var userChoice = prompt(
    "Do you want Rock(r), Paper(p), or Scissors(s), or End(x)? Enter a letter."
  );
}

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

function showScores() {
    alert("You have " + win + " wins and " + lose + " losses as well as " + tie + " ties.");
}

var letters = ["r", "p", "s", "x"];
var computerLetters = ["r", "p", "s"];
var win = 0;
var lose = 0;
var tie = 0;

letterSelection();

if (letters.includes("userChoice") == "true") {
  if (userChoice === "x") {
    window.close();
  }
} else {
  alert("Invalid letter.  Try again.");
  letterSelection();
  return;
}

var computerChoice = computerLetters[random(0, 2)];

if (computerChoice === userChoice) {
  alert("Tie");
  tie++;
  showScores();
  return;
} else if (computerChoice === "r") {
  if (userChoice === "p") {
    alert("Paper covers rock.  You win!");
    win++;
    showScores();
    return;
  } else {
    alert("Rock smashes scissors.  You lose!");
    lose++;
    showScores();
    return;
  }
} else if (computerChoice === "p") {
  if (userChoice === "s") {
    alert("Scissors cuts paper.  You win!");
    win++;
    showScores();
    return;
  } else {
    alert("Paper covers rock.  You lose!");
    lose++;
    return;
  }
} else if (computerChoice === "s") {
  if (userChoice === "r") {
    alert("Rock smashes scissors.  You win!");
    win++;
    showScores();
    return;
  } else {
    alert("Scissors cuts paper.  You lose!");
    lose++;
    showScores();
    return;
  }
}
