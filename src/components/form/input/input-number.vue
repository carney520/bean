<!--
数字输入框
-->
<template lang="jade">
  .form__input-group
    .form__control-addon.input-number-left(@click.stop.prevent="_increase('down')", :class="{'down-disabled': downDisabled}")
      icon(name="minus", awesome, type="button")
    input.form__control(
      :class="controlClasses",
      v-el:input,
      type="text",
      autocomplete="off",
      :autofocus="autofocus",
      :placeholder="placeholder",
      :value="value",
      :disbaled="disbaled",
      @change="_onChange",
      @focus="_onFocus",
      @blur="_onBlur",
      )
    .form__control-addon.input-number-right(@click.stop.prevent="_increase('up')", :class="{'up-disabled': upDisabled}")
      icon(name="plus", awesome, type="button")
</template>

<script>
  import TextField from '../text-field'
  import { coerceBoolean, coerceNumber } from '../../_helpers/coerces'
  import {Icon} from '../../icon'

  export default {
    name: 'InputNumber',
    mixins: [
      TextField
    ],
    components: {
      Icon
    },
    props: {
      // in Control
      // - name
      // - value        *
      // - defaultValue *
      // - disabled     *
      // - size         *
      // - onChange     *
      // - onFocus
      // - onBlur

      // - extends
      min: {
        type: Number,
        default: -Infinity,
        coerce: coerceNumber
      },

      max: {
        type: Number,
        default: Infinity,
        coerce: coerceNumber
      },

      step: {
        type: Number,
        default: 1,
        coerce: coerceNumber
      },

      // override
      value: {
        type: Number,
        coerce: coerceNumber
      },

      validatable: {
        type: Boolean,
        coerce: coerceBoolean
      }
    },

    computed: {
      controlClasses () {
        return [
          {
            'is-focus': this.isFocus,
            'is-disabled': this.disabled
          }
        ]
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

      upDisabled () {
        return typeof this.value === 'number' && this.value >= this.max
      },

      downDisabled () {
        return typeof this.value === 'number' && this.value <= this.min
      }
    },

    methods: {
      _onChange (event) {
        let value = event.target.value.trim()
        this._parse(value)
      },

      _parse (value) {
        if (!value || typeof value === 'number') {
          return
        } else {
          let num = Number.parseFloat(value)
          if (!Number.isNaN(num)) {
            this.$changeInner(() => {
              this.value = Number.parseFloat(num.toFixed(this._precision))
            })
          } else {
            return
          }
        }
      },

      _increase (direction) {
        if (this.disabled) return
        const { min, max, step, value: val } = this
        let value = Number(val)
        if (Number.isNaN(value)) return

        value += direction === 'down' ? -step : step
        value = value > max
          ? max
          : value < min
          ? min
          : value

        this.$changeInner(() => {
          this.value = value
        })
        this.$els.input.focus
      }
    },

    watch: {
      value (value, oldValue) {
        if (!this.$isChangingInner()) {
          this._parse(value)
        } else {
          this.$notify('onchange', null, {value, oldValue})
        }
      }
    },

    ready () {
      this._parse(this.value)
    }
  }
</script>
