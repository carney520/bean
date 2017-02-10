<template lang="jade">
  .nprogress(v-show="status != null", transition="fade")
    .nprogress__bar(:style="barStyles")
      .nprogress__peg
    icon.nprogress__spinner(v-if="showSpinner", name="circle-o-notch", type="primary:loader")
</template>

<script>
  import { coerceBoolean, coerceNumber } from '../_helpers/coerces'
  import {Icon} from '../icon'

  function clamp (n, min, max) {
    return n < min
     ? min
     : n > max
     ? max
     : n
  }

  export default {
    name: 'NProgress',
    components: {
      Icon
    },
    props: {
      minmum: {
        type: Number,
        default: 0.08,
        coerce: coerceNumber
      },

      // 过渡动画
      easing: {
        type: String,
        default: 'ease'
      },

      // 过渡的速度
      speed: {
        type: Number,
        default: 350,
        coerce: coerceNumber
      },

      // 慢慢移动
      trickle: {
        type: Boolean,
        default: true,
        coerce: coerceBoolean
      },

      trickleSpeed: {
        type: Number,
        default: 250,
        coerce: coerceNumber
      },

      showSpinner: {
        type: Boolean,
        default: true,
        coerce: coerceBoolean
      },
      // 注册到路由钩子
      registerRouterHook: {
        type: Boolean,
        coerce: coerceBoolean
      }
    },

    data () {
      return {
        status: null
      }
    },

    computed: {
      isStarted () {
        return typeof this.status === 'number'
      },

      computedOffset () {
        if (this.status != null) {
          return `-${(1 - this.status) * 100}%`
        }
        return 0
      },

      barStyles () {
        return {
          transition: `all ${this.speed}ms ${this.easing}`,
          transform: `translate3d(${this.computedOffset}, 0px, 0px)`
        }
      }
    },
    methods: {
      set (n) {
        n = clamp(n, this.minmum, 1)
        this.status = n

        if (n === 1) {
          this.status = null
        }
      },

      // 开始
      start () {
        if (!this.isStarted) this.set(0)

        let work = () => {
          setTimeout(() => {
            if (!this.isStarted) return
            this.inc()
            // 递归
            work()
          }, this.trickleSpeed)
        }

        if (this.trickle) work()
      },

      done () {
        if (!this.isStarted) return
        this.inc(0.3 + 0.5 * Math.random())
        this.$nextTick(() => {
          this.set(1)
        })
      },

      // 增加
      inc (amount) {
        let n = this.status
        if (!n) {
          return this.start()
        } else if (n > 1) {
          return
        } else {
          // 自动
          if (typeof amount !== 'number') {
            if (n >= 0 && n < 0.25) {
              // 3 - 6%
              amount = (Math.random() * 3 + 6) / 100
            } else if (n >= 0.25 && n < 0.65) {
              // 0 - 3%
              amount = (Math.random() * 3) / 100
            } else if (n >= 0.65 && n < 0.9) {
              // 0 - 2%
              amount = (Math.random() * 2) / 100
            } else if (n >= 0.9 && n < 0.99) {
              amount = 0.005
            } else {
              amount = 0
            }
          }

          n = clamp(n + amount, 0, 0.99)
          return this.set(n)
        }
      }
    },

    events: {
      'nprogress:start' () {
        this.start()
      },
      'nprogress:done' () {
        this.done()
      }
    },

    created () {
      if (this.registerRouterHook && this.$router) {
        this.$router.beforeEach(({next}) => {
          this.start()
          next()
        })

        this.$router.afterEach(() => {
          this.done()
        })
      }
    }
  }
</script>
