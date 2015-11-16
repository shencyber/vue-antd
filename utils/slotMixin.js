export default {
  compiled () {
    this._bindTriggerEvent()
  },

  methods: {
    _getTriggerTarget () {
      return this.$el.querySelector('[slot="trigger"]')
    },

    _bindTriggerEvent () {
      const el = this.$el.querySelector('[slot="trigger"]')
      if (el) {
        el.addEventListener('blur', this._onBlur.bind(this), false)
        el.addEventListener('click', this._onClick.bind(this), false)
        el.addEventListener('focus', this._onFocus.bind(this), false)
        el.addEventListener('mousedown', this._onMouseDown.bind(this), false)
        el.addEventListener('mouseenter', this._onMouseEnter.bind(this), false)
        el.addEventListener('mouseleave', this._onMouseLeave.bind(this), false)
        el.addEventListener('touchstart', this._onTouchStart.bind(this), false)
      }
    }
  }
}