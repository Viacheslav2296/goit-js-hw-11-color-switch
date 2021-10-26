const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

let ID = null;
const ref = {
    body: document.querySelector('body'),
    btnStart: document.querySelector('button[data-action="start"]'),
    btnStop: document.querySelector('button[data-action="stop"]')
}

ref.btnStart.addEventListener('click', changedBgBody);
ref.btnStop.addEventListener('click', stopChangedBgBody);

function  randomIntegerFromInterval(min, max)  {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function changedBgBody() {
    ID = setInterval(() => ref.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length)], 1000);
    ref.btnStart.removeEventListener('click', changedBgBody);
    ref.btnStart.style.opacity = '50%';
}

function stopChangedBgBody() {
    clearInterval(ID);
    ref.btnStart.addEventListener('click', changedBgBody);
    ref.btnStart.style.opacity = '100%'
}