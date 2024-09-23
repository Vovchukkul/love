function showLove() {
  const stickersContainer = document.getElementById('stickers');
  const stickers = ['❤️', '💫', '☀️'];

  for (let i = 0; i < 10; i++) {
      const sticker = document.createElement('div');
      const randomSticker = stickers[Math.floor(Math.random() * stickers.length)];

      sticker.className = 'sticker';
      sticker.textContent = randomSticker;
      sticker.style.left = Math.random() * 100 + 'vw';
      sticker.style.animationDelay = Math.random() * 1 + 's';
      stickersContainer.appendChild(sticker);

      // Remove sticker after animation
      sticker.addEventListener('animationend', () => {
          sticker.remove();
      });
  }
}

function createBigHearts() {
  const body = document.body;
  for (let i = 0; i < 100; i++) { // Number of big hearts
      const bigHeart = document.createElement('div');
      bigHeart.className = 'big-heart';
      bigHeart.textContent = '❤️';
      bigHeart.style.left = Math.random() * 100 + 'vw';
      bigHeart.style.top = Math.random() * 100 + 'vh';
      bigHeart.style.animationDelay = Math.random() * 2 + 's';
      body.appendChild(bigHeart);

      // Remove heart after animation
      bigHeart.addEventListener('animationend', () => {
          bigHeart.remove();
      });
  }
}

// Create big hearts on page load
createBigHearts();
