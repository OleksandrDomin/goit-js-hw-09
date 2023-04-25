
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const buttonSubmit = document.querySelector('.form');
const button = document.querySelector('button[type="submit"]');

buttonSubmit.addEventListener('submit', onClick)
let firstDelay;
let delayStep;
let amount;

function onClick(evt) {
evt.preventDefault();
  button.disabled = true;
  firstDelay  = Number(evt.currentTarget.delay.value);
  delayStep = Number(evt.currentTarget.step.value);
  amount = Number(evt.currentTarget.amount.value);

buttonSubmitDalay(firstDelay, delayStep, amount);

  for (let i = 0; i < amount; i += 1) {
    const promise = createPromise(i, delayStep);

    promise.then(({ position, delay }) => {
    Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
  Notify.failure(`Rejected promise ${position} in ${delay}ms`);
  });
  }
};

 function createPromise(position, delay)
 {
   const promiseDelay = firstDelay + position * delay;
   const promisePosition = position + 1;

  return new Promise((res, rej) => {
    const shouldResolve = Math.random() > 0.5;

 setTimeout(() => {  
      if (shouldResolve) {
        res({ position: promisePosition, delay: promiseDelay})
      } else {
        rej({ position: promisePosition, delay: promiseDelay})
      }
    }, promiseDelay);
  });
};

function buttonSubmitDalay(firstDelay, delayStep, amount)
{
  setTimeout(() => {
    button.disabled = false;
  }, firstDelay + (amount*delayStep))
};
