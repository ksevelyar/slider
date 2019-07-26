export default class Slider {
  constructor(slider, itemWidth = 200, visibleItems = 4, step = 1) {
    this.slider = slider
    this._itemWidth = itemWidth
    this._visibleItems = visibleItems
    this._step = step
    
    this._content = this.slider.querySelector('.gallery')
    this._childrenCount = this._content.children.length
    this._maxPosition = this._childrenCount - this._visibleItems
    this._position = 0
  }

  bind() {
    const leftArrow = this.slider.querySelector('.slider__left-arrow')
    const rightArrow = this.slider.querySelector('.slider__right-arrow')

    leftArrow.addEventListener('click', event => this._moveRight(event)) 
    rightArrow.addEventListener('click', event => this._moveLeft(event))
  }

  _moveLeft(event) {
    event.preventDefault()

    const newPosition = this._position - this._step
    if (newPosition < -this._maxPosition - 1) { return }

    this._moveContent(newPosition)
  }

  _moveRight(event) {
    event.preventDefault()

    const newPosition = this._position + this._step
    if (newPosition > 0) { return }

    this._moveContent(newPosition)
  }

  _moveContent(newPosition) {
    this._position = newPosition
    const leftOffset = newPosition * this._itemWidth 
    this._content.style.left = `${leftOffset}px`
  }
}


