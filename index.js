const $container = document.querySelector('.container');

function changeBgColor() {
  this.style.backgroundColor = `#${(Math.random() * 0xfffff * 1000000).toString(16).slice(0, 6)}`;
}

function renderGrid(tag, cont, num) {
  for (let i = 0; i < num; i++) {
    const elm = document.createElement(tag);
    elm.addEventListener('mouseenter', changeBgColor);
    cont.appendChild(elm);
  }
}

renderGrid('div', $container, 32);