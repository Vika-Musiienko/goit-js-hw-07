function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  
  
  const button = document.querySelector('button.change-color');
  const body = document.querySelector('body');
  const span = document.querySelector('span.color');
  
  button.addEventListener('click', () => {
    const randomColor = getRandomHexColor();
    body.style.backgroundColor = randomColor;
    span.textContent = randomColor;
  });