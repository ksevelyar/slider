import Slider from './slider.js'

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.slider').forEach(slider => new Slider(slider).bind())
})
