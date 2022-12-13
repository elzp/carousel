// Import stylesheets
import './style.css';

const logos = document.querySelectorAll('div[data-id*="logo"]');
const left = document.querySelector('button[data-id="left"]');
const right = document.querySelector('button[data-id="right"]');
const buttons = document.querySelectorAll('button[data-id="changing-button"]');

let status = Array.from(Array(logos.length)).map((it, index) => {
  return index === 0;
});

right.addEventListener('click', function () {
  let idOfVisible = status.indexOf(true);
  right.setAttribute('disabled', true);
  logos[idOfVisible].classList.remove('appear-to-right');
  logos[idOfVisible].classList.add('disappear-to-right');
  setTimeout(() => {
    logos[idOfVisible].classList.add('hidden');
    logos[idOfVisible].classList.remove('disappear-to-right');
    logos[idOfVisible].classList.remove('md:flex');
  }, 600);

  status[idOfVisible] = false;

  if (idOfVisible === 0) {
    logos[logos.length - 1].classList.remove('hidden');

    logos[logos.length - 1].classList.add('appear-to-right');
    logos[logos.length - 1].classList.add('md:flex');

    setTimeout(() => {
      logos[logos.length - 1].classList.remove('appear-to-right');

      logos[idOfVisible].classList.add('hidden');
      logos[idOfVisible].classList.remove('disappear-to-right');
      right.removeAttribute('disabled');
    }, 1000);
    status[logos.length - 1] = true;
  } else {
    logos[idOfVisible - 1].classList.remove('hidden');

    logos[idOfVisible - 1].classList.add('appear-to-right');
    logos[idOfVisible - 1].classList.add('md:flex');
    setTimeout(() => {
      logos[idOfVisible - 1].classList.remove('appear-to-right');
      logos[idOfVisible].classList.add('hidden');
      logos[idOfVisible].classList.remove('disappear-to-right');
      right.removeAttribute('disabled');
    }, 1000);

    status[idOfVisible - 1] = true;
  }
});

left.addEventListener('click', () => {
  let idOfVisible = status.indexOf(true);
  left.setAttribute('disabled', true);

  logos[idOfVisible].classList.remove('appear-to-left');
  logos[idOfVisible].classList.add('disappear-to-left');
  setTimeout(() => {
    logos[idOfVisible].classList.add('hidden');
    logos[idOfVisible].classList.remove('disappear-to-left');
    logos[idOfVisible].classList.remove('md:flex');
  }, 600);

  status[idOfVisible] = false;

  if (idOfVisible === logos.length - 1) {
    logos[0].classList.remove('hidden');

    logos[0].classList.add('appear-to-left');
    logos[0].classList.add('md:flex');

    setTimeout(() => {
      logos[0].classList.remove('appear-to-left');

      logos[idOfVisible].classList.add('hidden');
      logos[idOfVisible].classList.remove('disappear-to-left');
      left.removeAttribute('disabled');
    }, 1000);
    status[0] = true;
  } else {
    logos[idOfVisible + 1].classList.remove('hidden');

    logos[idOfVisible + 1].classList.add('appear-to-left');
    logos[idOfVisible + 1].classList.add('md:flex');
    setTimeout(() => {
      logos[idOfVisible + 1].classList.remove('appear-to-left');
      logos[idOfVisible].classList.add('hidden');
      logos[idOfVisible].classList.remove('disappear-to-left');
      left.removeAttribute('disabled');
    }, 1000);

    status[idOfVisible + 1] = true;
  }
});

buttons.forEach(function (it, index) {
  it.addEventListener('click', () => {
    console.log(index);
    let idOfVisible = status.indexOf(true);

    logos[idOfVisible].classList.add('hidden');
    logos[idOfVisible].classList.remove('md:flex');

    buttons[idOfVisible].classList.remove('opacity-100');
    buttons[idOfVisible].classList.add('opacity-50');

    status[idOfVisible] = false;
    status[index] = true;
    logos[index].classList.remove('hidden');
    logos[index].classList.add('md:flex');
    buttons[index].classList.remove('opacity-50');
    buttons[index].classList.add('opacity-100');
  });
});
