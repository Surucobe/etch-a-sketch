const $container = document.querySelector('.container');

// window.addEventListener('mousemove', (e) => console.log(e.target))

function renderGrid(tag, cont, num) {
  for (let i = 0; i < num; i++) {
    const elm = document.createElement(tag);
    elm.addEventListener('mousemove', (e) => console.log(working))
    cont.appendChild(elm);

  }
}

renderGrid('div', $container, 32);