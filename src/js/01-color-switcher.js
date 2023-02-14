const refs = {
    startBtn: document.querySelector('[data-start]'),
    stopBtn: document.querySelector('[data-stop]'),
    bodyColor: document.querySelector('body')
}

refs.startBtn.addEventListener('click', start)
refs.stopBtn.addEventListener('click', stop)

let intervalColorChange = undefined;


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


function changeBackground() {
  refs.bodyColor.style.backgroundColor = getRandomHexColor();
}

function start() {
    intervalColorChange = setInterval(changeBackground, 1000);

    refs.stopBtn.removeAttribute('disabled');
    refs.startBtn.setAttribute('disabled', '');
}


function stop() {
  clearInterval(intervalColorChange);
  refs.startBtn.removeAttribute('disabled');
  refs.stopBtn.setAttribute('disabled', '');
}

