const startButton = document.getElementById('startButton');
  const stopButton = document.getElementById('stopButton');
  let intervalId;

  function changeBackgroundColor() {
    document.body.style.backgroundColor = getRandomHexColor();
  }

  startButton.addEventListener('click', function() {
    intervalId = setInterval(changeBackgroundColor, 1000);
    startButton.disabled = true;
    stopButton.disabled = false;
  });

  stopButton.addEventListener('click', function() {
    clearInterval(intervalId);
    stopButton.disabled = true;
    startButton.disabled = false;
  });

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }
