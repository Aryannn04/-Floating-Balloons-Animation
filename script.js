const sky = document.getElementById("sky");

// Array of 10 different balloon image URLs
const balloonImages = [
  "balloon1.png",
  "balloon2.png",
  "balloon3.png",
  "balloon4.png",
  "balloon5.png",
  "balloon.png",
  "balloon2.png",
  "balloon5.png",
  "balloon1.png",
  "balloon4.png",
];

const balloons = [];

function createBalloon(index) {
  const balloon = document.createElement("img");
  balloon.src = balloonImages[index % balloonImages.length];
  balloon.className = "balloon";

  const size = Math.random() * 80 + 100; // Size between 60px–100px
  balloon.style.width = size + "px";

  const left = Math.random() * (window.innerWidth - size);
  balloon.style.left = left + "px";

  const speed = Math.random() * 1.5 + 0.5; // Floating speed

  sky.appendChild(balloon);

  balloons.push({ el: balloon, y: -150, speed });
}

function animateBalloons() {
  balloons.forEach((balloonObj) => {
    balloonObj.y += balloonObj.speed;
    if (balloonObj.y > window.innerHeight + 150) {
      balloonObj.y = -150;
      balloonObj.el.style.left = Math.random() * (window.innerWidth - 80) + "px";
    }
    balloonObj.el.style.bottom = balloonObj.y + "px";
  });

  requestAnimationFrame(animateBalloons);
}

// Create 10 different balloons
for (let i = 0; i < 10; i++) {
  createBalloon(i);
}

animateBalloons();
