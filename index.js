const $container = document.querySelector('.container');
const $buttonReset = document.querySelector('.reset');
let size = 128;

function changeBgColor() {

  if (this.dataset.count < 10) {
    this.style.backgroundColor = `#${(Math.random() * 0xfffff * 1000000).toString(16).slice(0, 6)}`;
    this.dataset.count = ++this.dataset.count;
    console.log(this.dataset.count);
  } else {
    this.style.backgroundColor = '#000'
  }
}

const resetColors = () => {
  elements = $container.querySelectorAll('div');
  elements.forEach(elm => {
    elm.style.backgroundColor = '#fff'
    elm.dataset.count = '0'
  });
}


$buttonReset.addEventListener('click', resetColors)

function renderGrid(num) {
  for (let i = 0; i < num; i++) {
    const elm = document.createElement('div');
    elm.addEventListener('mouseenter', changeBgColor);
    // elm.addEventListener('click', changeBgColor);
    elm.dataset.count = '0';
    $container.appendChild(elm);
  }
}

renderGrid(size);