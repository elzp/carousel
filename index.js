// Import stylesheets
import './style.css';

const logos = document.querySelectorAll('div[data-id*="logo"]');
const left = document.querySelector('button[data-id="left"]');
const right = document.querySelector('button[data-id="right"]');

const status = Array.from(Array(logos.length)).map((it, index) => {
  return index === 0;
});

console.log(status);

left.addEventListener('click', () => {
  let idOfVisible = status.indexOf(true);
  console.log(idOfVisible);
  logos[idOfVisible].classList.add('hidden');
  status[idOfVisible] = false;

  if (idOfVisible === 0) {
    logos[logos.length - 1].classList.remove('hidden');
    status[logos.length - 1] = true;
  } else {
    logos[idOfVisible - 1].classList.remove('hidden');
    status[idOfVisible - 1] = true;
  }
});

right.addEventListener('click', () => {
  let idOfVisible = status.indexOf(true);
  console.log(idOfVisible);
  logos[idOfVisible].classList.add('hidden');
  status[idOfVisible] = false;

  if (idOfVisible === logos.length - 1) {
    logos[0].classList.remove('hidden');
    status[0] = true;
  } else {
    logos[idOfVisible + 1].classList.remove('hidden');
    status[idOfVisible + 1] = true;
  }
});
