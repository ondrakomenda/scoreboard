let homeScore = 0;
let guestScore = 0;

function newGame() {
  homeScore = 0;
  document.getElementById("home-score").textContent = homeScore;
  guestScore = 0;
  document.getElementById("guest-score").textContent = guestScore;
  leader();
}

function home1() {
  homeScore += 1;
  document.getElementById("home-score").textContent = homeScore;
  leader();
}

function home2() {
  homeScore += 2;
  document.getElementById("home-score").textContent = homeScore;
  leader();
}

function home3() {
  homeScore += 3;
  document.getElementById("home-score").textContent = homeScore;
  leader();
}

function guest1() {
  guestScore += 1;
  document.getElementById("guest-score").textContent = guestScore;
  leader();
}

function guest2() {
  guestScore += 2;
  document.getElementById("guest-score").textContent = guestScore;
  leader();
}

function guest3() {
  guestScore += 3;
  document.getElementById("guest-score").textContent = guestScore;
  leader();
}

function leader() {
  if (homeScore > guestScore) {
    document.getElementById("home").textContent = "HOME 👑";
    document.getElementById("guest").textContent = "GUEST";
  } else if (homeScore < guestScore) {
    document.getElementById("home").textContent = "HOME";
    document.getElementById("guest").textContent = "GUEST 👑";
  } else {
    document.getElementById("home").textContent = "HOME";
    document.getElementById("guest").textContent = "GUEST";
  }
}
