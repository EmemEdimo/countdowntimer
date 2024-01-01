'use strict';

const daysEl = document.querySelector('.daysEl');
const hoursEl = document.querySelector('.hoursEl');
const minutesEl = document.querySelector('.minutesEl');
const secondsEl = document.querySelector('.secondsEl');

const expectedDay = '8 March 2024';

const countDown = function () {
  const expectedDate = new Date(expectedDay);
  const currentDate = new Date();

  const totalSeconds = (expectedDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysEl.innerHTML = days;
  hoursEl.innerHTML = numFormat(hours);
  minutesEl.innerHTML = numFormat(minutes);
  secondsEl.innerHTML = numFormat(seconds);
};
const numFormat = num => (num < 10 ? `0${num}` : num);

countDown();
setInterval(countDown, 1000);
