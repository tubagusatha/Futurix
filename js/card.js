// script.js

const cards = document.querySelectorAll(".card");
let currentCard = 0;

function showNextCard() {
  cards[currentCard].classList.remove("inactive");
  currentCard = (currentCard + 1) % cards.length;
  cards[currentCard].classList.add("inactive");
}

// Tampilkan kartu pertama saat halaman dimuat
showNextCard();

// Set interval untuk mengganti kartu setiap beberapa detik
setInterval(showNextCard, 2000); // Ganti setiap 5 detik (sesuaikan sesuai kebutuhan)
