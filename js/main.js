//----------------------------------------------------------------------------

const nav_items = document.querySelectorAll('.navigation__menu-item')
const items = document.querySelectorAll('#item')
nav_items.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    nav_items.forEach((element) => {
      element.classList.remove('active')
      items.forEach((item) => {
        item.classList.add('d-none')
      })
      
    })
    item.classList.add('active')
    document.querySelector('.'+ e.target.getAttribute('href').substring(1)).classList.remove('d-none')
  });
});

//----------------------------------------------------------------------------

  // MODULE_1______________________________________________________________________________________
  const brightnessSlider = document.getElementById('brightness-slider');
      const heartCenter = document.querySelector('.cls-1.center');
      const brightnessValue = brightnessSlider.value / 100;
      const yellowColor = `rgba(255, 255, 0, ${brightnessValue})`;
      heartCenter.style.filter = `url(#glow)`;
      heartCenter.style.fill = yellowColor;
      brightnessSlider.addEventListener('input', () => {
        const brightnessValue = brightnessSlider.value / 100;

        // Изменение цвета эффекта света
        const yellowColor = `rgba(255, 255, 0, ${brightnessValue})`;
        heartCenter.style.filter = `url(#glow)`;
        heartCenter.style.fill = yellowColor;
      });
 // MODULE_2______________________________________________________________________________________
 const ctx = document.getElementById('myChart');
new Chart(ctx, {
    type: 'bar',
    data: {

        labels: ['20', '21', '22', '23', '24', '25', '26', '27'],
        datasets: [{
            label: 'August',
            data: [30, 40, 50, 75, 68, 70, 90, 80],
            borderWidth: 1,
            parsing: {
                yAxisKey: '$'
            }
        },
        {
            label: 'September',
            data: [12, 19, 25, 30, 28, 40, 39, 30],
            borderWidth: 1,
            parsing: {
                yAxisKey: '$'
            }
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
 // MODULE_3______________________________________________________________________________________
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
//_______________________________________________________________________________________________

document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Отмена стандартного поведения формы (перезагрузка страницы)

    const formData = new FormData(loginForm);

    fetch("/", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // Успешная аутентификация, перенаправление или другие действия
          window.location.href = "/"; // Пример перенаправления
        } else {
          // Обработка ошибки аутентификации, например, показ сообщения об ошибке
          alert("Ошибка аутентификации. Пожалуйста, попробуйте снова.");
        }
      })
      .catch((error) => {
        console.error("Произошла ошибка при отправке запроса:", error);
      });
  });
});