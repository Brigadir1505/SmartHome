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