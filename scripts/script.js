let countGames = 0
let countVictories = 0;
let countPoints = 0;

document.getElementById("numOfGames").innerHTML = countGames;
document.getElementById("numOfVictories").innerHTML = countVictories;
document.getElementById("numOfPoints").innerHTML = countPoints;



let buttons = document.getElementsByClassName("button");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function() {
    countGames++;
    document.getElementById("numOfGames").innerHTML = countGames;
    console.log(countGames);
  }
}