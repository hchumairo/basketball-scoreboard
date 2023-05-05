let homeScore = document.getElementById('home-score')
let guestScore = document.getElementById('guest-score')
let countHome = 0
let countGuest = 0

function winner() {
    if (countHome > countGuest) {
        homeScore.style.backgroundColor = "#38b000";
        guestScore.style.backgroundColor = "#080001";
    } else if (countHome < countGuest) {
        guestScore.style.backgroundColor = "#38b000";
        homeScore.style.backgroundColor = "#080001";
    } else {
        homeScore.style.backgroundColor = "#38b000";
        guestScore.style.backgroundColor = "#38b000";
    }
}

function addScore(player, point) {
    if (player == homeScore) {
        countHome += point;
        player.textContent = countHome;
        winner();
    } else {
        countGuest += point
        player.textContent = countGuest
        winner()
    }
}

function resetScore() {
    countHome = 0;
    homeScore.textContent = countHome;
    countGuest = 0;
    guestScore.textContent = countGuest;
    homeScore.style.backgroundColor = "#080001";
    guestScore.style.backgroundColor = "#080001";
}
