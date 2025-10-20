document.addEventListener("DOMContentLoaded", function() {
    let closeIcon = document.querySelector("#close-btn .Icon");
    if (closeIcon) {
        closeIcon.addEventListener("click", function() {
            let banner = document.getElementById("Banner7");
            if (banner) {
                banner.style.display = "none";
            }
        });
    } else {
        console.log("Close icon not found");
    }
});
document.addEventListener('DOMContentLoaded', function() {
  const sliderTrack = document.querySelector('.timeline-slider-track');
  const slides = document.querySelectorAll('.timeline-slide');
  const prevBtn = document.querySelector('.timeline-prev-btn');
  const nextBtn = document.querySelector('.timeline-next-btn');
  let currentIndex = 1; 
  let isTransitioning = false;
  function updateSlider(transition = true) {
    if (transition) {
      sliderTrack.style.transition = 'transform 0.5s ease';
    } else {
      sliderTrack.style.transition = 'none';
    }
    const slideWidth = slides[0].offsetWidth;
    const gap = 30; 
    const viewportWidth = window.innerWidth;
    const offset = (viewportWidth - slideWidth) / 2;
    sliderTrack.style.transform = `translateX(calc(-${currentIndex * (slideWidth + gap)}px + ${offset}px))`;
  }
  function nextSlide() {
    if (isTransitioning) return;
    isTransitioning = true;
    currentIndex++;
    updateSlider(true);
    if (currentIndex === slides.length - 1) {
      setTimeout(() => {
        currentIndex = 1;
        updateSlider(false);
        isTransitioning = false;
      }, 500);
    } else {
      setTimeout(() => {
        isTransitioning = false;
      }, 500);
    }
  }
  function prevSlide() {
    if (isTransitioning) return;
    isTransitioning = true;
    currentIndex--;
    updateSlider(true);
    if (currentIndex === 0) {
      setTimeout(() => {
        currentIndex = slides.length - 2;
        updateSlider(false);
        isTransitioning = false;
      }, 500);
    } else {
      setTimeout(() => {
        isTransitioning = false;
      }, 500);
    }
  }
  if (nextBtn) nextBtn.addEventListener('click', nextSlide);
  if (prevBtn) prevBtn.addEventListener('click', prevSlide);
  setInterval(nextSlide, 5000);
  updateSlider(false);
  window.addEventListener('resize', () => updateSlider(false));
});
document.addEventListener('DOMContentLoaded', function() {
  const selectAllCheckbox = document.getElementById('selectAll');
  const itemCheckboxes = document.querySelectorAll('.item-checkbox');
  const checkboxCounter = document.getElementById('checkboxCounter');
  const totalPriceElement = document.getElementById('totalPrice');
  const resultCard = document.getElementById('resultCard');
  const warningIcon = document.getElementById('warningIcon');
  const successIcon = document.getElementById('successIcon');
  const resultHeadline = document.getElementById('resultHeadline');
  const resultSubtext = document.getElementById('resultSubtext');
  const resultPrice = document.getElementById('resultPrice');
  const resultPriceSubtext = document.getElementById('resultPriceSubtext');
  const comparisonText = document.getElementById('comparisonText');
  const totalItems = itemCheckboxes.length;
  function updateUI() {
    let checkedCount = 0;
    let totalPrice = 0;
    itemCheckboxes.forEach(checkbox => {
      if (checkbox.checked) {
        checkedCount++;
        totalPrice += parseFloat(checkbox.dataset.price);
      }
    });
    checkboxCounter.textContent = `(${checkedCount}/${totalItems} selected)`;
    totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
    selectAllCheckbox.checked = checkedCount === totalItems;
    selectAllCheckbox.indeterminate = checkedCount > 0 && checkedCount < totalItems;
    if (checkedCount === totalItems) {
      resultCard.style.background = 'linear-gradient(180deg, rgba(52, 199, 89, 0.05) 0%, rgba(52, 199, 89, 0.1) 100%)';
      resultCard.style.boxShadow = '0 0 25px 5px rgba(255, 0, 0, 0.3)';
      resultCard.classList.add('warning-state');
      warningIcon.style.display = 'none';
      successIcon.style.display = 'block';
      resultHeadline.innerHTML = "✅ You've covered<br>FEMA's full checklist.";
      resultSubtext.style.display = 'none';
      resultPrice.textContent = `$${totalPrice.toFixed(2)}`;
      resultPriceSubtext.style.display = 'none';
      comparisonText.style.display = 'block';
    } else if (checkedCount > 0) {
      resultCard.style.background = 'white';
      resultCard.style.boxShadow = '0 0 25px 5px rgba(255, 0, 0, 0.3)';
      resultCard.classList.add('warning-state');
      warningIcon.style.display = 'block';
      successIcon.style.display = 'none';
      resultHeadline.innerHTML = "⚠️ Your emergency kit is<br>missing critical essentials.";
      resultSubtext.style.display = 'block';
      resultSubtext.innerHTML = "Even one missing item could put your family at risk<br>during the first 72 hours.";
      resultPrice.textContent = `$${totalPrice.toFixed(2)}`;
      resultPriceSubtext.style.display = 'block';
      resultPriceSubtext.textContent = '+ hours of shopping and research';
      comparisonText.style.display = 'none';
    } else {
      resultCard.style.background = 'transparent';
      resultCard.style.boxShadow = '0 0 25px 5px rgba(255, 0, 0, 0.3)';
      resultCard.classList.add('warning-state');
      warningIcon.style.display = 'none';
      successIcon.style.display = 'none';
      resultHeadline.innerHTML = "";
      resultSubtext.style.display = 'none';
      resultPrice.textContent = `$${totalPrice.toFixed(2)}`;
      resultPriceSubtext.style.display = 'none';
      comparisonText.style.display = 'none';
    }
  }
  if (selectAllCheckbox) {
    selectAllCheckbox.addEventListener('change', function() {
      itemCheckboxes.forEach(checkbox => {
        checkbox.checked = this.checked;
      });
      updateUI();
    });
  }
  itemCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', updateUI);
  });
  updateUI();
});
function startCountdown() {
  const countdownElement = document.getElementById('countdown-timer');
  if (!countdownElement) return;
  const endTime = new Date().getTime() + (24 * 60 * 60 * 1000);
  function updateCountdown() {
    const now = new Date().getTime();
    const distance = endTime - now;
    if (distance < 0) {
      countdownElement.textContent = '00:00:00';
      clearInterval(countdownInterval);
      return;
    }
    const hours = Math.floor(distance / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    countdownElement.textContent = 
      String(hours).padStart(2, '0') + ':' + 
      String(minutes).padStart(2, '0') + ':' + 
      String(seconds).padStart(2, '0');
  }
  updateCountdown();
  const countdownInterval = setInterval(updateCountdown, 1000);
}
document.addEventListener('DOMContentLoaded', startCountdown);
function closeBanner() {
  const banner = document.getElementById('urgency-banner');
  if (banner) {
    banner.style.display = 'none';
  }
}
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});
