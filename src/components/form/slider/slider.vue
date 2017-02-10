<!--
TODO:
  支持垂直
-->
<template lang="jade">
  .form__slider.slider__wrapper(:class="wrapperClasses")
    slot(name="icon-left")
    .slider(
      v-el:slider,
      :class="sliderClasses",
      :tabindex="tabindex",
      :autofocus="autofocus",
      @mousedown="_onMousedown",
      @touchstart="_onTouchstart"
      @focus="_onFocus",
      @blur="_onBlur",
      )
      //-upperHandle
      handle(
        :offset="upperOffset",
        :value="upperHandle",
        :show-tip="showTip",
        :dragging="dragging",
        :tip-formatter="tipFormatter",
        :current-handle="currentHandle",
        handle="upperHandle",
        )
      //-lowerHandle
      handle(
        v-if="range",
        :offset="lowerOffset",
        :value="lowerHandle",
        :show-tip="showTip",
        :dragging="dragging",
        :tip-formatter="tipFormatter",
        :current-handle="currentHandle",
        handle="lowerHandle",
        )
      //- 路径
      .slider__track(v-if="canShowTrack", :style="trackStyle")
      //- 刻度
      scale(
        v-if="canShowScale",
        :min="min",
        :max="max",
        :min-label="minLabel",
        :max-label="maxLabel",
        :step="step",
        :scales="_scales",
        :track-showed="canShowTrack",
        :value="[lowerHandle, upperHandle]",
        :show-label="showLabel")
    slot(name="icon-right")
</template>

<script>
  import Control from '../control'
  import Scale from './scale'
  import Handle from './handle'
  import { coerceBoolean, coerceNumber } from '../../_helpers/coerces.js'
  import { getMousePosition, getTouchPosition, pauseEvent, isTouchEvent } from './helpers'

  export default {
    name: 'Slider',
    mixins: [
      Control
    ],
    components: {
      Scale,
      Handle
    },
    props: {
      // in Control
      // - name
      // - value        *
      // - disabled     *
      // - size         *

      // 范围模式, 显示两个handle，表示一个范围
      range: {
        type: Boolean,
        coerce: coerceBoolean
      },

      // handle独立模式，默认情况下，slider上的一个handle的语义是表示一个范围的上限,即(min -> upperHandle),
      // 在range模式下，范围是(lowerHandle -> upperHandle). 如果要将handle的语义改变为一个独立的点，可以将isolate赋值为true
      // isolate 模式下不会显示track(轨道)
      isolate: {
        type: Boolean,
        coerce: coerceBoolean
      },

      min: {
        type: Number,
        default: 0,
        coerce: coerceNumber
      },

      max: {
        type: Number,
        default: 100,
        coerce: coerceNumber
      },

      // 步长，取值大于0，且能被(max - min)整除, 当step == null 时，只能拖动到scales上
      step: {
        type: Number,
        coerce: coerceNumber,
        default: 1
      },

      // 显示刻度
      showScale: {
        type: Boolean,
        coerce: coerceBoolean
      },

      // 显示刻度标注,
      showLabel: {
        type: Boolean,
        default: true,
        coerce: coerceBoolean
      },

      minLabel: {
        type: [String, Object]
      },

      maxLabel: {
        type: [String, Object]
      },

      // 自定义刻度，handle只能停留在自定义的刻度上,
      // 刻度值 value,label
      scales: Array,

      // 显示tip
      showTip: {
        type: Boolean,
        default: true,
        coerce: coerceBoolean
      },

      // tip格式化
      tipFormatter: {
        type: Function,
        default: (value) => value
      },

      onAfterChange: {
        type: Function,
        default: () => {}
      }
    },

    data () {
      return {
        // 当前激活的handle
        currentHandle: null,
        // 下限handle,在range模式有用
        lowerHandle: null,
        // 上限handle
        upperHandle: null,
        dragging: false
      }
    },

    computed: {
      wrapperClasses () {
        return [
          {
            '--icon-appended': this.$getSlot('icon-left') != null || this.$getSlot('icon-right') != null
          }
        ]
      },

      sliderClasses () {
        return [
          {
            'is-disabled': this.disabled
          }
        ]
      },

      canShowScale () {
        return this.showScale && (this.step != null || this._scales.length)
      },

      // 显示track， range模式，和非isolate 模式下显示
      canShowTrack () {
        return this.range || !this.isolate
      },

      // 获取step的精度
      _precision () {
        if (this.step === null) return 0

        const step = this.step.toString()
        if (step.indexOf('.') !== -1) {
          return step.length - step.indexOf('.') - 1
        } else {
          return 0
        }
      },

      _scales () {
        if (this.scales) {
          let scales = [...this.scales]
          if (scales.find(({value}) => value === this.min) == null) {
            scales.push({value: this.min, label: this.minLabel})
          }

          if (scales.find(({value}) => value === this.max) == null) {
            scales.push({value: this.max, label: this.maxLabel})
          }

          return scales.map(scale => ({
            ...scale,
            offset: this._getOffsetByValue(scale.value)
          }))
        } else {
          return []
        }
      },

      upperOffset () {
        return this._getOffsetByValue(this.upperHandle)
      },

      // 计算lower handle 的偏移
      lowerOffset () {
        return this._getOffsetByValue(this.lowerHandle)
      },

      trackStyle () {
        return {
          left: `${this.lowerOffset}%`,
          right: `${100 - this.upperOffset}%`
        }
      }
    },

    methods: {
      // 在document上添加事件
      _addEvents (type) {
        if (type === 'mouse') {
          document.addEventListener('mousemove', this._onMousemove)
          document.addEventListener('mouseup', this._onMouseend)
        } else {
          document.addEventListener('touchmove', this._onTouchmove)
          document.addEventListener('touchend', this._onTouchend)
        }
      },

      _removeEvents (type) {
        if (type === 'mouse') {
          document.removeEventListener('mousemove', this._onMousemove)
          document.removeEventListener('mouseup', this._onMouseend)
        } else {
          document.removeEventListener('touchmove', this._onTouchmove)
          document.removeEventListener('touchend', this._onTouchend)
        }
      },

      // 处理值变动
      _onChange (handleChanging, value) {
        this[handleChanging] = value
        this.$changeInner(() => {
          if (this.range) {
            const data = [this.lowerHandle, this.upperHandle]
            this.value = data
            this.$notify('onChange', null, {value: data})
          } else {
            this.value = value
            this.$notify('onChange', null, {value})
          }
        })
      },

      // 鼠标按下
      _onMousedown (event) {
        if (this.disabled) return

        const pos = getMousePosition(event)
        this._onStart(pos)
        this._addEvents('mouse')
        pauseEvent(event)
      },

      // 鼠标移动
      _onMousemove (event) {
        const pos = getMousePosition(event)
        this._onMove(event, pos)
      },

      _onMouseend (event) {
        this._onEnd('mouse')
      },

      _onTouchstart (event) {
        if (this.disabled) return
        if (!isTouchEvent(event)) return
        const pos = getTouchPosition(event)
        this._onStart(pos)
        this._addEvents('touch')

        // 阻止触发click事件
        pauseEvent(event)
      },

      _onTouchmove (event) {
        if (!isTouchEvent(event)) {
          this._onEnd('touch')
          return
        }

        const pos = getTouchPosition(event)
        this._onMove(event, pos)
      },

      _onTouchend (event) {
        this._onEnd('touch')
      },

      // 开始拖动
      _onStart (position) {
        // 通过当前鼠标(触点)位置计算值
        const value = this._getValueByPosition(position)
        this.startValue = value
        this.startPosition = position

        const { upperHandle, lowerHandle } = this

        // 判断正在操作(变化)的handle
        let handleChanging = 'upperHandle'
        if (this.range) {
          // 判断按下鼠标的位置更接近哪个handle
          if (Math.abs(upperHandle - value) > Math.abs(lowerHandle - value)) {
            handleChanging = 'lowerHandle'
          } else if (upperHandle === lowerHandle) {
          // 如果upperHandle 和 lowerHandle 在同一个位置
            handleChanging = value < upperHandle ? 'lowerHandle' : 'upperHandle'
          }
        }

        this.currentHandle = handleChanging
        this.dragging = true

        // 没有变化
        if (value === this[handleChanging]) return

        this._onChange(handleChanging, value)
      },

      // 移动
      _onMove (e, position) {
        pauseEvent(e)
        const { min, max, startPosition, startValue, currentHandle, lowerHandle, upperHandle } = this
        // 计算出差值，避免使用_getValueByPosition
        const diffPosition = position - startPosition
        const diffValue = diffPosition / this._getSliderLength() * (max - min)

        const value = this._alignValue(startValue + diffValue)
        if (this.range) {
          if (currentHandle === 'upperHandle' && value < lowerHandle) {
            this._onChange(currentHandle, lowerHandle)
            this.currentHandle = 'lowerHandle'
          } else if (currentHandle === 'lowerHandle' && value > upperHandle) {
            this._onChange(currentHandle, upperHandle)
            this.currentHandle = 'upperHandle'
          } else if (value === this[currentHandle]) {
            return
          }

          this._onChange(this.currentHandle, value) // !
        } else {
          if (value === this[currentHandle]) return
          this._onChange(currentHandle, value)
        }
      },

      // 释放
      _onEnd (type) {
        this._removeEvents(type)
        this.$notify('onAfterChange', null, {value: this.value})
        this.currentHandle = null
        this.dragging = false
      },

      _getClosestStep (val) {
        const { step, _precision } = this
        return parseFloat((Math.round(val / step) * step).toFixed(_precision))
      },

      // 对齐value到step
      _alignValue (val) {
        const { min, max, step, _scales } = this

        if (val <= min) val = min
        if (val >= max) val = max

        // 自定义刻度
        if (_scales.length > 0) {
          let scales = _scales
          // 当step不为null时，可以拖动到step上，否则只能拖动到自定义刻度上
          if (step !== null) {
            scales = _scales.concat([{value: this._getClosestStep(val)}])
          }

          const diffs = scales.map(({value}) => Math.abs(value - val))
          const closestScale = Math.min(...diffs)
          return scales[diffs.indexOf(closestScale)].value
        } else if (step != null) {
          // step 递增刻度
          return this._getClosestStep(val)
        } else {
          return val
        }
      },

      _getOffsetByValue (value) {
        const { min, max } = this
        value = value || min
        return (value - min) / (max - min) * 100
      },

      _getValueByOffset (offset) {
        const { min, max } = this
        const ratio = offset / this._getSliderLength()
        return ratio * (max - min) + min
      },

      _getValueByPosition (position) {
        const offset = position - this._getSliderStart()
        return this._alignValue(this._getValueByOffset(offset))
      },

      // 滑动条的宽度
      _getSliderLength () {
        const slider = this.$els.slider
        if (!slider) return 0
        return slider.clientWidth
      },

      // 活动条的起始
      _getSliderStart () {
        const slider = this.$els.slider
        // getBoundingClientRect 基于视口
        return slider.getBoundingClientRect().left + window.pageXOffset
      },

      // 刷新handle
      _refresh (value = this.value) {
        if (value == null) return
        if (this.range && Array.isArray(value)) {
          const [lowerHandle, upperHandle] = value
          this.lowerHandle = this._alignValue(lowerHandle)
          this.upperHandle = this._alignValue(upperHandle)
        } else {
          this.upperHandle = this._alignValue(this.value)
        }
      },

      // 验证step
      _checkStep () {
        const { step, min, max } = this
        const multiplier = 10 ** this._precision
        if (step == null) return
        const modal = ((max - min) * multiplier) % (step * multiplier)
        if (modal !== 0) {
          throw new TypeError(`Slider Error: step(${step}) isn't evenly divisible by 'max - min'(${max - min}).`)
        }
      }
    },

    // 初始化
    compiled () {
      this._checkStep()
      const { range, min } = this
      const initialValue = range ? [min, min] : min
      const value = this.value != null ? this.value : initialValue

      if (range) {
        this.lowerHandle = this._alignValue(value[0])
        this.upperHandle = this._alignValue(value[1])
      } else {
        this.upperHandle = this._alignValue(value)
      }
    },

    watch: {
      // step 变化
      step (val, oldVal) {
        if (val !== oldVal) {
          this._checkStep()
          this._refresh()
        }
      },

      // min 变动
      min (val, oldVal) {
        if (val !== oldVal) {
          if (this.$isChangingInner()) {
            return
          }

          this.$changeInner(() => {
            if (val > this.max) {
              let temp = this.max
              this.max = val
              this.min = temp
            }

            this._checkStep()
            this._refresh()
          })
        }
      },

      // max 变动
      max (val, oldVal) {
        if (val !== oldVal) {
          if (this.$isChangingInner()) {
            return
          }

          this.$changeInner(() => {
            if (val < this.min) {
              this.max = this.min
              this.min = val
            }

            this._checkStep()
            this._refresh()
          })
        }
      },

      // value 从外部被改变
      value (val) {
        if (!this.$isChangingInner()) {
          this._refresh(val)
        }
      }

    }
  }
</script>
