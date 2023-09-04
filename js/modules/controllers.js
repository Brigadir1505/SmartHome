const humidityValueElement = document.getElementById("humidityValue");
      const increaseButton = document.getElementById("increaseButton");
      const decreaseButton = document.getElementById("decreaseButton");
      const temperatureValueElement = document.getElementById("temperatureValue");
      const temperatureIncreaseButton = document.getElementById("temperatureIncreaseButton");
      const temperatureDecreaseButton = document.getElementById("temperatureDecreaseButton");

      let humidityValue = parseInt(humidityValueElement.innerText);
      let temperatureValue = parseInt(temperatureValueElement.innerText);

      temperatureIncreaseButton.addEventListener("click", function () {
        if (temperatureValue < 40) {
          temperatureValue += 1;
          updateTemperatureValue();
        }
      });
      increaseButton.addEventListener("click", function () {
        if (humidityValue < 100) {
          humidityValue += 1;
          updateHumidityValue();
        }

      });
      temperatureDecreaseButton.addEventListener("click", function () {
        if (temperatureValue > 10) {
          temperatureValue -= 1;
          updateTemperatureValue();
        }
      });

      decreaseButton.addEventListener("click", function () {
        if (humidityValue > 0) {
          humidityValue -= 1;
          updateHumidityValue();
        }
      });

      function updateTemperatureValue() {
        temperatureValueElement.innerText = temperatureValue;
      }
      function updateHumidityValue() {
        humidityValueElement.innerText = humidityValue;
      }