const text = document.querySelector('.rainbow');
const string = text.textContent;
const split = string.split("");

for (let i = 0; i < split.length(); i++) {
  text.innerHTML += "<span>" + split[i] + "</span>";
}

let char;
let timer = setInterval(onTick, 50);

function onTick() {
  const span = text.querySelectorAll('span')[char];
  span.classList.add('fade');
  char++
  
  if (char === split.length) {
    complete();
    return;
  }
}

function complete() {
  clearInterval(timer);
  timer = null;
}