var ourClientsCount = document.getElementById("our-clients-count");
var ourClientsCounter = 0;
var ourClientsInterval = setInterval(function () {
  ourClientsCounter++;
  ourClientsCount.innerHTML = ourClientsCounter;
  if (ourClientsCounter == 20000) {
    clearInterval(ourClientsInterval);
  }
}, 1);
