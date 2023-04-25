import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const inputValue = document.querySelector('input#datetime-picker');
const buttonStart = document.querySelector('button[data-start]');

const timerDays = document.querySelector('span[data-days]');
const timerHours = document.querySelector('span[data-hours]');
const timerMinutes = document.querySelector('span[data-minutes]');
const timerSeconds = document.querySelector('span[data-seconds]');

buttonStart.addEventListener('click', onStartTime)
buttonStart.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
  //   console.log(selectedDates[0]);
    if (selectedDates[0].getTime()< Date.now())
    {
      Notify.failure("Please choose a date in the future");
      return;
    };
    buttonStart.disabled = false;
  },
};

flatpickr(inputValue, options);

function onStartTime(evt)
{
const intervalId = setInterval(() => {
 let timeToEnd = (new Date(inputValue.value).getTime()) - Date.now();
    
     const { days, hours, minutes, seconds } = convertMs(timeToEnd);
    
  if (timeToEnd  <= 0)
  {
    clearInterval(intervalId);
    buttonStart.disabled = false;
    return;
    }
  timerDays.textContent = String(days).padStart(2, "0");
  timerHours.textContent = String(hours).padStart(2, "0");
  timerMinutes.textContent = String(minutes).padStart(2, "0");
  timerSeconds.textContent = String(seconds).padStart(2, "0");
  }, 1000);
  
  buttonStart.disabled = true;
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}
// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}


