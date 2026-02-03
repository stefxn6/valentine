const messages = [
  "Esti sigura? 🥺",
  "Mai gandeste-te 😢",
  "Te rogggg 💔",
  "Ok ultima sansa 😖"
];

let messageIndex = 0;

const yesButton = document.querySelector(".yes-button");
const noButton = document.querySelector(".no-button");
const music = document.getElementById("music");

// Pornire muzică la prima interacțiune
document.body.addEventListener(
  "click",
  () => music.play().catch(() => {}),
  { once: true }
);

noButton.addEventListener("click", moveNoButton);

function moveNoButton() {
  // Vibrație (Android)
  if (navigator.vibrate) {
    navigator.vibrate(100);
  }

  // Inimioară
  createHeart();

  // Text schimbat
  noButton.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;

  // Poziție random SAFE
  const x = Math.random() * 70 + 10; // %
  const y = Math.random() * 60 + 10; // px

  noButton.style.left = x + "%";
  noButton.style.top = y + "px";

  // Mărim butonul YES
  const currentSize = parseFloat(
    window.getComputedStyle(yesButton).fontSize
  );
  yesButton.style.fontSize = `${currentSize * 1.3}px`;
}

yesButton.addEventListener("click", () => {
  document.body.innerHTML = `
    <h1>Știam eu, Davinia 😌</h1>
    <img src="https://media.tenor.com/7j5ZK0n1kXYAAAAC/hug-love.gif" />
    <p>
      Îți mulțumesc că faci fiecare zi mai frumoasă.<br>
      Te iubesc 💚
    </p>
  `;
});

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "💖";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 20 + "px";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 3000);
}