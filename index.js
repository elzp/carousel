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
  logos[idOfVisible].classList.remove('appear-to-left');
  logos[idOfVisible].classList.add('disappear-to-left');
  logos[idOfVisible].classList.remove('md:flex');
  // setTimeout(() => {
  logos[idOfVisible].classList.add('hidden');
  logos[idOfVisible].classList.remove('disappear-to-left');
  // }, 1000);
  // ;
  status[idOfVisible] = false;

  if (idOfVisible === 0) {
    logos[logos.length - 1].classList.remove('hidden');

    logos[logos.length - 1].classList.add('appear-to-left');
    logos[logos.length - 1].classList.add('md:flex');

    setTimeout(() => {
      logos[logos.length - 1].classList.remove('appear-to-left');
      logos[idOfVisible].classList.add('hidden');
      logos[idOfVisible].classList.remove('disappear-to-left');
    }, 1000);
    status[logos.length - 1] = true;
  } else {
    logos[idOfVisible - 1].classList.remove('hidden');

    logos[idOfVisible - 1].classList.add('appear-to-left');
    logos[idOfVisible - 1].classList.add('md:flex');
    setTimeout(() => {
      logos[idOfVisible - 1].classList.remove('appear-to-left');
      logos[idOfVisible].classList.add('hidden');
      logos[idOfVisible].classList.remove('disappear-to-left');
    }, 1000);

    status[idOfVisible - 1] = true;
  }
});

right.addEventListener('click', () => {
  let idOfVisible = status.indexOf(true);
  console.log(idOfVisible);
  logos[idOfVisible].classList.add('disappear-to-right');
  // setTimeout(() => {
  logos[idOfVisible].classList.add('hidden');
  logos[idOfVisible].classList.remove('disappear-to-right');
  // }, 1000);

  logos[idOfVisible].classList.remove('md:flex');
  status[idOfVisible] = false;

  if (idOfVisible === logos.length - 1) {
    logos[0].classList.remove('hidden');
    logos[0].classList.add('appear-to-right');
    logos[0].classList.add('md:flex');

    setTimeout(() => {
      logos[0].classList.remove('appear-to-right');
    }, 1000);
    status[0] = true;
  } else {
    logos[idOfVisible + 1].classList.remove('hidden');
    logos[idOfVisible + 1].classList.add('appear-to-right');
    logos[idOfVisible + 1].classList.add('md:flex');
    setTimeout(() => {
      logos[idOfVisible + 1].classList.remove('appear-to-right');
    }, 1000);

    status[idOfVisible + 1] = true;
  }
});
