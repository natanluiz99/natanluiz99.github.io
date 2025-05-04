const player = document.getElementById('player');
const game = document.getElementById('game');

let posX = 50;
let posY = 0;
let velocityY = 0;
let gravity = 0.5;
let isJumping = false;
let isOnGround = true;

document.addEventListener('keydown', (e) => {
  if (e.code === 'ArrowRight') posX += 5;
  if (e.code === 'ArrowLeft') posX -= 5;
  if (e.code === 'Space' && isOnGround) {
    velocityY = -10;
    isJumping = true;
    isOnGround = false;
  }
});

function gameLoop() {
  velocityY += gravity;
  posY += velocityY;

  // Colisão com o chão
  if (posY <= 0) {
    posY = 0;
    velocityY = 0;
    isJumping = false;
    isOnGround = true;
  }

  player.style.left = posX + 'px';
  player.style.bottom = posY + 'px';

  requestAnimationFrame(gameLoop);
}

gameLoop();
