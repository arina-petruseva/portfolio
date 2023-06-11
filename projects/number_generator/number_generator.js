function generateRandomNumber() {
    var randomNumber = Math.floor(Math.random() * 10) + 1;
    document.getElementById("result").innerHTML = "Random Number: " + randomNumber;
  }
document.getElementsByTagName("button")[0].onclick = generateRandomNumber