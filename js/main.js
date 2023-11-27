// после готовности DOM
document.addEventListener('DOMContentLoaded', () => {
  ItcSlider.getOrCreateInstance('.slider');
});

ItcSlider.getOrCreateInstance('.itc-slider', {
  autoplay: true
});