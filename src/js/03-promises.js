import { Notify } from 'notiflix/build/notiflix-notify-aio';


const refs = {
formRef: document.querySelector('.form'),
delayRef: document.querySelector('[name="delay"]'),
stepRef: document.querySelector('[name="step"]'),
amountRef: document.querySelector('[name="amount"]'),
}



refs.formRef.addEventListener('submit', runCreatePromises)


function createPromise(position, delay) {
 const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({position, delay});
      } else {
        reject({position,delay});
      }
    }, delay);
  });
  return promise;
}

function runCreatePromises(event) {
  event.preventDefault();



let delay = +(refs.delayRef.value);
const amount = +(refs.amountRef.value);
const step = +(refs.stepRef.value);


for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
    delay += step;
  }
  refs.formRef.reset()
}
