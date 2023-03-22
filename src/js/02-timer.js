import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

  const dateTimePicker = document.getElementById("datetime-picker");
  const startButton = document.querySelector("[data-start]");
  const daysElement = document.querySelector("[data-days]");
  const hoursElement = document.querySelector("[data-hours]");
  const minutesElement = document.querySelector("[data-minutes]");
  const secondsElement = document.querySelector("[data-seconds]");


  const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
 onClose(selectedDates) {
  const selectedDate = selectedDates[0];
  if (selectedDate <= new Date()) {
    Notiflix.Notify.failure('Please choose a date in the future');
    startButton.disabled = true;
  } else {
    Notiflix.Notify.Success('Date is valid!');
    startButton.disabled = false;
  }
},
  };

  // Ініціалізація flatpickr
  flatpickr(dateTimePicker, options);

  let countdownIntervalId;

  startButton.addEventListener("click", () => {
    startButton.disabled = true;
    const selectedDate = new Date(dateTimePicker.value);
    countdownIntervalId = setInterval(() => {
      const timeLeft = selectedDate - new Date();
      if (timeLeft < 0) {
        clearInterval(countdownIntervalId);
        return;
      }
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
      const seconds = Math.floor((timeLeft / 1000) % 60);
      daysElement.textContent = days.toString().padStart(2, "0");
      hoursElement.textContent = hours.toString().padStart(2, "0");
      minutesElement.textContent = minutes.toString().padStart(2, "0");
      secondsElement.textContent = seconds.toString().padStart(2, "0");
    }, 1000);
  });